export const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%";

export const SKILLS: string[] = [
  "Python",
  "Java",
  "FastAPI",
  "REST APIs",
  "SQL",
  "React",
  "VueJS",
  "JavaScript",
  "Tailwind CSS",
  "HTML & CSS",
  "CLI tools",
  "Unit testing",
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
    title: "Nogueira & Nogueira Associados",
    desc: "Landing page institucional desenvolvida com React e JavaScript para um escritório de advocacia, com foco em transmitir credibilidade, profissionalismo e facilitar o contato com potenciais clientes. O projeto apresenta os serviços jurídicos, informações sobre o escritório e canais de atendimento, com layout moderno, navegação intuitiva e design responsivo para diferentes dispositivos.",
    stack: ["React","java Script"],
    year: "2026",
    role: "Produção",
    image: "/projects/advogados.png",
    link: "https://www.nogueirasadvogados.com.br/"
  },
  {
    index: "02",
    title: "Todo-list-em-react-e-python",
    desc: "Aplicação full‑stack com frontend em React e backend em Python: cadastro de tarefas, persistência e integração via API REST — projeto para treinar integração cliente/servidor.",
    stack: ["React", "Python", "REST"],
    year: "2024",
    role: "Full‑Stack",
    image: "/projects/todo-list.png",
    link: "https://github.com/ArthurRodrigues4433/Todo-list-em-react-e-python"
  },
  {
    index: "03",
    title: "Ochattinho-BOT",
    desc: "Bot em Python para chat/automação — projeto prático para aprendizagem de integração com APIs de mensagens e lógica de conversação.",
    stack: ["Python"],
    year: "2023",
    role: "Desenvolvedor",
    image: "/projects/chatinhobot.png",
    link: "https://github.com/ArthurRodrigues4433/Ochattinho-BOT"
  }
];
