import Link from "next/link";
import PrintButton from "../print-button";
import { education } from "../background";
export const metadata = { title: "Résumé" };
export default function Resume() {
  return (
    <article className="reading resume">
      <div className="page-intro">
        <p className="eyebrow">Background / Résumé</p>
        <h1>
          Learning, building,
          <br />
          asking questions.
        </h1>
        <p>
          Sinan Anwar Alekar
          <br />
          Independent security researcher & student · India
        </p>
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
      <h2 className="experience-label">Independent work</h2>
      <div className="experience-row">
        <div>
          <h3>Security research & software</h3>
          <span className="micro">INDEPENDENT PROJECTS</span>
        </div>
        <p>
          Application authorization, controlled experiments, and Python research
          tooling. Building CYR@, public web applications, and an inspectable
          record of the work.{" "}
          <Link className="text-link" href="/projects">
            Explore public work ↗
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
          Reproducible bug reports to Apple with an ongoing investigation, and a
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
            <br />& online research
          </h3>
          <span className="micro">FREELANCE / REMOTE</span>
        </div>
        <p>
          Diagnosed Windows, Android, and web application issues, carried out
          online research, and wrote support documentation.
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
      <h2 className="experience-label">Technical toolkit</h2>
      <div className="experience-row">
        <div>
          <h3>Languages & frameworks</h3>
        </div>
        <p>
          Python, TypeScript, JavaScript, SQL, React, Next.js, FastAPI,
          Firebase, Git, and Docker.
        </p>
      </div>
      <div className="experience-row">
        <div>
          <h3>Languages</h3>
        </div>
        <p>English, Hindi, Marathi, and Urdu.</p>
      </div>
    </article>
  );
}
