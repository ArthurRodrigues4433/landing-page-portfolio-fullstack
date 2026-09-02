export const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%";

export const SKILLS: string[] = [
  "Python",
  "FastAPI",
  "REST APIs",
  "SQL (Postgres / SQLite)",
  "React",
  "TypeScript",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "HTML & CSS",
  "Bots & Integrations (Slack)",
  "CLI tools",
  "Unit testing",
  "Docker",
  "CI/CD (GitHub Actions)",
  "Git & GitHub",
  "Clean code & best practices",
  "Problem solving"
];

export interface Project {
  index: string;
  title: string;
  desc: string;
  stack: string[];
  year: string;
  role: string;
  image: string;
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Valora-Scan",
    desc: "Sistema de gestão de feiras com OCR: aplicação full-stack que permite aos usuários criar feiras, adicionar produtos via foto de etiqueta com reconhecimento automático de preços (varejo/atacado) e calcular o orçamento total. Backend em FastAPI com autenticação JWT e frontend em React.",
    stack: ["Python", "FastAPI", "React","JavaScript", "OCR", "JWT", "Full-Stack"],
    year: "2026",
    role: "Full-Stack Developer",
    image: "/projects/valora-scan.png",
    link: ""
  },
  {
    index: "02",
    title: "Nogueira & Nogueira Associados (LandingPage)",
    desc: "Sistema de gestão de feiras com OCR: aplicação full-stack que permite aos usuários criar feiras, adicionar produtos via foto de etiqueta com reconhecimento automático de preços (varejo/atacado) e calcular o orçamento total. Backend em FastAPI com autenticação JWT e frontend em React.",
    stack: ["Python", "FastAPI", "React", "OCR", "SQL", "JWT", "Full-Stack"],
    year: "2026",
    role: "Produção",
    image: "/projects/advogados.png",
    link: "https://www.nogueirasadvogados.com.br/"
  },
  {
    index: "04",
    title: "Todo-list-em-react-e-python",
    desc: "Aplicação full‑stack com frontend em React e backend em Python: cadastro de tarefas, persistência e integração via API REST — projeto para treinar integração cliente/servidor.",
    stack: ["React", "Python", "REST"],
    year: "2024",
    role: "Full‑Stack",
    image: "/projects/todo-list.png",
    link: "https://github.com/ArthurRodrigues4433/Todo-list-em-react-e-python"
  },
  {
    index: "05",
    title: "pydoll",
    desc: "Biblioteca para automação de navegadores baseados em Chromium sem WebDriver, focada em interações realistas e automação de fluxo.",
    stack: ["Automação", "Chromium", "Library"],
    year: "2024",
    role: "Autor",
    image: "/projects/pydoll.png",
    link: "https://github.com/ArthurRodrigues4433/pydoll"
  },
  {
    index: "06",
    title: "Ochattinho-BOT",
    desc: "Bot em Python para chat/automação — projeto prático para aprendizagem de integração com APIs de mensagens e lógica de conversação.",
    stack: ["Python"],
    year: "2023",
    role: "Desenvolvedor",
    image: "/projects/chatinhobot.png",
    link: "https://github.com/ArthurRodrigues4433/Ochattinho-BOT"
  }
];
