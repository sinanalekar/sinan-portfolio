import Link from "next/link";
import PrintButton from "../print-button";
import CopyEmail from "../copy-email";
import { education } from "../background";
import { person, skillGroups, spokenLanguages } from "../profile-content";
export const metadata = { title: "Résumé" };
export default function Resume() {
  return (
    <article className="reading resume">
      <div className="resume-print-header">
        <p className="print-name">{person.name}</p>
        <p>Independent security researcher & student · India · Remote</p>
        <address>
          <a href={`mailto:${person.email}`}>{person.email}</a>
          <a href={person.website}>{person.website.replace("https://", "")}</a>
          <a href={person.github}>{person.github.replace("https://", "")}</a>
          <a href={person.linkedin}>
            {person.linkedin.replace("https://www.", "")}
          </a>
        </address>
      </div>
      <div className="page-intro">
        <p className="eyebrow">Background / Résumé</p>
        <h1>
          Learning, building,
          <br />
          asking questions.
        </h1>
        <p>
          {person.name}
          <br />
          Independent security researcher & student · India
        </p>
        <div className="resume-contact-line">
          <a href={`mailto:${person.email}`}>{person.email}</a>
          <a href={person.github}>GitHub ↗</a>
          <a href={person.linkedin}>LinkedIn ↗</a>
          <CopyEmail />
        </div>
        <div className="actions">
          <a
            className="button primary"
            href="/resume.pdf"
            download="Sinan-Alekar-CV.pdf"
          >
            Download CV <span aria-hidden="true">↓</span>
          </a>
          <PrintButton />
        </div>
        <p className="cv-caption">
          Original CV PDF · 2 pages · Available to download directly.
        </p>
      </div>
      <div className="resume-content">
        <div className="resume-background">
          <h2 className="experience-label">Independent work</h2>
          <div className="experience-row">
            <div>
              <h3>Security research & software</h3>
              <span className="micro">INDEPENDENT PROJECTS</span>
            </div>
            <p>
              Python research tooling, authorization, and controlled
              experiments. Work includes CYR@, SEEK, VERITAS, HYDRA, CYRA,
              CIDER, Frontier, and web applications. Discovery Machine is in
              progress and incomplete.{" "}
              <Link className="text-link" href="/projects">
                Explore the work ↗
              </Link>
            </p>
          </div>
          <h2 className="experience-label">Research reporting</h2>
          <div className="experience-row">
            <div>
              <h3>Apple & Xiaomi</h3>
              <span className="micro">RESEARCHER-REPORTED STATUS</span>
            </div>
            <p>
              Reproducible reports to Apple with an ongoing investigation, and a
              Xiaomi report submitted through HackerOne. Technical findings stay
              private.{" "}
              <Link className="text-link" href="/research">
                View research history ↗
              </Link>
            </p>
          </div>
          <h2 className="experience-label">Freelance work</h2>
          <div className="experience-row">
            <div>
              <h3>
                Technical support
                <br /> & online research
              </h3>
              <span className="micro">FREELANCE / REMOTE</span>
            </div>
            <p>
              Diagnosed Windows, Android, and web application issues, carried
              out online research, and wrote support documentation.
            </p>
          </div>
          <h2 className="experience-label">Education</h2>
          {education.map((item) => (
            <div className="experience-row" key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <span className="micro">{item.status}</span>
              </div>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
        <aside className="resume-toolkit" aria-labelledby="toolkit-heading">
          <h2 className="experience-label" id="toolkit-heading">
            Technical toolkit
          </h2>
          <p className="toolkit-intro">
            Tools and methods for investigating behavior, building applications,
            and keeping the work reproducible.
          </p>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <section className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.skills.join(", ")}.</p>
              </section>
            ))}
          </div>
          <section className="skill-group spoken-languages">
            <h3>Spoken languages</h3>
            <p>{spokenLanguages.join(", ")}.</p>
          </section>
        </aside>
      </div>
      <div className="resume-print-footer">
        {person.name} · {person.email} ·{" "}
        {person.website.replace("https://", "")}
      </div>
    </article>
  );
}
