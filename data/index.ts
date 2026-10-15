import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Building live, measured, well-governed AI products",
    description: "Career Objective · B.Tech AI & DS · CGPA 8.1/10",
    className: "md:col-span-4",
    imgClassName: "",
    titleClassName: "",
    img: "/b1.svg",
  },
  {
    id: 2,
    title:
      "Based in India · open to remote collaboration across time zones",
    description: "Availability",
    className: "md:col-span-2",
    imgClassName: "",
    titleClassName: "",
    img: "",
  },
  {
    id: 3,
    title: "What I build with",
    description: "Tech Stack · constantly improving",
    className: "md:col-span-2",
    imgClassName: "",
    titleClassName: "",
    img: "",
  },
  {
    id: 4,
    title:
      "Applied AI engineer with a passion for RAG, multilingual audio and full-stack delivery.",
    description: "",
    className: "md:col-span-2",
    imgClassName: "",
    titleClassName: "",
    img: "/about-ai.svg",
  },

  {
    id: 5,
    title:
      "Currently building hybrid RAG systems, meeting-intelligence and inbox-intelligence platforms",
    description: "The Inside Scoop",
    className: "md:col-span-2",
    imgClassName: "",
    titleClassName: "",
    img: "/b5.svg",
  },
  {
    id: 6,
    title: "Have a role or project in mind? Let's build across the stack.",
    description: "Open to Work",
    className: "md:col-span-6",
    imgClassName: "",
    titleClassName: "items-center text-center",
    img: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "GitContext RAG — Codebase Q&A Copilot",
    des: "Clones any GitHub repo and answers codebase questions with file:line citations. Hybrid semantic + BM25 + reranking, AST chunking, FastAPI backend with live ingest progress, web UI + CLI.",
    img: "/proj-rag.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/JDjaga/gitcontext_rag",
    sourceCode: "https://github.com/JDjaga/gitcontext_rag",
    tech: "Python | FastAPI | Sentence-Transformers | rank-BM25 | Gemini API | GitPython",
  },
  {
    id: 2,
    title: "VoicePrint LID — 102-Language Audio Identifier",
    des: "Identifies spoken language from uploads or URLs across 102 languages using Whisper-medium FLEURS. 16kHz preprocessing, 10s smart trim, Top-K ranking, waveform UI + JSON export + 55-language offline text detection.",
    img: "/proj-voice.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/JDjaga/Language_Detection",
    sourceCode: "https://github.com/JDjaga/Language_Detection",
    tech: "Python | PyTorch | Hugging Face Transformers | Streamlit | soundfile | SciPy",
  },
  {
    id: 3,
    title: "ProjectActionGraph — Meeting Intelligence Platform",
    des: "Converts audio into structured tasks, decisions and deadlines. Pydantic validation + evidence grounding + human review to kill hallucinations. Task tracking, overdue alerts, evidence-cited chat, KPI dashboard.",
    img: "/proj-meeting.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/JDjaga/meeting-intelligence-platform",
    sourceCode: "https://github.com/JDjaga/meeting-intelligence-platform",
    tech: "Python | FastAPI | SQLite | Pydantic | Gemini | faster-whisper | Pandas | Chart.js",
  },
  {
    id: 4,
    title: "Phytoplankton Detection — Microscopic AI + Ecological Risk",
    des: "YOLOv8 OBB detection + hybrid ConvNeXt-CBAM-Vision Transformer classifier at ~34.7ms inference. Detection + classification + Saprobic Index-based ecological risk assessment.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/JDjaga/Phytoplankton_Detection",
    sourceCode: "https://github.com/JDjaga/Phytoplankton_Detection",
    tech: "Python | PyTorch | YOLOv8 | ConvNeXt | CBAM | Vision Transformer",
  },
  {
    id: 5,
    title: "Inbox Intel — Live Support-Desk Intelligence over Gmail + SMS",
    des: "Pulls Gmail, Twilio SMS and call history into one pipeline. Motive + urgency routing with fallback model. 0.766 → 0.863 accuracy on 900 leakage-checked messages. Sender insights, scam alerts, Docker + CI/CD.",
    img: "/proj-inbox.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/c.svg"],
    link: "https://github.com/JDjaga/inbox-intel",
    sourceCode: "https://github.com/JDjaga/inbox-intel",
    tech: "Python | FastAPI | React | TypeScript | SQLite | Docker | Twilio | IMAP",
  },
  {
    id: 6,
    title: "Interactive 3D VR Web App — Virtual Solar System + Mini-Games",
    des: "Browser-based planetary exploration with Three.js / Babylon.js / WebGL: animations, 3D rendering, camera controls, interactive navigation + mini-games. Optimized scenes for smooth performance.",
    img: "/proj-vr.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/JDjaga/womensafety",
    sourceCode: "https://github.com/JDjaga/womensafety",
    tech: "JavaScript | Three.js | Babylon.js | WebGL | HTML5 | CSS3",
  },
] as const;

export const testimonials = [
  {
    quote: `Letter of Recommendation — Prodigy Infotech. Recognized for technical contributions in machine learning model development, preprocessing, feature engineering and optimization during ML internship.`,
    name: "Prodigy Infotech, Mumbai",
    title: "Machine Learning Intern · Apr 2024 – May 2024 · LOR Received",
  },
  {
    quote: `Research Publication Certificate — International Journal of Science, Strategic Management and Technology. Published applied-AI research bridging detection, classification and risk assessment.`,
    name: "IJSSMT / IEEE Research Publication",
    title: "Research Publication Certificate",
  },
  {
    quote: `IBM — Machine Learning with Python (Coursera). Certified in classical ML workflows, evaluation and Python-based modeling.`,
    name: "IBM via Coursera",
    title: "Machine Learning with Python",
  },
  {
    quote: `NIELIT — Advanced Machine Learning. Certified in advanced ML concepts and applied model implementation.`,
    name: "NIELIT",
    title: "Advanced Machine Learning",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "Python AI stack",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "React frontend",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "FastAPI backend",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Docker deploy",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "AWS cloud",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Machine Learning Intern — Prodigy Infotech, Mumbai",
    period: "Apr 2024 – May 2024",
    desc: "Built ML models with Python + Scikit-learn. Data preprocessing, feature engineering, model evaluation and algorithm optimization. Received LOR for technical contributions.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Deep Learning Intern — Phoenix Soft Tech, Madurai",
    period: "Aug 2024 – Sep 2024",
    desc: "Built desktop GUI app with Python Tkinter + MySQL. Applied ANN and SVM for predictive analysis, preprocessing and model implementation.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Applied AI Builder — RAG, Audio & Meeting Intelligence",
    period: "2024 – Present",
    desc: "Shipped GitContext RAG, VoicePrint LID (102 languages), ProjectActionGraph and Inbox Intel: hybrid retrieval, Whisper pipelines, evidence-grounded LLMs, Docker + CI/CD.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full-Stack Developer — React, FastAPI, SQL",
    period: "2024 – Present",
    desc: "REST APIs, JWT + RBAC auth, MySQL/MongoDB/Firebase modelling, Tailwind responsive UIs, AWS EC2/S3, Vercel and GitHub Actions deployments.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/JDjaga",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "http://www.linkedin.com/in/jagadiish-s-d-427273257",
  },
  {
    name: "Portfolio",
    img: "/twit.svg",
    link: "https://my-portfolio-seven-alpha-72.vercel.app/",
  },
] as const;

export const techStack = {
  stack1: ["Python", "React.js", "FastAPI"],
  stack2: ["PyTorch", "SQL", "Docker"],
} as const;

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java (Basics)", "SQL"],
  },
  {
    category: "AI/ML & NLP",
    items: [
      "Scikit-learn",
      "PyTorch",
      "Hugging Face Transformers",
      "LoRA Fine-Tuning",
      "Sentence-Transformers",
      "rank-BM25",
      "TF-IDF Retrieval",
      "RAG Pipelines",
      "Prompt Engineering",
      "Whisper (STT)",
    ],
  },
  {
    category: "LLM APIs",
    items: ["Gemini API", "ChatGPT", "Claude", "OpenAI-Compatible Endpoints"],
  },
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS", "Responsive Design"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Flask", "Django", "RESTful APIs"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "Firebase", "Database Design", "Data Modelling"],
  },
  {
    category: "Auth & Security",
    items: ["JWT", "API Key Auth", "RBAC", "Input Validation"],
  },
  {
    category: "Cloud & Deployment",
    items: ["AWS EC2", "AWS S3", "GitHub Actions CI/CD", "Docker", "Vercel"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "Linux CLI", "Jupyter Notebook"],
  },
] as const;

export const education = [
  {
    id: 1,
    degree: "B.Tech — Artificial Intelligence & Data Science",
    school: "Ramco Institute of Technology",
    score: "CGPA: 8.1 / 10",
    period: "Graduate",
    details:
      "Hands-on across applied AI systems, full-stack development and data analytics — from retrieval pipelines and classification models to dashboards and Dockerized deployments.",
  },
] as const;

export const certifications = [
  {
    id: 1,
    title: "IBM — Machine Learning with Python (Coursera)",
    issuer: "IBM / Coursera",
  },
  {
    id: 2,
    title: "NIELIT — Advanced Machine Learning",
    issuer: "NIELIT",
  },
  {
    id: 3,
    title: "Letter of Recommendation — Prodigy Infotech",
    issuer: "Prodigy Infotech, Mumbai",
  },
  {
    id: 4,
    title: "Research Publication Certificate — IJSSMT (IEEE Research Publication)",
    issuer: "International Journal of Science, Strategic Management and Technology",
  },
] as const;

export { links };
