import { PROJECTS } from "../constants/data";
import useReveal from "../hooks/useReveal";

function Work() {
  useReveal();
  return (
    <section id="work" className="py-24 px-8 md:px-16 max-w-6xl mx-auto">
      <div className="flex items-center gap-6 mb-16 reveal">
        <span className="tag">Selecione o Projeto</span>
        <div className="accent-line flex-1 visible" style={{ background: "#1f1f1f" }} />
      </div>

      <div className="divide-y divide-[#1f1f1f]">
        {PROJECTS.map((p, i) => (
          <div key={p.index} className="work-item group py-8 px-2 cursor-pointer reveal" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="flex items-start gap-6 md:gap-12">
              <span className="font-mono text-xs text-[#333] pt-1 shrink-0 w-6">{p.index}</span>
              <div className="flex-1 grid md:grid-cols-[1fr_auto] gap-4 md:gap-12">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-mono font-bold text-xl text-[#e8e8e8] group-hover:text-[#00ff87] transition-colors duration-200">{p.title}</h3>
                    <span className="work-arrow font-mono text-[#888] text-sm transition-all duration-200">→</span>
                  </div>
                  <p className="text-[#888] text-sm leading-relaxed mb-4 max-w-xl">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="font-mono text-[10px] text-[#555] border border-[#1f1f1f] px-2 py-1 uppercase tracking-wider">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-mono text-xs text-[#333]">{p.year}</div>
                  <div className="font-mono text-xs text-[#555] mt-1">{p.role}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
