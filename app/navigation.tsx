"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Theme from "./theme";
import { Arrow } from "./icons";
import { keepDialogFocus } from "./dialog-focus";
function NavIcon({ label }: { label: string }) {
  const paths: Record<string, string> = {
    Home: "M3 10 12 3l9 7v11H3V10Zm6 11v-8h6v8",
    Work: "M3 7h18v14H3V7Zm5 0V3h8v4M3 12h18M10 12v3h4v-3",
    Library: "M4 3h5v18H4V3Zm6 0h4v18h-4V3Zm6 1 4-1 3 17-4 1-3-17Z",
    Docs: "M5 2h10l5 5v15H5V2Zm10 0v6h5M9 12h7m-7 4h7",
    About: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 9a8 8 0 0 1 16 0",
    Résumé: "M4 3h16v18H4V3Zm4 5h8m-8 4h8m-8 4h5",
    Contact: "M3 5h18v14H3V5Zm0 1 9 7 9-7",
    More: "M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z",
    Research:
      "M9 3h6m-5 0v6l-6 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-9V3M7 15h10",
  };
  return (
    <svg
      className="nav-icon"
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[label]} />
    </svg>
  );
}
const pages = [
  ["/", "Home"],
  ["/projects", "Work"],
  ["/library", "Library"],
  ["/docs", "Docs"],
  ["/about", "About"],
  ["/resume", "Résumé"],
] as const;
export default function Navigation() {
  const path = usePathname();
  const menu = useRef<HTMLDialogElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [section, setSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const secondaryPage =
    ["/about", "/docs", "/resume", "/research"].some((page) => path === page) ||
    (path === "/" && section === "about");
  function closeMenu() {
    menu.current?.close();
  }
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        let active = "home";
        for (const id of ["home", "work", "about", "hello"]) {
          const node = document.getElementById(id);
          if (node && node.getBoundingClientRect().top <= 180) active = id;
        }
        setSection(active);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
    };
  }, [path]);
  return (
    <>
      <header className="top" data-scrolled={scrolled}>
        <nav aria-label="Primary">
          {pages.map(([href, label]) => {
            const id =
              href === "/"
                ? "home"
                : href === "/projects"
                  ? "work"
                  : href === "/about"
                    ? "about"
                    : "";
            const active =
              path === "/"
                ? section === id
                : path.startsWith(href) && href !== "/";
            return (
              <Link
                key={href}
                className={
                  ["Docs", "About", "Résumé"].includes(label)
                    ? "nav-secondary"
                    : undefined
                }
                href={path === "/" && id ? `#${id}` : href}
                aria-current={
                  active ? (path === "/" ? "location" : "page") : undefined
                }
              >
                <NavIcon label={label} />
                <span>{label}</span>
              </Link>
            );
          })}
          <button
            className="nav-more"
            type="button"
            aria-label="More pages"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            aria-controls="mobile-page-menu"
            data-current={secondaryPage}
            onClick={() => {
              menu.current?.showModal();
              setMenuOpen(true);
            }}
          >
            <NavIcon label="More" />
            <span>More</span>
          </button>
        </nav>
        <div className="nav-actions">
          <Theme />
          <Link
            className="button primary nav-contact"
            href="/contact"
            aria-label="Contact"
            aria-current={path === "/contact" ? "page" : undefined}
          >
            <span className="nav-contact-desktop">
              Let’s talk <Arrow diagonal />
            </span>
            <span className="nav-contact-mobile">
              <NavIcon label="Contact" />
              <span>Contact</span>
            </span>
          </Link>
        </div>
      </header>
      <dialog
        ref={menu}
        id="mobile-page-menu"
        className="mobile-page-menu"
        aria-labelledby="mobile-menu-title"
        onKeyDown={keepDialogFocus}
        onClose={() => setMenuOpen(false)}
        onClick={(event) => {
          if (event.target === menu.current) closeMenu();
        }}
      >
        <div className="mobile-menu-heading">
          <div>
            <p className="eyebrow">A little further</p>
            <h2 id="mobile-menu-title">Explore the portfolio.</h2>
          </div>
          <button
            className="dialog-close"
            type="button"
            aria-label="Close page menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>
        <nav aria-label="More pages">
          {[
            [
              "/about",
              "About",
              "Background, interests, and education",
              "About",
            ],
            [
              "/docs",
              "Docs",
              "Architecture and methods behind the work",
              "Docs",
            ],
            [
              "/resume",
              "Résumé",
              "Education, freelance work, and projects",
              "Résumé",
            ],
            [
              "/research",
              "Research history",
              "Reporting status and research scope",
              "Research",
            ],
          ].map(([href, label, description, icon]) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              aria-current={path === href ? "page" : undefined}
            >
              <NavIcon label={icon} />
              <span>
                <strong>{label}</strong>
                <span>{description}</span>
              </span>
              <Arrow diagonal />
            </Link>
          ))}
        </nav>
        <a
          className="button"
          href="/resume.pdf"
          download="Sinan-Alekar-CV.pdf"
          onClick={closeMenu}
        >
          Download original CV <span aria-hidden="true">↓</span>
        </a>
      </dialog>
    </>
  );
}
