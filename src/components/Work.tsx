import { PROJECTS } from "../constants/data";
import useReveal from "../hooks/useReveal";

function Work() {
  useReveal();
  return (
    <section id="work" className="py-24 px-8 md:px-16 max-w-6xl mx-auto">
      <div className="flex items-center gap-6 mb-16 reveal">
        <span className="tag">Selecione o Projeto</span>
        <div className="accent-line flex-1 visible" style={{ background: "var(--color-border)" }} />
      </div>

      <div className="divide-y divide-border">
        {PROJECTS.map((p, i) => (
          <div key={p.index} className="work-item group py-8 px-2 cursor-pointer reveal" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="project-card-grid">
              <span className="font-mono text-xs text-muted pt-1 shrink-0 w-6">{p.index}</span>

              {p.image && (
                <div className="project-image-wrap project-image-reveal" data-delay={i * 60 + 80}>
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
              )}

              <div className="project-content project-content-reveal" data-delay={i * 60 + 160}>
                <div className="flex items-center gap-3 mb-2">
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-title-link">
                      <h3 className="font-mono font-bold text-xl text-primary group-hover:text-accent transition-colors duration-200">{p.title}</h3>
                    </a>
                  ) : (
                    <h3 className="font-mono font-bold text-xl text-primary group-hover:text-accent transition-colors duration-200">{p.title}</h3>
                  )}
                  <span className="work-arrow font-mono text-secondary text-sm transition-all duration-200">→</span>
                </div>
                <p className="text-secondary text-sm leading-relaxed mb-4 max-w-xl">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono text-[10px] text-tertiary border border-border px-2 py-1 uppercase tracking-wider">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-meta text-right shrink-0">
                <div className="font-mono text-xs text-muted">{p.year}</div>
                <div className="font-mono text-xs text-tertiary mt-1">{p.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
