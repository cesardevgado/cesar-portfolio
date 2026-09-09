"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
import type { IconType } from "react-icons";

const projects = [
  {
    title: "Wordaloo",
    description:
      "A responsive daily word game built with React and Next.js, using JavaScript-driven game state and validation to deliver a different ruleset each day. The component-based interface and Tailwind CSS design system keep interactions fast, accessible, and consistent across desktop and mobile devices.",
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    demoHref: "https://wordaloo.app",
    thumbnail: "/images/wordaloo-tn.png",
  },
  {
    title: "CleanrKit",
    description:
      "A Python and Flask web application that provides six purpose-built processing workflows for text, JSON, CSV, HTML, Markdown, and SQL. Each tool applies format-specific cleanup and transformation logic through a focused browser interface, reducing repetitive data-preparation work while keeping the results easy to review and reuse.",
    tags: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    demoHref: "https://cleanrkit.com/",
    thumbnail: "/images/cleanrkit-tn.png",
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
      "A generative browser artwork powered by a JavaScript randomization engine that assembles unique instruction-manual pages from reusable composition templates. The project combines HTML and CSS layouts with SVG and WebGL graphics to produce dynamic visual variations while preserving a cohesive interactive experience.",
    tags: ["JavaScript", "HTML", "CSS", "WebGL", "SVG"],
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
    period: "2025 — 2026",
    position: "AI Technical Researcher",
    summary:
      "Performed large-scale AI data evaluation for two P0-priority Amazon AGI initiatives, providing validation and error analysis to improve model training data quality, consistency, and reliability.",
  },
  {
    title: "Iconophage",
    period: "2022 — 2025",
    position: "Frontend Developer",
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
  { label: "LinkedIn", href: "https://linkedin.com/in/cesar-devgado/" },
  { label: "Email", href: "mailto:cesardelpal@gmail.com" },
];

const navLinks = [
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
  { href: "https://cesardelgado.art", label: "Art", highlighted: true },
];

function getDarkModeSnapshot() {
  try {
    const savedTheme = window.localStorage.getItem("theme");
    return (
      savedTheme === "dark" ||
      (savedTheme === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  } catch {
    return document.documentElement.classList.contains("dark");
  }
}

function HeroIllustration() {
  return (
    <figure>
      <div className="aspect-square overflow-hidden rounded-full border border-stone-200 bg-white shadow-[0_20px_80px_-30px_rgba(41,37,36,0.35)] dark:border-stone-700 dark:bg-stone-900">
        <Image
          src="/images/cesar-oc.png"
          alt="Cesar Delgado Paladines"
          width={1254}
          height={1254}
          priority
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="mt-5 text-center text-sm italic leading-6 text-stone-600 dark:text-stone-300">
        Nothing I enjoy more than creating something new and a hot cup of
        coffee.
      </figcaption>
    </figure>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] =
    useState<(typeof experienceTabs)[number]["id"]>("work");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const activeExperience =
    activeTab === "work" ? workExperience : educationExperience;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const syncTheme = () => setDarkMode(getDarkModeSnapshot());
    const syncSystemTheme = () => {
      try {
        if (window.localStorage.getItem("theme") === null) syncTheme();
      } catch {
        syncTheme();
      }
    };

    syncTheme();
    mediaQuery.addEventListener?.("change", syncSystemTheme);
    mediaQuery.addListener?.(syncSystemTheme);
    window.addEventListener("storage", syncTheme);

    return () => {
      mediaQuery.removeEventListener?.("change", syncSystemTheme);
      mediaQuery.removeListener?.(syncSystemTheme);
      window.removeEventListener("storage", syncTheme);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    const nextDarkMode = !darkMode;
    setDarkMode(nextDarkMode);
    document.documentElement.classList.toggle("dark", nextDarkMode);
    try {
      window.localStorage.setItem("theme", nextDarkMode ? "dark" : "light");
    } catch {
      // The visual toggle still works if storage is unavailable.
    }
  };

  const themeToggle = (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative z-50 inline-flex h-11 w-11 touch-manipulation shrink-0 select-none items-center justify-center rounded-full border border-stone-300 bg-white/90 text-stone-700 transition hover:border-[#23a3c0] hover:text-[#23a3c0] dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200 dark:hover:border-[#23a3c0] dark:hover:text-[#23a3c0]"
      aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
      title={`Switch to ${darkMode ? "light" : "dark"} mode`}
    >
      {darkMode ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#eef7f9] text-stone-900 transition-colors dark:bg-stone-950 dark:text-stone-100">
      <header className="sticky top-0 z-50 isolate border-b border-stone-200/80 bg-stone-50/90 backdrop-blur dark:border-stone-800 dark:bg-stone-950/90">
        <div className="relative z-50 mx-auto flex max-w-[860px] items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <a
            href="#top"
            className="text-lg font-semibold uppercase tracking-[0.3em] text-stone-700 dark:text-stone-200"
          >
            Cesar Delgado
          </a>

          <div className="relative z-50 flex shrink-0 items-center gap-2 md:hidden">
            {themeToggle}
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="relative z-50 inline-flex h-11 w-11 touch-manipulation select-none items-center justify-center rounded-full border border-stone-200 bg-white/90 text-stone-700 transition hover:border-stone-300 hover:text-[#23a3c0] dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200"
              aria-expanded={menuOpen}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                {menuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>

          <nav className="hidden items-center gap-6 text-md text-stone-600 dark:text-stone-300 md:flex font-medium tracking-[0.01em]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition ${link.highlighted ? "text-violet-700 hover:text-violet-900 dark:text-violet-400 dark:hover:text-violet-300" : "hover:text-[#23a3c0]"}`}
              >
                &gt; {link.label}
              </a>
            ))}
            {themeToggle}
          </nav>
        </div>

        {menuOpen ? (
          <nav className="relative z-50 border-t border-stone-200 bg-stone-50/95 dark:border-stone-800 dark:bg-stone-950/95 md:hidden">
            <div className="mx-auto flex max-w-[860px] flex-col gap-2 px-6 py-4 sm:px-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-full px-4 py-3 text-md font-medium transition hover:bg-[#e5f6f9] dark:hover:bg-stone-900 ${link.highlighted ? "text-violet-700 hover:text-violet-900 dark:text-violet-400 dark:hover:text-violet-300" : "text-stone-700 hover:text-[#23a3c0] dark:text-stone-200"}`}
                >
                  &gt; {link.label}
                </a>
              ))}
            </div>
          </nav>
        ) : null}
      </header>

      <main
        id="top"
        className="mx-auto flex max-w-[860px] flex-col gap-24 px-6 pt-[1.6rem] pb-16 sm:gap-24 sm:px-8 lg:gap-32 lg:px-10 lg:pt-[2.4rem] lg:pb-24"
      >
        <section className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl space-y-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#23a3c0]">
              Software Developer |<br /> AI Researcher |<br /> Creative Designer
            </p>
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Creative developer building thoughtful software experiences.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-stone-600 dark:text-stone-300 sm:text-xl">
              I turn ideas and designs into intuitive, responsive, and
              thoughtfully built software.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-[#23a3c0] px-5 py-3 text-md font-bold text-stone-50 transition hover:bg-[#1d8ba4]"
              >
                See selected work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-stone-300 px-5 py-3 text-md font-bold text-stone-700 transition hover:border-stone-900 hover:text-stone-950 dark:border-stone-700 dark:text-stone-200 dark:hover:border-stone-400 dark:hover:text-white"
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
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400">
                Featured Projects
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
                Selected work.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-stone-600 dark:text-stone-300"></p>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-stone-700 dark:bg-stone-900 dark:shadow-black/20"
              >
                <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
                  {project.thumbnail ? (
                    <div className="flex w-full justify-center">
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} thumbnail`}
                        width={750}
                        height={1334}
                        sizes="(max-width: 639px) 13rem, 16rem"
                        className="h-auto w-full max-w-[13rem] rounded-[8px] sm:max-w-[16rem]"
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
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d4f0f5] text-[#23a3c0]">
                        <span className="text-lg">✦</span>
                      </div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    <p className="text-md leading-7 text-stone-600 dark:text-stone-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-stone-200 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-stone-500 dark:border-stone-700 dark:text-stone-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-center pt-4 lg:justify-start">
                      <a
                        href={project.demoHref}
                        target="_blank"
                        className="inline-flex items-center justify-center rounded-full bg-[#23a3c0] px-7 py-3.5 text-base font-semibold text-white transition hover:bg-[#1d8ba4] lg:px-5 lg:py-3 lg:text-sm"
                      >
                        Visit
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              Tools I work with.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-700 dark:bg-stone-900 lg:p-10">
            <div className="grid grid-cols-3 gap-6 justify-items-center items-center">
              {skills.map((skill) => {
                const iconMap: Record<string, IconType> = {
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
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-800">
                      <Icon
                        className="h-8 w-8"
                        color={color}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-sm text-stone-700 dark:text-stone-200">
                      {skill}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="space-y-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400">
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
                      ? "bg-[#23a3c0] text-white"
                      : "border border-stone-200 bg-white text-stone-700 hover:border-stone-300 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200 dark:hover:border-stone-500"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-4">
            {activeExperience.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-700 dark:bg-stone-900"
              >
                <div className="flex flex-col gap-4 ml-6">
                  <div className="flex gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-[#23a3c0]">
                        {item.period}
                      </p>
                      <p className="mt-1 text-md text-stone-500 dark:text-stone-400">
                        {item.position}
                      </p>
                      <p className="mt-2 text-md leading-7 text-stone-600 dark:text-stone-300">
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              Let’s build something clear, useful, and lasting.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#23a3c0]/30 bg-[#23a3c0] p-8 text-white shadow-sm sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-md leading-7 text-[#d9f4f8] font-semibold">
                  Reach out via one of the links to start a conversation.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {contacts.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="rounded-full bg-white border border-[#16798f]/60 px-4 py-2 text-sm text-black transition hover:bg-gray-200"
                  >
                    {contact.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-stone-50/80 dark:border-stone-800 dark:bg-stone-950/80">
        <div className="mx-auto flex max-w-[860px] flex-col gap-2 px-6 py-6 text-sm text-stone-500 dark:text-stone-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© 2026 Cesar Delgado</p>
          <p>Beautiful and thoughtful software.</p>
        </div>
      </footer>
    </div>
  );
}
