"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ProjectPreview from "./project-preview";
import { rankedProjects } from "./data";
import { projectSystems } from "./project-systems";
import ProjectSystemMap from "./project-system-map";
import CopyLink from "./copy-link";
import { Arrow } from "./icons";
export default function ProjectGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const [wide, setWide] = useState(false);
  const active = rankedProjects[index];
  useEffect(
    () => () => {
      document.body.style.overflow = "";
    },
    [],
  );
  function close() {
    dialog.current?.close();
    document.body.style.overflow = "";
  }
  function change(direction: number) {
    setIndex(
      (value) =>
        (value + direction + rankedProjects.length) % rankedProjects.length,
    );
  }
  return (
    <>
      <button
        className="featured-visual"
        type="button"
        aria-label="Open CYR@ architecture preview"
        aria-haspopup="dialog"
        onClick={() => {
          setIndex(0);
          setWide(false);
          dialog.current?.showModal();
          document.body.style.overflow = "hidden";
        }}
      >
        <ProjectPreview />
        <span className="preview-open">
          Explore the architecture
          <Arrow diagonal />
        </span>
      </button>
      <dialog
        ref={dialog}
        className={`project-dialog ${wide ? "dialog-wide" : ""}`}
        aria-labelledby="preview-title"
        onClose={() => {
          document.body.style.overflow = "";
        }}
        onClick={(event) => {
          if (event.target === dialog.current) close();
        }}
      >
        <div className="dialog-content">
          <div className="dialog-heading">
            <div>
              <p className="eyebrow">
                A closer look / {index + 1} of {rankedProjects.length}
              </p>
              <h2 id="preview-title">Inside {active.title}.</h2>
            </div>
            <button
              className="dialog-close"
              type="button"
              onClick={close}
              aria-label="Close architecture preview"
            >
              ×
            </button>
          </div>
          <div className="gallery-toolbar">
            <button
              className="button"
              type="button"
              aria-pressed={wide}
              onClick={() => setWide((value) => !value)}
            >
              {wide ? "Restore preview" : "Expand preview"}
              <span aria-hidden="true">{wide ? "↙" : "↗"}</span>
            </button>
            <CopyLink key={active.slug} path={`/library/${active.slug}`} />
          </div>
          <ProjectSystemMap
            key={active.slug}
            system={projectSystems[active.slug]}
            showShare={false}
          />
          <div className="gallery-navigation">
            <button className="button" type="button" onClick={() => change(-1)}>
              <span className="reverse-arrow">
                <Arrow />
              </span>
              Previous project
            </button>
            <Link
              className="button primary"
              href={`/library/${active.slug}`}
              onClick={close}
            >
              Read the case study
              <Arrow diagonal />
            </Link>
            <button className="button" type="button" onClick={() => change(1)}>
              Next project
              <Arrow />
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
