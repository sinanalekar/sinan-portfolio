"use client";

import Link from "next/link";
import { useState } from "react";
import { entries } from "./data";

const topics = ["AI tooling", "Security", "Engineering", "Research methods"];

export default function Catalog({ mode = "all" }: { mode?: "all" | "docs" | "projects" }) {
  const [topic, setTopic] = useState("All topics");
  const [query, setQuery] = useState("");
  const collection = entries.filter(entry => mode === "all" || (mode === "docs" ? entry.kind !== "Project" : entry.kind === "Project"));
  const visible = collection.filter(entry => (topic === "All topics" || entry.topic === topic) &&
    `${entry.title} ${entry.summary} ${entry.topic} ${entry.kind}`.toLowerCase().includes(query.trim().toLowerCase()));
  return (
    <section className="catalog" aria-label="Research collection">
      <aside className="shelf">
        <h2>Collections</h2>
        {["All topics", ...topics.filter(name => collection.some(entry => entry.topic === name))].map(name => (
          <button key={name} type="button" aria-pressed={topic === name} onClick={() => setTopic(name)}>
            <span className="dot" data-topic={name} aria-hidden="true" />{name}
            <span className="count">{collection.filter(entry => name === "All topics" || entry.topic === name).length}</span>
          </button>
        ))}
      </aside>
      <div className="catalog-main">
        <div className="catalog-bar">
          <h2>{mode === "docs" ? "Documentation" : mode === "projects" ? "Selected project" : "Research library"}</h2>
          <input type="search" aria-label="Search library" placeholder="Search library…" value={query} onChange={event => setQuery(event.target.value)} />
        </div>
        <p className="result-count" role="status">{visible.length} {visible.length === 1 ? "entry" : "entries"}</p>
        <div className="cards">
          {visible.map(entry => (
            <Link className={`card ${entry.color}`} key={entry.slug} href={`/library/${entry.slug}`}>
              <span className="card-kind">{entry.kind} <span>· {entry.topic}</span></span>
              <h3>{entry.title}</h3><p>{entry.summary}</p><span className="card-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
        {!visible.length && <p className="empty">No entries match. Try another topic or search term.</p>}
      </div>
    </section>
  );
}
