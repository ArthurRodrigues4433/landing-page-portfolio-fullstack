import { SKILLS } from "../constants/data";
import useReveal from "../hooks/useReveal";

function About() {
  useReveal();
  return (
    <section id="about" className="py-24 px-8 md:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-16 md:gap-24">
        <div className="reveal-left">
          <p className="tag mb-6">About</p>
          <p className="font-mono text-[10px] text-muted leading-loose tracking-wider uppercase">
            {`{ dev\n  backend\n  fullstack }`}
          </p>
          <div className="mt-12 space-y-3">
            {[
              ["Baseado em", "Petrolina, BR"],
              ["Fuso horário", "UTC−3"],
              ["Disponível", "Remoto / Híbrido"],
              ["E‑mail", "arthurdev4433@gmail.com"],
              ["Whatsapp", "(81) 9 9138-8329"],
              ["GitHub", "github.com/ArthurRodrigues4433"],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-4 font-mono text-xs">
                <span className="text-muted w-20 shrink-0">{k}</span>
                <span className="text-secondary">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 reveal">
          <p className="text-primary text-lg font-light leading-relaxed">
            Sou desenvolvedor com foco em backend utilizando Python e experiência
            prática na construção de APIs REST e aplicações web. Também trabalho
            com React no desenvolvimento de interfaces, conectando frontend e
            backend para criar aplicações completas.
          </p>

          <p className="text-secondary leading-relaxed">
            Gosto de entender o problema antes de começar a programar. Busco
            desenvolver soluções bem estruturadas, com funcionalidades úteis,
            código organizado e atenção aos detalhes. Tenho interesse especial
            em sistemas web, integração de serviços e automatização de processos.
          </p>

          <p className="text-secondary leading-relaxed">
            Estou aberto a projetos freelance, desde a criação de sites e landing
            pages até o desenvolvimento de funcionalidades e sistemas web sob
            medida. Se você tem uma ideia ou precisa resolver um problema com
            tecnologia, podemos conversar.
          </p>

          <div className="pt-6 border-t border-border">
            <p className="tag mb-4">Stack</p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span key={s} className="skill-pill font-mono text-[10px] text-tertiary border border-border px-3 py-1.5 uppercase tracking-wider cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;