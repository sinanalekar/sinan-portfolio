"use client";

import { useSyncExternalStore } from "react";

function subscribe(listener: () => void) {
  window.addEventListener("portfolio-theme", listener);
  return () => window.removeEventListener("portfolio-theme", listener);
}

function currentTheme() {
  return document.documentElement.dataset.theme || "dark";
}

export default function Theme() {
  const theme = useSyncExternalStore(subscribe, currentTheme, () => "dark");
  function toggle() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("portfolio-theme", next); } catch {}
    window.dispatchEvent(new Event("portfolio-theme"));
  }
  return <button className="theme-toggle" onClick={toggle} aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}>{theme === "dark" ? "☼" : "☾"}</button>;
}
