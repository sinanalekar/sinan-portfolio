"use client";
import Link from "next/link";
import { useState } from "react";
import { researchProjects } from "./data";
import { Arrow } from "./icons";
export default function ResearchExplorer() {
  const [selected, setSelected] = useState("cyr");
  const [compare, setCompare] = useState(false);
  const [second, setSecond] = useState("seek");
  const active = researchProjects.find((p) => p.slug === selected)!;
  const other =
    researchProjects.find((p) => p.slug === second && p.slug !== selected) ||
    researchProjects.find((p) => p.slug !== selected)!;
  return (
    <section
      id="research-library"
      className="research-explorer"
      aria-labelledby="research-library-title"
    >
      <div className="explorer-heading">
        <div>
          <p className="eyebrow">Research library / Five connected roles</p>
          <h2 id="research-library-title">
            Find your way
            <br />
            into the research.
          </h2>
        </div>
        <button
          className="button"
          type="button"
          aria-expanded={compare}
          aria-controls="research-comparison"
          onClick={() => setCompare((value) => !value)}
        >
          {compare ? "Close comparison" : "Compare roles"}
          <span aria-hidden="true">{compare ? "−" : "＋"}</span>
        </button>
      </div>
      <p className="explorer-intro">
        A suggested reading order: the shared workspace, security-state
        analysis, evidence validation, artifact research, then the portable
        research protocol.
      </p>
      <div
        className="explorer-picker"
        role="group"
        aria-label="Research project"
      >
        {researchProjects.map((project) => (
          <button
            key={project.slug}
            type="button"
            aria-pressed={selected === project.slug}
            onClick={() => setSelected(project.slug)}
          >
            <span className="micro">0{project.rank}</span>
            <strong>{project.title}</strong>
            <span>{project.focus}</span>
          </button>
        ))}
      </div>
      <div className="explorer-panel" aria-live="polite">
        <div className="explorer-title">
          <span className="access-badge">{active.visibility}</span>
          <h3>{active.title}</h3>
          <p>{active.summary}</p>
        </div>
        <dl>
          <div>
            <dt>Starts with</dt>
            <dd>{active.input}</dd>
          </div>
          <div>
            <dt>Produces</dt>
            <dd>{active.output}</dd>
          </div>
        </dl>
        <div className="explorer-bottom">
          <p>{active.boundary}</p>
          <Link className="text-link" href={`/library/${active.slug}`}>
            Explore {active.title}
            <Arrow diagonal />
          </Link>
        </div>
      </div>
      {compare && (
        <div id="research-comparison" className="research-comparison">
          <div className="comparison-heading">
            <h3>
              Different tools.
              <br />
              Different questions.
            </h3>
            <label>
              Compare {active.title} with
              <select
                aria-label="Compare with"
                value={other.slug}
                onChange={(event) => setSecond(event.target.value)}
              >
                {researchProjects
                  .filter((p) => p.slug !== selected)
                  .map((p) => (
                    <option value={p.slug} key={p.slug}>
                      {p.title}
                    </option>
                  ))}
              </select>
            </label>
          </div>
          <div
            className="comparison-scroll"
            tabIndex={0}
            role="region"
            aria-label="Research role comparison"
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Role</th>
                  <th scope="col">{active.title}</th>
                  <th scope="col">{other.title}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Focus", active.focus, other.focus],
                  ["Input", active.input, other.input],
                  ["Output", active.output, other.output],
                  ["Access", active.visibility, other.visibility],
                ].map(([label, a, b]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{a}</td>
                    <td>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
