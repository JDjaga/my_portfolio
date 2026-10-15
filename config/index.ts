import type { Metadata } from "next";

export const links = {
  sourceCode: "https://github.com/JDjaga/My-Portfolio",
  ownerName: "Jagadiish S.D",
  shortName: "Jagadiish",
  ownerEmail: "Jagadiish21@gmail.com",
  phone: "+91 9751549911",
  github: "https://github.com/JDjaga",
  linkedin: "http://www.linkedin.com/in/jagadiish-s-d-427273257",
  portfolio: "https://my-portfolio-seven-alpha-72.vercel.app/",
  location: "Tamil Nadu, India",
  education: "B.Tech AI & Data Science, Ramco Institute of Technology — CGPA 8.1/10",
} as const;

export const siteConfig: Metadata = {
  title: `${links.ownerName} — AI Engineer & Full-Stack Developer`,
  description:
    "B.Tech AI & Data Science graduate (CGPA 8.1) building applied AI systems, RAG pipelines, multilingual audio intelligence, and Dockerized full-stack products. Python, React, FastAPI, PyTorch, SQL.",
  keywords: [
    "Jagadiish S.D",
    "AI Engineer",
    "Full-Stack Developer",
    "RAG",
    "PyTorch",
    "FastAPI",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
    "NLP",
    "portfolio",
    "reactjs",
    "nextjs",
    "tailwindcss",
    "typescript",
    "javascript",
  ] as Array<string>,
  authors: {
    name: links.ownerName,
    url: links.github,
  },
} as const;
