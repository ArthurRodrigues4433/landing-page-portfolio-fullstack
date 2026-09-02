import { SKILLS } from "../constants/data";
import useReveal from "../hooks/useReveal";

function About() {
  useReveal();
  return (
    <section id="about" className="py-24 px-8 md:px-16 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-16 md:gap-24">
        <div className="reveal-left">
          <p className="tag mb-6">About</p>
          <p className="font-mono text-[10px] text-[#333] leading-loose tracking-wider uppercase">
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
                <span className="text-[#333] w-20 shrink-0">{k}</span>
                <span className="text-[#888]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 reveal">
          <p className="text-[#e8e8e8] text-lg font-light leading-relaxed">
          Sou desenvolvedor em início de carreira, com base em backend usando Python e em transição para full‑stack com React. Nos meus projetos públicos implementei APIs REST, automações e bots, além de aplicações que integram frontend e backend, tudo com foco em entregar funcionalidades reais e aprender tecnologias na prática.
          </p>
          <p className="text-[#888] leading-relaxed">
            Priorizo código limpo, testável e de fácil manutenção; gosto de projetar APIs robustas, construir frontends responsivos e automatizar tarefas repetitivas para aumentar produtividade. Trabalho bem em equipe, aprendo rápido e busco sempre melhorar a qualidade do código e da experiência do usuário.
          </p>
          <p className="text-[#888] leading-relaxed">
            Estou em busca da primeira oportunidade como desenvolvedor júnior (remoto ou híbrido) para aplicar e ampliar minhas habilidades em projetos reais. Confira meus projetos no GitHub e vamos conversar sobre como posso contribuir para o seu time.
          </p>

          <div className="pt-6 border-t border-[#1f1f1f]">
            <p className="tag mb-4">Stack</p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span key={s} className="skill-pill font-mono text-[10px] text-[#555] border border-[#1f1f1f] px-3 py-1.5 uppercase tracking-wider cursor-default">
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