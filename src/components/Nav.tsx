import { useEffect, useState } from "react";
import { COLORS } from "../constants/colors";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 transition-all duration-500"
      style={{ background: scrolled ? COLORS.bgNavScrolled : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? `1px solid ${COLORS.border}` : "1px solid transparent" }}
    >
      <span className="font-mono text-xs tracking-widest text-[#e8e8e8] uppercase">Arthur-R.dev</span>
      <div className="flex gap-8">
        <a href="#work" className="nav-link">Projetos</a>
        <a href="#about" className="nav-link">Sobre</a>
        <a href="#contact" className="nav-link">Contato</a>
      </div>
    </nav>
  );
}

export default Nav;
