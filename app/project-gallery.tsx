"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import ProjectPreview from "./project-preview";
import { links } from "./data";
import { Arrow } from "./icons";
export default function ProjectGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
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
  return (
    <>
      <button
        className="featured-visual"
        type="button"
        aria-label="Open CYR@ architecture preview"
        aria-haspopup="dialog"
        onClick={() => {
          dialog.current?.showModal();
          document.body.style.overflow = "hidden";
        }}
      >
        <ProjectPreview />
        <span className="preview-open">
          Explore the architecture <Arrow diagonal />
        </span>
      </button>
      <dialog
        ref={dialog}
        className="project-dialog"
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
              <p className="eyebrow">A closer look / CYR@</p>
              <h2 id="preview-title">Inside the workspace.</h2>
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
          <ProjectPreview />
          <p>
            A guide to the public architecture: a desktop interface, a local
            backend, and explicit records of what a tool can do.
          </p>
          <div className="actions">
            <Link
              className="button primary"
              href="/library/cyr"
              onClick={close}
            >
              Read the case study <Arrow />
            </Link>
            <a className="text-link" href={links.cyr}>
              Inspect the source <Arrow diagonal />
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
