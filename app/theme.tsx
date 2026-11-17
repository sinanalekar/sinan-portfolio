"use client";
import { useSyncExternalStore } from "react";
function subscribe(listener: () => void) {
  window.addEventListener("portfolio-theme", listener);
  window.addEventListener("storage", listener);
  return () => {
    window.removeEventListener("portfolio-theme", listener);
    window.removeEventListener("storage", listener);
  };
}
function currentTheme() {
  return document.documentElement.dataset.theme || "light";
}
export default function Theme() {
  const theme = useSyncExternalStore(subscribe, currentTheme, () => "light");
  function toggle() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {}
    window.dispatchEvent(new Event("portfolio-theme"));
  }
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        {theme === "dark" ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5" />
          </>
        ) : (
          <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" />
        )}
      </svg>
    </button>
  );
}
