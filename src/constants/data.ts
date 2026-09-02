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

export const PROJECTS = [
  {
    index: "01",
    title: "bank-sys-dio-challenge",
    desc: "Sistema bancário simples criado durante bootcamp: contas, autenticação básica, depósitos, saques e extratos. Código pensado para aprendizado de lógica de negócio em Python.",
    stack: ["Python", "CLI", "Arquitetura simples"],
    year: "2024",
    role: "Desenvolvedor"
  },
  {
    index: "02",
    title: "Saturn",
    desc: "API para operações de compra e venda de criptomoedas. Implementa endpoints para negociação e lógica de ordens, com foco em rotinas de backend e manipulação de dados.",
    stack: ["Python", "API", "REST"],
    year: "2025",
    role: "Backend"
  },
  {
    index: "03",
    title: "Todo-list-em-react-e-python",
    desc: "Aplicação full‑stack com frontend em React e backend em Python: cadastro de tarefas, persistência e integração via API REST — projeto para treinar integração cliente/servidor.",
    stack: ["React", "Python", "REST"],
    year: "2024",
    role: "Full‑Stack"
  },
  {
    index: "04",
    title: "pydoll",
    desc: "Biblioteca para automação de navegadores baseados em Chromium sem WebDriver, focada em interações realistas e automação de fluxo.",
    stack: ["Automação", "Chromium", "Library"],
    year: "2024",
    role: "Autor"
  },
  {
    index: "05",
    title: "safe-chat-slack-bot",
    desc: "Slack bot open‑source voltado para segurança de dados em workspaces: automatiza verificações e pode ser usado como base para integrações de segurança.",
    stack: ["Slack", "Bot", "Automação"],
    year: "2024",
    role: "Contribuidor"
  },
  {
    index: "06",
    title: "Ochattinho-BOT",
    desc: "Bot em Python para chat/automação — projeto prático para aprendizagem de integração com APIs de mensagens e lógica de conversação.",
    stack: ["Python", "Bot", "Automação"],
    year: "2023",
    role: "Desenvolvedor"
  },
  {
    index: "07",
    title: "SISTEMA-DE-RESERVA-DE-QUARTOS",
    desc: "Mini‑Airbnb em terminal: sistema de reserva e gerenciamento de quartos via CLI, útil para praticar modelagem de dados e regras de negócio.",
    stack: ["Python", "CLI", "Modelagem"],
    year: "2023",
    role: "Desenvolvedor"
  },
  {
    index: "08",
    title: "Gerenciador-de-Tarefas-CLI",
    desc: "Gerenciador de tarefas pelo terminal com persistência simples — projeto focado em UX de linha de comando e automação de fluxos cotidianos.",
    stack: ["Python", "CLI"],
    year: "2023",
    role: "Autor"
  },
  {
    index: "09",
    title: "treino-fullstack",
    desc: "Repositório de experimentos e exercícios full‑stack: provas de conceito que unem frontend React e backends em Python.",
    stack: ["React", "Python", "Experiment"],
    year: "2024",
    role: "Full‑Stack"
  }
] as const;
