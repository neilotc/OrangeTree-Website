import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";

let scriptPromise;
function loadTurnstile() {
  if (window.turnstile && typeof window.turnstile.render === "function") return Promise.resolve();
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      s.async = true;
      s.defer = true;
      s.onload = () => {
        const check = () => {
          if (window.turnstile && typeof window.turnstile.render === "function") resolve();
          else setTimeout(check, 50);
        };
        check();
      };
      s.onerror = () => reject(new Error("Turnstile failed to load"));
      document.head.appendChild(s);
    });
  }
  return scriptPromise;
}

const TurnstileWidget = forwardRef(({ onToken }, ref) => {
  const container = useRef(null);
  const widgetId = useRef(null);

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetId.current != null && window.turnstile) window.turnstile.reset(widgetId.current);
    },
  }));

  useEffect(() => {
    let cancelled = false;
    loadTurnstile()
      .then(() => {
        if (cancelled || !container.current) return;
        try {
          widgetId.current = window.turnstile.render(container.current, {
            sitekey: process.env.REACT_APP_TURNSTILE_SITE_KEY,
            theme: "light",
            callback: (t) => onToken(t),
            "expired-callback": () => onToken(""),
            "error-callback": () => onToken(""),
          });
        } catch (e) {
          console.error("Turnstile render failed:", e);
          onToken("");
        }
      })
      .catch((e) => {
        console.error(e);
        onToken("");
      });
    return () => {
      cancelled = true;
      if (widgetId.current != null && window.turnstile) {
        try {
          window.turnstile.remove(widgetId.current);
        } catch (e) {}
        widgetId.current = null;
      }
    };
  }, [onToken]);

  return <div ref={container} data-testid="turnstile-widget" aria-label="Bot verification" />;
});

export default TurnstileWidget;
