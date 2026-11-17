export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      className={`arrow-icon${diagonal ? " arrow-diagonal" : ""}`}
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {diagonal ? (
        <path d="M6 18 18 6M6 6h12v12" />
      ) : (
        <path d="M4 12h16m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}
export function SocialIcon({
  name,
}: {
  name: "GitHub" | "LinkedIn" | "Instagram" | "CV";
}) {
  if (name === "Instagram")
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  if (name === "CV")
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />
      </svg>
    );
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
    >
      {name === "GitHub" ? (
        <path d="M12 .8a11.5 11.5 0 0 0-3.64 22.41c.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.73-1.54-2.56-.3-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.3-.51-1.47.12-3.06 0 0 .97-.31 3.16 1.18a11 11 0 0 1 5.76 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.59.24 2.76.12 3.05.74.82 1.18 1.85 1.18 3.11 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.06.78 2.14v3.04c0 .3.2.66.79.55A11.5 11.5 0 0 0 12 .8Z" />
      ) : (
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.2 0 22.23 0Z" />
      )}
    </svg>
  );
}
