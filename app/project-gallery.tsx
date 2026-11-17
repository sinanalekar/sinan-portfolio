"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ProjectPreview from "./project-preview";
import { rankedProjects } from "./data";
import { projectSystems } from "./project-systems";
import ProjectSystemMap from "./project-system-map";
import CopyLink from "./copy-link";
import { Arrow } from "./icons";
import { keepDialogFocus } from "./dialog-focus";
export default function ProjectGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [wide, setWide] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [notice, setNotice] = useState("");
  const active = rankedProjects[index];
  useEffect(
    () => () => {
      document.body.style.overflow = "";
    },
    [],
  );
  useEffect(() => {
    const update = () =>
      setFullscreen(document.fullscreenElement === content.current);
    document.addEventListener("fullscreenchange", update);
    return () => document.removeEventListener("fullscreenchange", update);
  }, []);
  function close() {
    if (document.fullscreenElement === content.current)
      void document.exitFullscreen().catch(() => {});
    dialog.current?.close();
    document.body.style.overflow = "";
  }
  async function toggleFullscreen() {
    setNotice("");
    try {
      if (document.fullscreenElement === content.current)
        await document.exitFullscreen();
      else if (content.current?.requestFullscreen)
        await content.current.requestFullscreen();
      else throw new Error("Fullscreen unavailable");
    } catch {
      setWide(true);
      setNotice(
        "Expanded to fit your screen. Fullscreen is unavailable in this browser.",
      );
    }
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
          setNotice("");
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
        onKeyDown={keepDialogFocus}
        onClose={() => {
          if (document.fullscreenElement === content.current)
            void document.exitFullscreen().catch(() => {});
          document.body.style.overflow = "";
        }}
        onClick={(event) => {
          if (event.target === dialog.current) close();
        }}
      >
        <div className="dialog-content" ref={content}>
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
            <button
              className="button gallery-fullscreen"
              type="button"
              aria-pressed={fullscreen}
              onClick={toggleFullscreen}
            >
              {fullscreen ? "Exit fullscreen" : "Fullscreen"}
              <svg
                width="14"
                height="14"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M8 3H3v5m13-5h5v5M3 16v5h5m8 0h5v-5" />
              </svg>
            </button>
            <CopyLink key={active.slug} path={`/library/${active.slug}`} />
          </div>
          {notice && (
            <p className="viewer-notice" aria-live="polite">
              {notice}
            </p>
          )}
          <div
            className="gallery-picker"
            role="group"
            aria-label="Choose a project"
          >
            {rankedProjects.map((project, position) => (
              <button
                type="button"
                key={project.slug}
                aria-pressed={position === index}
                onClick={() => setIndex(position)}
              >
                <span className="micro">
                  {String(position + 1).padStart(2, "0")}
                </span>
                {project.title}
              </button>
            ))}
          </div>
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
          <ProjectSystemMap
            key={active.slug}
            system={projectSystems[active.slug]}
            showShare={false}
          />
        </div>
      </dialog>
    </>
  );
}
