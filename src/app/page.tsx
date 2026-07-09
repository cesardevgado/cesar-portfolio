"use client";

import { useState } from "react";
import {
  SiPython,
  SiPostgresql,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFlask,
  SiPandas,
  SiGithub,
  SiRender,
} from "react-icons/si";
import { HiOutlineCode } from "react-icons/hi";

const projects = [
  {
    title: "TextScrubbr",
    description:
      "A tool for cleaning text focused on providing an intuitive and user-friendly interface for everyday users. It allows to easily remove unwanted characters, whitespace, and formatting from text.",
    tags: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    demoHref: "https://txtscrubbr.onrender.com/",
    thumbnail: "/images/textscrubbr-tn.png",
  },
  // {
  //   title: "AnnotationIQ",
  //   description:
  //     "A reporting surface for model review cycles, annotation quality, and decision trends.",
  //   tags: ["React", "SQL", "Analytics"],
  //   demoHref: "#",
  // },
  {
    title: "Build a Friend / Bury a Friend",
    description:
      "A browser-based artwork that uses RNG and composition templates to generate unique pages of an instruction manual on lost friendships.",
    tags: ["JavaScript", "HTML", "CSS", "WebGL"],
    demoHref: "/build-bury/loader.html",
    thumbnail: "/images/buildbury-tn.png",
  },
];

const skills = [
  "Python",
  "SQL",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Tailwind",
  "Flask",
  "Pandas",
  "GitHub",
  "Render",
];

const workExperience = [
  {
    title: "Keywords",
    period: "2025 — Present",
    position: "AI Technical Researcher",
    summary:
      "Performed large-scale AI data evaluation for two P0-priority Amazon AGI initiatives, providing validation and error analysis to improve model training data quality, consistency, and reliability.",
  },
  {
    title: "Iconophage",
    period: "2022 — 2025",
    position: "Frontend Engineer",
    summary:
      "Developed and maintained responsive, user-focused websites using HTML, CSS, JavaScript, and WordPress, translating design requirements into functional front-end interfaces.",
  },
];

const educationExperience = [
  {
    title: "Bachelors in Computer Science",
    period: "Ongoing",
    position: "Florida International University",
    summary:
      "Relevant coursework: Data Structures and Algorithms, Database Management Systems, Software Engineering, Software Testing, AI, and Web Development.",
  },
  {
    title: "Associates in Programming and Analysis",
    period: "2023 — 2024",
    position: "Daytona State College",
    summary:
      "Relevant coursework: Programming Fundamentals, Data Structures, and Web Development.",
  },
  {
    title: "Bachelors in Visual Arts",
    period: "2016 — 2020",
    position: "University of the Arts Ecuador",
    summary:
      "Relevant coursework: Art History, Design Principles, Contemporary Art Studies, Philosophy, and Digital Media.",
  },
];

const experienceTabs = [
  { id: "work", label: "Work" },
  { id: "education", label: "Education" },
] as const;

const contacts = [
  { label: "GitHub", href: "https://github.com/cesardevgado/" },
  { label: "LinkedIn", href: "https://linkedin.com/in/cesar-delgado-/" },
  { label: "Email", href: "mailto:hello@cesar.dev" },
];

function HeroIllustration() {
  return (
    <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_20px_80px_-30px_rgba(41,37,36,0.35)]">
      <svg
        id="goat-1"
        width="110"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150 150"
        className="h-full w-full"
        aria-label="Animated goat illustration"
      >
        <style>{`.cls-4 { cursor: grab; }`}</style>
        <defs>
          <radialGradient id="myGradient1">
            <stop offset="0%" stopColor="#2c3fba" stopOpacity="1">
              <animate
                attributeName="stop-color"
                values="#2c3fba;#e4a4fc;#ed80ba;#f7df80;#d55fe8;#2c3fba;"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="30%" stopColor="#e293cd" stopOpacity="0.75">
              <animate
                attributeName="stop-color"
                values="#e293cd;#efc099;#a2a5e5;#efb377;#bf5d3f;#e293cd;"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#f1eff5" stopOpacity="1">
              <animate
                attributeName="offset"
                values="1;.80;.60;.60;.80;1"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
          </radialGradient>
        </defs>
        <path
          className="cls-4"
          d="M237.35,634.48c-2.45-3.27-6.54-3.84-9.65-4.18-6.43-.7-18.4,1.5-27.4,6.27-1.67.88-4.85,1.32-8.87,1.3a25.55,25.55,0,0,1-9.65-1.83c-3.5-1.47-4.17-3.74-6.79-4.43-13.43-3.52-22,0-26.93,4.11-2.05,1.72-2.16,3.52-3.85,5-2.17,1.91-5.82.09-6.13-1.43-.24-1.19.77-3.9.52-4.83-.39-1.44-1.31,1.17-1.83.78s.52-1.17,1.18-3.91c.47-2,1-4.39.26-4.7-1.2-.54-4.05,5.22-7.05,11-.6,1.15-.07,2.44-.52,4.7a39,39,0,0,1-1.83,5.74c-1.44,4.89.87,10.73,3.66,14.08,2.34,2.83,3.57,2.14,6,5.48,2.1,2.89,1.58,3.95,3.65,6.53,1.22,1.51,4.39,5.53,8.09,5.41,2.5-.08,4.52-2.42,5.74-4.63,1.73-3.13-.44-5.22,1-10.44.37-1.31,1.21-3.5,3-3.72,1.18-.13,2.5.24,4.83,3.46a50.32,50.32,0,0,0,5.09,6c2.73,1.23,2.15,3.66,2.21,4.44.13,1.56-1.05,2.19-1.56,4.69-.33,1.63,0,3.76,1,4.18,1.23.5,3.38-1.41,4.44-3.39,1.41-2.65.83-3.16,1.43-3.27s1.28.42,1.7,3a13.59,13.59,0,0,0,1,3.39c.58,1.48,1.37,1.9,2.09,2.87,2.79,3.78.46,10.63.26,11.22-.74,2.1-1.62,3.18-1,4.17a3.21,3.21,0,0,0,3.65,1c2.74-1.43,3.78-7.56,3.65-14.35,0-1,.32-3.32.52-5.47s1-2.27,1-4.18c.12-2.61-1.25-3.3-.79-5.22a4.53,4.53,0,0,1,2.61-3.13c2.58-.88,6.25,3.64,11,4.83,4.48,1.13,6-1.08,8,1,.08.09.13.24.13,1.7,0,1.72-1.35,2.39-2.09,3.91-1.21,2.49.75,4.1,1.05,8.09A17,17,0,0,1,207.35,700c-2.16,3-4.5,3.56-5,6.53-.06.37-.39,2.49.78,3.39s3.21.26,4.44-.78c1.7-1.45.86-2.93,2.34-5.48,1.25-2.14,3.93-4.68,6.53-4.44,2,.18,2.6,1.84,4.43,1.57.66-.1,1.24-.41,2.87-2.09,2.51-2.58,2.69-3.46,5-6a33.34,33.34,0,0,0,3.39-3.91,8,8,0,0,0,1.57-3.14c.37-2.12-.82-3.59-1.31-5-1.4-3.94,1.85-7.23,2.94-9.52,1.95-4.11,4.11-12.72,2.54-25.18C238.24,645,243.54,642.76,237.35,634.48Zm-12.79,57.4c-1.22,1-4.47,3.56-5.21,2.87s1.44-4.06,2.61-5.61c.89-1.19,3-4,4.43-3.53.72.27,1,1.32,1,2C227.54,689.28,226.07,690.59,224.56,691.88Z"
          transform="translate(-185 -860) scale(1.4)"
          id="path172"
          fill="url(#myGradient1)"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] =
    useState<(typeof experienceTabs)[number]["id"]>("work");
  const activeExperience =
    activeTab === "work" ? workExperience : educationExperience;

  return (
    <div
      className="min-h-screen bg-stone-50 text-stone-900"
      style={{ backgroundColor: "#f1eff5" }}
    >
      <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-[860px] items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <a
            href="#top"
            className="text-lg font-semibold uppercase tracking-[0.3em] text-stone-700"
          >
            Cesar Delgado
          </a>
          <nav className="flex gap-4 text-md text-stone-600 sm:gap-6 font-medium tracking-[0.01em]">
            <a href="#top" className="transition hover:text-violet-600">
              &gt; Home
            </a>
            <a href="#projects" className="transition hover:text-violet-600">
              &gt; Work
            </a>
            <a href="#skills" className="transition hover:text-violet-600">
              &gt; Skills
            </a>
            <a href="#experience" className="transition hover:text-violet-600">
              &gt; Experience
            </a>
            <a href="#contact" className="transition hover:text-violet-600">
              &gt; Contact
            </a>
          </nav>
        </div>
      </header>

      <main
        id="top"
        className="mx-auto flex max-w-[860px] flex-col gap-24 px-6 py-16 sm:gap-24 sm:px-8 lg:gap-32 lg:px-10 lg:py-24"
      >
        <section className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl space-y-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-600">
              Front End Developer |<br /> AI Researcher |<br /> App Builder
            </p>
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Building AI tools and solution-driven web apps.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-stone-600 sm:text-xl">
              I design thoughtful interfaces and reliable product experiences
              around research, automation, and clear decision-making.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-violet-600 px-5 py-3 text-md font-bold text-stone-50 transition hover:bg-violet-500"
              >
                See selected work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-stone-300 px-5 py-3 text-md font-bold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
              >
                Start a conversation
              </a>
            </div>
          </div>
          <HeroIllustration />
        </section>

        <section id="projects" className="space-y-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
                Featured Projects
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
                Selected work.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-stone-600"></p>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
                  {project.thumbnail ? (
                    <div
                      className="overflow-hidden rounded-[8px] w-full"
                      style={{ margin: "auto" }}
                    >
                      <img
                        src={project.thumbnail}
                        alt={`${project.title} thumbnail`}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  ) : (
                    <div className="flex w-full aspect-[4/3] items-center justify-center rounded-[8px] text-stone-500">
                      <span className="text-sm uppercase tracking-[0.25em] text-stone-400">
                        Thumbnail
                      </span>
                    </div>
                  )}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                        <span className="text-lg">✦</span>
                      </div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    <p className="text-md leading-7 text-stone-600">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-stone-200 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-stone-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="pt-4">
                      <a
                        href={project.demoHref}
                        target="_blank"
                        className="inline-flex items-center justify-center rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="space-y-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              Tools I work with.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="grid grid-cols-3 gap-6 justify-items-center items-center">
              {skills.map((skill) => {
                const iconMap: Record<string, any> = {
                  Python: SiPython,
                  SQL: SiPostgresql,
                  JavaScript: SiJavascript,
                  HTML: SiHtml5,
                  CSS: SiCss3,
                  React: SiReact,
                  "Next.js": SiNextdotjs,
                  Tailwind: SiTailwindcss,
                  Flask: SiFlask,
                  Pandas: SiPandas,
                  GitHub: SiGithub,
                  Render: SiRender,
                };

                const colorMap: Record<string, string> = {
                  Python: "#3776AB",
                  SQL: "#336791",
                  JavaScript: "#F7DF1E",
                  HTML: "#E34F26",
                  CSS: "#1572B6",
                  React: "#61DAFB",
                  "Next.js": "#000000",
                  Tailwind: "#06B6D4",
                  Flask: "#000000",
                  Pandas: "#150458",
                  GitHub: "#181717",
                  Render: "#7C3AED",
                };

                const Icon = iconMap[skill] || HiOutlineCode;
                const color = colorMap[skill] || "#6b7280";

                return (
                  <div key={skill} className="flex flex-col items-center gap-2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-stone-200 bg-stone-50">
                      <Icon
                        className="h-8 w-8"
                        color={color}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-sm text-stone-700">{skill}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="space-y-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
              Experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              A timeline of focused builds.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {experienceTabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-violet-600 text-white"
                      : "border border-stone-200 bg-white text-stone-700 hover:border-stone-300"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-4">
            {activeExperience.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-4 ml-6">
                  <div className="flex gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-violet-600">
                        {item.period}
                      </p>
                      <p className="mt-1 text-md text-stone-500">
                        {item.position}
                      </p>
                      <p className="mt-2 text-md leading-7 text-stone-600">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="space-y-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              Let’s build something clear, useful, and lasting.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-violet-700/30 bg-violet-600 p-8 text-white shadow-sm sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-md leading-7 text-violet-100 font-semibold">
                  Reach out via one of the links to start a conversation.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {contacts.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="rounded-full bg-white border border-violet-700/60 px-4 py-2 text-sm text-black transition hover:bg-gray-200"
                  >
                    {contact.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-stone-50/80">
        <div className="mx-auto flex max-w-[860px] flex-col gap-2 px-6 py-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© 2026 Cesar Delgado</p>
          <p>Designed for thoughtful product work.</p>
        </div>
      </footer>
    </div>
  );
}
