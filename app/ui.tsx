"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { links, projects } from "./data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  function toggleTheme() { const value = document.documentElement.dataset.theme !== "dark"; setDark(value); document.documentElement.dataset.theme = value ? "dark" : "light"; localStorage.setItem("theme", value ? "dark" : "light"); }
  return <header className="site-header"><div className="nav-shell">
    <Link className="brand" href="/" aria-label="Sinan Alekar home"><span>SA</span>Sinan Alekar</Link>
    <button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">Menu</button>
    <nav className={open ? "nav open" : "nav"} aria-label="Primary navigation">
      {["About", "Projects", "Resume", "Contact"].map(item => <Link key={item} onClick={() => setOpen(false)} href={`/${item.toLowerCase()}`}>{item}</Link>)}
      <button className="theme" onClick={toggleTheme} aria-label="Toggle color theme">{dark ? "Light" : "Dark"}</button>
    </nav>
  </div></header>;
}

export function Footer() { return <footer><div className="shell footer-grid"><div><strong>Sinan Anwar Alekar</strong><p>Building secure, useful software across web and Android.</p></div><div className="footer-links"><a href={links.github}>GitHub</a><a href={links.linkedin}>LinkedIn</a><a href={links.email}>Email</a></div><p className="copyright">© {new Date().getFullYear()} Sinan Alekar</p></div></footer>; }

export function ProjectCard({ project = projects[0], image }: { project?: typeof projects[number], image?: string }) {
  const urls = project.slug === "sentinental-ix" ? {live:"https://sentinental-ix.vercel.app",repo:"https://github.com/sinanalekar/Sentinental-Ix"} : {live:"https://ix-zeta.vercel.app/",repo:"https://github.com/sinanalekar/ix"};
  return <article className="project-card"><div className={`project-visual ${project.slug}`}>
    {image ? <Image src={image} alt={`${project.name} application preview`} width={1200} height={630} loading="lazy" /> : <div className="terminal"><span>SECURITY OPERATIONS</span><b>12 active assets</b><i>Incidents · Alerts · Audit</i></div>}
  </div><div className="project-copy"><span className="eyebrow">{project.eyebrow}</span><h3>{project.name}</h3><p>{project.summary}</p><div className="tags">{project.stack.map(x => <span key={x}>{x}</span>)}</div><div className="social-row"><a href={urls.live}>Live ↗</a><a href={urls.repo}>GitHub ↗</a></div><Link className="text-link" href={`/projects/${project.slug}/details`}>View public case study <span>→</span></Link></div></article>;
}

export function SectionHead({ eyebrow, title, copy }: { eyebrow: string, title: string, copy?: string }) { return <div className="section-head"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>; }
