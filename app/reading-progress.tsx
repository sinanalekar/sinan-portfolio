"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function ReadingProgress() {
  const path = usePathname();
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const available =
          document.documentElement.scrollHeight - window.innerHeight;
        document.documentElement.style.setProperty(
          "--reading-progress",
          String(
            available > 0
              ? Math.min(1, Math.max(0, window.scrollY / available))
              : 0,
          ),
        );
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [path]);
  return <div className="reading-progress" aria-hidden="true" />;
}
