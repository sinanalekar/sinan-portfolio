"use client";
import Link from "next/link";
import { useId, useRef, useState } from "react";
import { Arrow } from "./icons";

const tools = [
  {
    name: "Python",
    mark: "Py",
    title: "Small tools. Inspectable behavior.",
    description:
      "Python connects the local backend, tool permissions, and task records in CYR@. The public case study links the modules behind those decisions.",
    examples: [
      ["CYR@", "cyr"],
      ["Tool permissions", "permissions"],
    ],
  },
  {
    name: "TypeScript",
    mark: "TS",
    title: "Clear structures for the web.",
    description:
      "TypeScript describes this portfolio’s shared content catalog and the interfaces in the Mahad civic participation app.",
    examples: [
      ["Research portfolio", "portfolio"],
      ["Mahad education initiative", "mahad-education"],
    ],
  },
  {
    name: "React",
    mark: "{ }",
    title: "Interfaces that explain the state.",
    description:
      "React powers this Library’s search and filters and the desktop interface around CYR@’s research workflow.",
    examples: [
      ["Research portfolio", "portfolio"],
      ["CYR@", "cyr"],
    ],
  },
  {
    name: "FastAPI",
    mark: "↯",
    title: "A local bridge between UI and tools.",
    description:
      "CYR@’s FastAPI backend connects a desktop interface to task coordination and the tools available in a local installation.",
    examples: [
      ["CYR@", "cyr"],
      ["Task checkpoints", "checkpoints"],
    ],
  },
  {
    name: "Git",
    mark: "⑂",
    title: "A source version you can inspect.",
    description:
      "Public case studies link to specific repository versions, so the implementation behind a write-up stays inspectable as the project changes.",
    examples: [
      ["Research portfolio", "portfolio"],
      ["CYR@", "cyr"],
    ],
  },
] as const;

export default function Toolbox() {
  const id = useId();
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = tools[selected];
  function select(index: number) {
    const next = (index + tools.length) % tools.length;
    setSelected(next);
    tabs.current[next]?.focus();
  }
  return (
    <section className="toolbox" aria-labelledby={`${id}-title`}>
      <div className="toolbox-heading">
        <div>
          <p className="eyebrow">In my toolbox</p>
          <h3 id={`${id}-title`}>Tools, in context.</h3>
        </div>
        <p>Select a tool to see where I use it.</p>
      </div>
      <div
        className="toolbox-tabs"
        role="tablist"
        aria-label="Tools in practice"
        onKeyDown={(event) => {
          if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) {
            event.preventDefault();
            select(
              event.key === "Home"
                ? 0
                : event.key === "End"
                  ? tools.length - 1
                  : selected + (event.key === "ArrowRight" ? 1 : -1),
            );
          }
        }}
      >
        {tools.map((tool, index) => (
          <button
            type="button"
            role="tab"
            key={tool.name}
            id={`${id}-tab-${index}`}
            aria-selected={selected === index}
            aria-controls={`${id}-panel`}
            tabIndex={selected === index ? 0 : -1}
            ref={(node) => {
              tabs.current[index] = node;
            }}
            onClick={() => setSelected(index)}
          >
            <span className="toolbox-mark" aria-hidden="true">
              {tool.mark}
            </span>
            <span>{tool.name}</span>
          </button>
        ))}
      </div>
      <div
        className="toolbox-panel"
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${selected}`}
        tabIndex={0}
      >
        <div key={active.name} className="toolbox-story">
          <span className="micro">{active.name} / In the public work</span>
          <h4>{active.title}</h4>
          <p>{active.description}</p>
        </div>
        <div className="toolbox-examples">
          <span className="micro">Explore an example</span>
          {active.examples.map(([title, slug]) => (
            <Link key={slug} href={`/library/${slug}`}>
              {title}
              <Arrow diagonal />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
