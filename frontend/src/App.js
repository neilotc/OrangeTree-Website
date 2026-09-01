import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import WhatWeDo from "@/components/site/WhatWeDo";
import Portfolio from "@/components/site/Portfolio";
import Team from "@/components/site/Team";
import Edge from "@/components/site/Edge";
import PitchForm from "@/components/site/PitchForm";
import Footer from "@/components/site/Footer";

function App() {
  useEffect(() => {
    document.title = "Orange Tree Capital — Operator-led family office, India first";
    const lenis = new Lenis({ anchors: true, lerp: 0.09 });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WhatWeDo />
        <Portfolio />
        <Team />
        <Edge />
        <PitchForm />
      </main>
      <Footer />
      <Toaster position="bottom-right" toastOptions={{ style: { background: "#1A1816", color: "#FAF8F5", border: "1px solid #292524" } }} />
    </div>
  );
}

export default App;
