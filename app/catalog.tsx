"use client";
import Link from "next/link";
import { useState } from "react";
import { entries } from "./data";
import ProjectStatus from "./project-status";
const topics = [
  "AI tooling",
  "Web apps",
  "Security",
  "Engineering",
  "Research methods",
];
export default function Catalog({
  mode = "all",
}: {
  mode?: "all" | "docs" | "projects";
}) {
  const [topic, setTopic] = useState("All topics");
  const [query, setQuery] = useState("");
  const [type, setType] = useState("Everything");
  const [sort, setSort] = useState("curated");
  const collection = entries.filter(
    (entry) =>
      mode === "all" ||
      (mode === "docs" ? entry.kind !== "Project" : entry.kind === "Project"),
  );
  const visible = collection
    .filter(
      (entry) =>
        (topic === "All topics" || entry.topic === topic) &&
        (type === "Everything" ||
          (type === "Research"
            ? entry.collection === "Research"
            : type === "Applications"
              ? entry.kind === "Project" && entry.collection === "Applications"
              : type === "Legacy"
                ? entry.status === "Legacy"
                : entry.kind !== "Project")) &&
        `${entry.title} ${entry.summary} ${entry.topic} ${entry.kind} ${entry.status ?? ""} ${entry.stack?.join(" ") ?? ""}`
          .toLowerCase()
          .includes(query.trim().toLowerCase()),
    )
    .toSorted((a, b) =>
      sort === "az"
        ? a.title.localeCompare(b.title)
        : (a.rank ?? 99) - (b.rank ?? 99),
    );
  const active = query || topic !== "All topics" || type !== "Everything";
  function reset() {
    setQuery("");
    setTopic("All topics");
    setType("Everything");
  }
  return (
    <section
      id="library-catalog"
      className="catalog"
      aria-label="Research collection"
    >
      <aside className="shelf">
        <h2>Browse by topic</h2>
        {[
          "All topics",
          ...topics.filter((name) =>
            collection.some((entry) => entry.topic === name),
          ),
        ].map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={topic === name}
            onClick={() => setTopic(name)}
          >
            <span className="dot" aria-hidden="true" />
            {name}
            <span className="count">
              {
                collection.filter(
                  (entry) => name === "All topics" || entry.topic === name,
                ).length
              }
            </span>
          </button>
        ))}
      </aside>
      <div className="catalog-main">
        <div className="catalog-bar">
          <h2>
            {mode === "docs"
              ? "Documentation"
              : mode === "projects"
                ? "Project overviews"
                : "All projects & notes"}
          </h2>
          <input
            type="search"
            aria-label="Search library"
            placeholder="Search projects, notes, tools…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="catalog-controls">
          {mode === "all" && (
            <div className="catalog-types" role="group" aria-label="Entry type">
              {[
                "Everything",
                "Research",
                "Applications",
                "Notes & docs",
                "Legacy",
              ].map((name) => (
                <button
                  key={name}
                  type="button"
                  aria-pressed={type === name}
                  onClick={() => setType(name)}
                >
                  {name}
                </button>
              ))}
            </div>
          )}
          <label className="sort-label">
            Order{" "}
            <select
              aria-label="Sort entries"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <option value="curated">Recommended</option>
              <option value="az">Title A–Z</option>
            </select>
          </label>
        </div>
        <div className="catalog-result">
          <p className="result-count" role="status">
            {visible.length} {visible.length === 1 ? "entry" : "entries"}
          </p>
          {active && (
            <button className="clear-filters" type="button" onClick={reset}>
              Clear search and filters
            </button>
          )}
        </div>
        <div className="cards">
          {visible.map((entry) => (
            <Link
              className={`card ${entry.color}`}
              key={entry.slug}
              href={`/library/${entry.slug}`}
            >
              <span className="card-kind">
                {entry.kind} <span>· {entry.topic}</span>
                <span className="entry-access">{entry.visibility}</span>
                <ProjectStatus status={entry.status} />
              </span>
              <div className="card-title">
                {entry.rank && (
                  <span
                    className="project-rank"
                    aria-label={`Curated project ${entry.rank}`}
                  >
                    {String(entry.rank).padStart(2, "0")}
                  </span>
                )}
                <h3>{entry.title}</h3>
              </div>
              <p>{entry.summary}</p>
              {entry.stack && (
                <span className="card-stack">{entry.stack.join(" / ")}</span>
              )}
              <span className="card-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
        {!visible.length && (
          <div className="empty">
            <p>No entries match. Try another topic or search term.</p>
          </div>
        )}
      </div>
    </section>
  );
}
