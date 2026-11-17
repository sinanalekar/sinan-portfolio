import Link from "next/link";
import Image from "next/image";
import { entries, researchProjects } from "./data";
import { Arrow } from "./icons";
import ProjectGallery from "./project-gallery";

export default function Home() {
  return (
    <>
      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="hero-orb" aria-hidden="true" />
        <div className="hero-coordinate" aria-hidden="true">
          INDEPENDENT BY DESIGN
          <br />
          CURIOUS BY DEFAULT
        </div>
        <div className="hero-copy">
          <p className="eyebrow">
            <svg
              className="star"
              aria-hidden="true"
              width="15"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M10 1v18M1 10h18M4 4l12 12M4 16 16 4" />
            </svg>{" "}
            Research. Build. Understand.
          </p>
          <h1 id="hero-title">
            I’m Sinan Alekar.
            <br />
            <span>
              I build tools for
              <br />
              security research.
            </span>
          </h1>
          <p className="hero-description">
            Independent researcher and student. <br />
            Working across Python tooling, AI systems, and the web.
          </p>
          <div className="actions">
            <a className="button primary" href="#work">
              Explore my work <Arrow />
            </a>
            <Link className="text-link" href="/resume">
              View résumé <Arrow diagonal />
            </Link>
            <a
              className="text-link hero-download"
              href="/resume.pdf"
              download="Sinan-Alekar-CV.pdf"
            >
              Download CV ↓
            </a>
          </div>
        </div>
        <a
          className="scroll-cue"
          href="#work"
          aria-label="Scroll to selected work"
        >
          <svg className="scroll-ring" aria-hidden="true" viewBox="0 0 100 100">
            <defs>
              <path
                id="scroll-circle"
                d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
              />
            </defs>
            <text>
              <textPath href="#scroll-circle">
                SCROLL TO EXPLORE · SCROLL TO EXPLORE ·{" "}
              </textPath>
            </text>
          </svg>
          <span>↓</span>
        </a>
      </section>
      <section className="home-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2>
              From questions
              <br />
              to working software.
            </h2>
          </div>
          <Link className="text-link" href="/projects">
            All work <Arrow diagonal />
          </Link>
        </div>
        <ProjectGallery />
        <div className="project-caption">
          <div>
            <span className="micro">
              INDEPENDENT PROJECT / PYTHON · REACT · TAURI
            </span>
            <h3>
              <Link href="/library/cyr">
                CYR@ <Arrow diagonal />
              </Link>
            </h3>
          </div>
          <p>
            A local desktop workspace for authorized research. I built a shell
            and backend around tool permissions, durable tasks, and inspectable
            records.
          </p>
        </div>
        <Link className="secondary-project" href="/library/portfolio">
          <div className="web-preview" aria-hidden="true">
            <div className="mini-sidebar">
              <Image
                src="/brand-logo.jpg"
                alt=""
                width={44}
                height={44}
                sizes="44px"
              />
              <span />
              <span />
              <span />
            </div>
            <div className="mini-content">
              <span>RESEARCH & SOFTWARE</span>
              <strong>
                A place for
                <br />
                the work.
              </strong>
              <div />
              <div />
            </div>
            <span className="mini-orb" />
          </div>
          <div>
            <span className="micro">WEB APP / NEXT.JS · TYPESCRIPT</span>
            <h3>
              This little corner
              <br />
              of the internet. <Arrow diagonal />
            </h3>
            <p>
              A portfolio and searchable Library that keep public code, project
              notes, and documentation together.
            </p>
            <span className="text-link">
              Inside the build <Arrow />
            </span>
          </div>
        </Link>
      </section>
      <section className="home-section discovery-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A connected research library</p>
            <h2>
              Five roles.
              <br />
              One careful approach.
            </h2>
          </div>
          <Link className="text-link" href="/library#research-library">
            Explore & compare <Arrow diagonal />
          </Link>
        </div>
        <div className="discovery-list">
          {researchProjects.map((project) => (
            <Link href={`/library/${project.slug}`} key={project.slug}>
              <span className="discovery-number">0{project.rank}</span>
              <div>
                <span className="micro">{project.visibility}</span>
                <h3>{project.title}</h3>
                <p>{project.focus}</p>
              </div>
              <Arrow diagonal />
            </Link>
          ))}
        </div>
      </section>
      <section className="home-section research-feature">
        <p className="eyebrow">Independent research</p>
        <div className="section-heading">
          <h2>
            Following the evidence.
            <br />
            <span className="muted">Following up, carefully.</span>
          </h2>
          <Link className="text-link" href="/research">
            Research history <Arrow diagonal />
          </Link>
        </div>
        <div className="research-summary">
          <div>
            <span className="micro">APPLE</span>
            <strong>Investigation ongoing</strong>
          </div>
          <div>
            <span className="micro">XIAOMI / HACKERONE</span>
            <strong>Triaged & confirmed</strong>
          </div>
        </div>
        <p className="research-attribution">
          Researcher-reported statuses. Technical report details remain private.
        </p>
      </section>
      <section className="home-section" id="about">
        <p className="eyebrow">02 / The approach</p>
        <h2>
          Stay curious.
          <br />
          <span className="muted">Make the work inspectable.</span>
        </h2>
        <div className="about-split">
          <p>
            I’m interested in how applications decide what someone can do—and
            how we can make those decisions easier to understand. I build small
            tools, test ideas, and write down what the evidence actually shows.
          </p>
          <div>
            <span className="micro">CURRENTLY STUDYING</span>
            <p>
              AI & Cybersecurity at IIT Patna
              <br />
              Computer Engineering
            </p>
            <Link className="text-link" href="/about">
              A little more about me <Arrow diagonal />
            </Link>
          </div>
        </div>
        <div className="tool-line">
          <span className="micro">IN MY TOOLBOX</span>
          <p>
            Python <span> / </span> TypeScript <span> / </span> React{" "}
            <span> / </span> FastAPI <span> / </span> Git
          </p>
        </div>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / Open notebook</p>
            <h2>Notes behind the work.</h2>
          </div>
          <Link className="text-link" href="/library">
            Visit the Library <Arrow diagonal />
          </Link>
        </div>
        <div className="reading-list">
          {entries
            .filter((entry) => entry.kind !== "Project")
            .slice(0, 3)
            .map((entry, index) => (
              <Link href={`/library/${entry.slug}`} key={entry.slug}>
                <span className="list-index">0{index + 1}</span>
                <div>
                  <span className="micro">
                    {entry.kind} / {entry.topic}
                  </span>
                  <h3>{entry.title}</h3>
                </div>
                <Arrow diagonal />
              </Link>
            ))}
        </div>
      </section>
      <section id="hello" className="home-section contact-section">
        <p className="eyebrow">04 / Say hello</p>
        <h2>
          Have a good question?
          <br />
          <span>Let’s start there.</span>
        </h2>
        <div className="contact-bottom">
          <p>
            For project conversations, remote internships,
            <br />
            and early-career opportunities.
          </p>
          <Link className="button primary" href="/contact">
            Get in touch <Arrow diagonal />
          </Link>
        </div>
      </section>
    </>
  );
}
