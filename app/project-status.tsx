import type { LibraryEntry } from "./data";
export default function ProjectStatus({
  status,
  detail = false,
}: {
  status: LibraryEntry["status"];
  detail?: boolean;
}) {
  if (!status || status === "Current") return null;
  return (
    <span
      className={`project-status ${status === "Legacy" ? "legacy-badge" : status === "In progress" ? "progress-badge" : "experimental-badge"} ${status === "Legacy" && detail ? "article-legacy" : ""}`}
    >
      {status === "In progress" && (
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="8" cy="8" r="5.5" strokeDasharray="25 10" />
        </svg>
      )}
      {status === "Legacy" && detail ? "Legacy project" : status}
    </span>
  );
}
