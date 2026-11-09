import { useEffect, useState } from "react";

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
      style={{
        background: scrolled ? "var(--color-bg-nav-scrolled)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      }}
    >
      <a href="/" className="flex items-center gap-2">
        <img
          src="/projects/iconarthur.png"
          alt="Arthur R. logo"
          className="h-6 w-6 object-contain"
        />
        <span className="font-mono text-xs tracking-widest text-primary uppercase">Arthur-R.dev</span>
      </a>
      <div className="flex gap-8">
        <a href="#work" className="nav-link">Projetos</a>
        <a href="#about" className="nav-link">Sobre</a>
        <a href="#contact" className="nav-link">Contato</a>
      </div>
    </nav>
  );
}

export default Nav;
