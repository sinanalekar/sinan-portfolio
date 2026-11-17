"use client";
import { useEffect } from "react";

export default function PressFeedback() {
  useEffect(() => {
    const pending = new Map<HTMLElement, ReturnType<typeof setTimeout>>();
    function respond(event: MouseEvent) {
      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>("button, a[href], summary")
          : null;
      if (!target || target.matches(":disabled, [aria-disabled='true']"))
        return;
      const box = target.getBoundingClientRect();
      target.style.setProperty(
        "--press-x",
        `${event.detail ? event.clientX - box.left : box.width / 2}px`,
      );
      target.style.setProperty(
        "--press-y",
        `${event.detail ? event.clientY - box.top : box.height / 2}px`,
      );
      target.dataset.feedback = target.dataset.feedback === "a" ? "b" : "a";
      clearTimeout(pending.get(target));
      pending.set(
        target,
        setTimeout(() => {
          delete target.dataset.feedback;
          target.style.removeProperty("--press-x");
          target.style.removeProperty("--press-y");
          pending.delete(target);
        }, 520),
      );
    }
    document.addEventListener("click", respond, true);
    return () => {
      document.removeEventListener("click", respond, true);
      for (const [element, timer] of pending) {
        clearTimeout(timer);
        delete element.dataset.feedback;
        element.style.removeProperty("--press-x");
        element.style.removeProperty("--press-y");
      }
    };
  }, []);
  return null;
}
