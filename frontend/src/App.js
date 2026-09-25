import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import "@/App.css";
import Intro from "@/components/site/Intro";
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
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    document.title = "OrangeTree Capital — Operator-led family office, India first";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setShowIntro(false), reduce ? 100 : 2200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
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
      <AnimatePresence>{showIntro && <Intro />}</AnimatePresence>
      <Navbar />
      <main>
        <Hero active={!showIntro} />
        <Marquee />
        <WhatWeDo />
        <Edge />
        <Portfolio />
        <Team />
        <PitchForm />
      </main>
      <Footer />
      <Toaster position="bottom-right" toastOptions={{ style: { background: "#1A1816", color: "#FAF8F5", border: "1px solid #292524" } }} />
    </div>
  );
}

export default App;
