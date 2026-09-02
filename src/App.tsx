import { useState, useEffect } from "react";
import CursorGlow from "./components/CursorGlow";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <div className={`bg-[#080808] min-h-screen relative ${mounted ? "intro-fade" : "opacity-0"}`}>
      <CursorGlow />
      <Nav />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
