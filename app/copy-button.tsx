"use client";
import { useEffect, useRef, useState } from "react";

type CopySource =
  | { text: string; path?: never }
  | { path: string; text?: never };
type Props = CopySource & {
  label: string;
  copiedLabel: string;
  successMessage: string;
  fallbackLabel: string;
  inputLabel: string;
  className?: string;
};

export default function CopyButton(props: Props) {
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
    const value =
      props.text ?? new URL(props.path!, window.location.origin).href;
    if (timer.current) clearTimeout(timer.current);
    setCopied(false);
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setManual("");
      timer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      setManual(value);
    }
  }
  return (
    <div className={`copy-link ${props.className ?? ""}`}>
      <button className="button" type="button" onClick={copy}>
        {copied ? props.copiedLabel : props.label}
      </button>
      <span className="sr-only" role="status">
        {copied ? props.successMessage : manual ? props.fallbackLabel : ""}
      </span>
      {manual && (
        <label className="copy-manual">
          {props.fallbackLabel}
          <input
            ref={input}
            value={manual}
            readOnly
            aria-label={props.inputLabel}
            onFocus={(event) => event.currentTarget.select()}
          />
        </label>
      )}
    </div>
  );
}
