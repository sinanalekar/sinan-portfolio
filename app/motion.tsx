"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function Motion() {
  const path = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) return;
    const nodes = document.querySelectorAll(
      ".home-section .section-heading, .home-section>h2, .featured-visual, .project-caption, .secondary-project, .reading-list>a, .about-split, .toolbox, .contact-bottom, .discovery-list>a, .research-summary",
    );
    const observer = new IntersectionObserver(
      (records) => {
        for (const record of records)
          if (record.isIntersecting) {
            record.target.classList.add("in-view");
            observer.unobserve(record.target);
          }
      },
      { threshold: 0.08, rootMargin: "0px 0px -35px 0px" },
    );
    nodes.forEach((node) => {
      if (node.getBoundingClientRect().top > window.innerHeight) {
        node.classList.add("reveal-ready");
        observer.observe(node);
      }
    });
    const showAll = () =>
      nodes.forEach((node) => node.classList.add("in-view"));
    preference.addEventListener("change", showAll);
    return () => {
      observer.disconnect();
      nodes.forEach((node) => node.classList.remove("reveal-ready", "in-view"));
      preference.removeEventListener("change", showAll);
    };
  }, [path]);
  return null;
}
