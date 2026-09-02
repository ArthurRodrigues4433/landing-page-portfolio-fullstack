import useReveal from "../hooks/useReveal";

function Contact() {
  useReveal();
  return (
    <section id="contact" className="py-32 px-8 md:px-16 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-4">
          <p className="tag">Disponível para vagas e Freelancers</p>
        </div>
        <h2 className="font-mono font-bold text-[clamp(2.5rem,6vw,5.5rem)] leading-none text-[#e8e8e8] mb-2 reveal">
          Pronto para contribuir
        </h2>
        <h2 className="font-serif italic text-[clamp(2.5rem,6vw,5.5rem)] leading-none mb-12 reveal" style={{ color: "#00ff87" }}>
          e aprender no dia a dia.
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 reveal">
          <a href="mailto:arthurdev4433@gmail.com" className="contact-link font-mono text-sm text-[#888] flex items-center gap-3">
            <span className="text-[#00ff87]">→</span> arthurdev4433@gmail.com
          </a>
          <a href="https://github.com/ArthurRodrigues4433" target="_blank" rel="noreferrer" className="contact-link font-mono text-sm text-[#888] flex items-center gap-3">
            <span className="text-[#00ff87]">→</span> github.com/ArthurRodrigues4433
          </a>
          <a href="https://linkedin.com/in/arthur-rodrigues123" target="_blank" rel="noreferrer" className="contact-link font-mono text-sm text-[#888] flex items-center gap-3">
            <span className="text-[#00ff87]">→</span> /in/arthur-rodrigues123
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
