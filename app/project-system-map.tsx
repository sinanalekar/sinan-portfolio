"use client";
import { useId, useRef, useState } from "react";
import { Arrow } from "./icons";
import CopyLink from "./copy-link";
import type { ProjectSystem } from "./project-systems";
export default function ProjectSystemMap({
  system,
  showShare = true,
}: {
  system: ProjectSystem;
  showShare?: boolean;
}) {
  const [active, setActive] = useState(0);
  const id = useId();
  const strip = useRef<HTMLDivElement>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = system.stages[active];
  function select(index: number, focus = false) {
    const next = (index + system.stages.length) % system.stages.length;
    setActive(next);
    const button = buttons.current[next];
    const container = strip.current;
    if (button && container) {
      const left =
        container.scrollLeft +
        button.getBoundingClientRect().left -
        container.getBoundingClientRect().left -
        (container.clientWidth - button.clientWidth) / 2;
      container.scrollTo({
        left,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    }
    if (focus) button?.focus({ preventScroll: true });
  }
  return (
    <section className="project-system" aria-labelledby={`${id}-heading`}>
      <div className="system-heading">
        <div>
          <p className="eyebrow">{system.title} / System map</p>
          <h2 id={`${id}-heading`}>A glimpse of how it works.</h2>
        </div>
        <span className="map-scope">{system.scope}</span>
      </div>
      <p className="system-overview">{system.overview}</p>
      <p className="map-instruction">
        Select a stage, or use the walkthrough controls.
      </p>
      <div
        ref={strip}
        className="map-stages"
        role="group"
        aria-label={`${system.title} system stages`}
        onKeyDown={(event) => {
          if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) {
            event.preventDefault();
            const focused = buttons.current.indexOf(
              event.target as HTMLButtonElement,
            );
            const current = focused >= 0 ? focused : active;
            select(
              event.key === "Home"
                ? 0
                : event.key === "End"
                  ? system.stages.length - 1
                  : current + (event.key === "ArrowRight" ? 1 : -1),
              true,
            );
          }
        }}
      >
        {system.stages.map((item, index) => (
          <button
            key={item.id}
            ref={(el) => {
              buttons.current[index] = el;
            }}
            className="system-stage"
            type="button"
            aria-pressed={index === active}
            aria-label={`Explore stage ${index + 1}: ${item.label}`}
            onClick={() => select(index)}
          >
            <span className="stage-index">0{index + 1}</span>
            <strong>{item.label}</strong>
            <span>{item.caption}</span>
            {index < system.stages.length - 1 && (
              <span className="stage-connector" aria-hidden="true">
                →
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="system-story" aria-live="polite" aria-atomic="true">
        <span className="micro">
          STAGE {active + 1} OF {system.stages.length}
        </span>
        <h3>{stage.label}</h3>
        <p>{stage.explanation}</p>
      </div>
      <div className="map-controls">
        <button
          className="button map-previous"
          type="button"
          onClick={() => select(active - 1)}
        >
          <span className="reverse-arrow">
            <Arrow />
          </span>
          Previous stage
        </button>
        <span className="stage-count" aria-hidden="true">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(system.stages.length).padStart(2, "0")}
        </span>
        <button
          className="button"
          type="button"
          onClick={() => select(active + 1)}
        >
          Next stage
          <Arrow />
        </button>
      </div>
      <div className="map-outcome">
        <p>{system.outcome}</p>
        {showShare && <CopyLink path={`/library/${system.slug}`} />}
      </div>
    </section>
  );
}
