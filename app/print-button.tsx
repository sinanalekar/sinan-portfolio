"use client";
export default function PrintButton() {
  return (
    <button
      className="button print-button"
      type="button"
      onClick={() => window.print()}
    >
      Print / Save PDF ↗
    </button>
  );
}
