import Link from "next/link";
import PrintButton from "../print-button";
export const metadata = { title: "Résumé" };
export default function Resume() {
  return (
    <article className="reading resume">
      <div className="resume-heading">
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
        </div>
        <PrintButton />
      </div>
      <h2 className="experience-label">Independent work</h2>
      <div className="experience-row">
        <div>
          <h3>Security research & software</h3>
          <span className="micro">INDEPENDENT PROJECTS</span>
        </div>
        <p>
          Application authorization, controlled experiments, and Python research
          tooling. Building CYR@, a local desktop research workspace, and web
          apps with React and TypeScript.{" "}
          <Link className="text-link" href="/projects">
            Explore public work ↗
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
      <div className="experience-row">
        <div>
          <h3>IIT Patna</h3>
          <span className="micro">ONGOING</span>
        </div>
        <p>BS–MS in Artificial Intelligence and Cybersecurity.</p>
      </div>
      <div className="experience-row">
        <div>
          <h3>Computer Engineering</h3>
          <span className="micro">ONGOING</span>
        </div>
        <p>B.Tech in Computer Engineering.</p>
      </div>
      <h2 className="experience-label">Technical toolkit</h2>
      <div className="experience-row">
        <div>
          <h3>Languages & frameworks</h3>
        </div>
        <p>
          Python, TypeScript, React, Next.js, FastAPI, SQL, Git, and Docker.
        </p>
      </div>
    </article>
  );
}
