import Link from "next/link";
import Catalog from "./catalog";
import { links } from "./data";

const tools = ["Python", "TypeScript", "React", "FastAPI", "PostgreSQL", "Git", "Docker"];

export default function Home() {
  return <div className="studio">
    <aside className="profile-panel" aria-label="Profile">
      <div className="profile-art" aria-hidden="true"><span>SA</span></div>
      <h2>Sinan Anwar Alekar</h2>
      <p>Independent security researcher<br />AI and cybersecurity student</p>
      <div className="profile-location">Based in India · Remote</div>
      <div className="profile-links"><a href={links.github}>GitHub ↗</a><a href={links.linkedin}>LinkedIn ↗</a></div>
      <Link className="button primary" href="/contact">Get in touch ↗</Link>
    </aside>
    <div className="studio-content">
      <section className="studio-hero">
        <div className="studio-orb" aria-hidden="true" />
        <p className="eyebrow"><span className="dot" /> Independent research</p>
        <h1>Hi, I’m Sinan.<br /><span>I build tools for security research.</span></h1>
        <p className="lede">I study AI and cybersecurity at IIT Patna. My work focuses on application authorization, controlled experiments, and keeping a clear record of what the evidence shows.</p>
        <div className="actions"><a className="button primary" href="#work">Explore my work ↓</a><Link className="button" href="/resume">View résumé</Link></div>
      </section>
      <section className="studio-section" id="work">
        <p className="eyebrow">Selected work</p><h2>Projects and research notes</h2>
        <Catalog />
      </section>
      <section className="studio-section" id="background">
        <p className="eyebrow">Background</p><h2>Education and experience</h2>
        <div className="timeline">
          <div><strong>IIT Patna</strong><p>BS–MS in Artificial Intelligence and Cybersecurity · Ongoing</p></div>
          <div><strong>Computer Engineering</strong><p>B.Tech · Ongoing</p></div>
          <div><strong>Independent security research</strong><p>Application authorization, Python research tooling, and coordinated disclosure.</p></div>
          <div><strong>Freelance technical support and online research</strong><p>Remote · 2023</p></div>
        </div>
      </section>
      <section className="studio-section">
        <p className="eyebrow">Toolbox</p><h2>Tools I use</h2>
        <ul className="tool-grid">{tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
      </section>
      <section className="studio-section studio-contact">
        <h2>Let’s talk about your project.</h2><p>I’m open to remote internships and early-career roles in security, AI and software engineering.</p>
        <Link className="button primary" href="/contact">Contact me ↗</Link>
      </section>
    </div>
  </div>;
}
