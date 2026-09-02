import { useEffect, useState } from "react";
import useScramble from "../hooks/useScramble";

function Hero() {
  const [started, setStarted] = useState(false);
  const title1 = useScramble("Fullstack", started, 35);
  const title2 = useScramble("Engineer.", started, 35);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 px-8 md:px-16 pt-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", top: "18%", right: "8%", width: 1, height: "38%", background: "linear-gradient(to bottom, transparent, #1f1f1f, transparent)" }} />
        <div style={{ position: "absolute", top: "60%", left: "42%", width: "22%", height: 1, background: "linear-gradient(to right, transparent, #1f1f1f, transparent)" }} />
      </div>

      <div className="relative z-10 max-w-6xl">
         <p className="tag mb-8 intro-slide-up intro-slide-up-d1">Disponível para projetos — aberto a oportunidades</p>

        <h1 className="font-mono font-bold leading-none tracking-tight text-[clamp(3.5rem,10vw,9rem)] text-[#e8e8e8] mb-2 intro-slide-up intro-slide-up-d2">
          {title1}
        </h1>
        <h1 className="font-serif italic leading-none tracking-tight text-[clamp(3.5rem,10vw,9rem)] text-[#e8e8e8] mb-16 intro-slide-up intro-slide-up-d3" style={{ color: "#e8e8e8" }}>
          {title2}<span className="animate-cursor text-[#00ff87]">_</span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-[#1f1f1f] pt-8 intro-slide-up intro-slide-up-d4">
          <p className="max-w-md text-[#888] text-base font-light leading-relaxed">
           Sou desenvolvedor com base em backend (Python) e em transição para full‑stack com React. Gosto de transformar requisitos em código testável e de aprender novas ferramentas para entregar valor rápido.
          </p>
          <div className="flex gap-12 shrink-0">
            {[["1+", "anos"], ["8+", "projetos"], ["2", "open source"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-mono text-2xl font-bold text-[#e8e8e8]">{n}</div>
                <div className="tag mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 md:left-16 font-mono text-[10px] text-[#333] tracking-widest uppercase intro-slide-up intro-slide-up-d5">
        role para explorar
      </div>
    </section>
  );
}

export default Hero;
