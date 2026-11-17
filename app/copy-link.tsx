"use client";
import { useEffect, useRef, useState } from "react";
export default function CopyLink({ path }: { path: string }) {
  const [copied, setCopied] = useState(false);
  const [manual, setManual] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  useEffect(() => {
    if (manual) {
      input.current?.focus();
      input.current?.select();
    }
  }, [manual]);
  async function copy() {
    const url = new URL(path, window.location.origin).href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setManual("");
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      setManual(url);
    }
  }
  return (
    <div className="copy-link">
      <button className="button" type="button" onClick={copy}>
        {copied ? "Link copied ✓" : "Copy project link"}
      </button>
      <span className="sr-only" role="status">
        {copied ? "Project link copied to clipboard" : ""}
      </span>
      {manual && (
        <label className="copy-manual">
          Copy this link
          <input
            ref={input}
            value={manual}
            readOnly
            aria-label="Project link to copy"
            onFocus={(event) => event.currentTarget.select()}
          />
        </label>
      )}
    </div>
  );
}
