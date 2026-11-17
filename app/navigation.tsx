"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Theme from "./theme";
import { Arrow } from "./icons";
function NavIcon({ label }: { label: string }) {
  const paths: Record<string, string> = {
    Home: "M3 10 12 3l9 7v11H3V10Zm6 11v-8h6v8",
    Work: "M3 7h18v14H3V7Zm5 0V3h8v4M3 12h18M10 12v3h4v-3",
    Library: "M4 3h5v18H4V3Zm6 0h4v18h-4V3Zm6 1 4-1 3 17-4 1-3-17Z",
    Docs: "M5 2h10l5 5v15H5V2Zm10 0v6h5M9 12h7m-7 4h7",
    About: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 9a8 8 0 0 1 16 0",
    Résumé: "M4 3h16v18H4V3Zm4 5h8m-8 4h8m-8 4h5",
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
  const [section, setSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
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
      </nav>
      <div className="nav-actions">
        <Theme />
        <Link className="button primary nav-contact" href="/contact">
          Let’s talk <Arrow diagonal />
        </Link>
      </div>
    </header>
  );
}
