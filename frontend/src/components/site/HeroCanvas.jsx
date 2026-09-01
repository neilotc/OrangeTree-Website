import { useEffect, useRef } from "react";

const HeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let w, h;
    const mouse = { x: 0.5, y: 0.5 };

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = canvas.width = rect.width * window.devicePixelRatio;
      h = canvas.height = rect.height * window.devicePixelRatio;
    };
    resize();
    window.addEventListener("resize", resize);

    const N = 42;
    const nodes = Array.from({ length: N }, (_, i) => ({
      bx: Math.random(),
      by: Math.random(),
      r: 1 + Math.random() * 2.2,
      p: Math.random() * Math.PI * 2,
      s: 0.15 + Math.random() * 0.35,
      depth: 0.3 + Math.random() * 0.7,
      orange: i % 6 === 0,
    }));

    const onMove = (e) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMove);

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      const pts = nodes.map((n) => {
        const drift = t * 0.00012 * n.s * 1000;
        const px = (n.bx + (mouse.x - 0.5) * 0.06 * n.depth) * w;
        const py = (n.by + (mouse.y - 0.5) * 0.06 * n.depth) * h;
        return {
          x: px + Math.cos(n.p + drift) * 18 * window.devicePixelRatio,
          y: py + Math.sin(n.p + drift * 1.3) * 18 * window.devicePixelRatio,
          ...n,
        };
      });
      ctx.lineWidth = 0.6 * window.devicePixelRatio;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);
          const max = 130 * window.devicePixelRatio;
          if (d < max) {
            ctx.strokeStyle = `rgba(232, 93, 4, ${(1 - d / max) * 0.14})`;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      pts.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * window.devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = p.orange ? "rgba(232, 93, 4, 0.75)" : "rgba(26, 24, 22, 0.28)";
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
};

export default HeroCanvas;
