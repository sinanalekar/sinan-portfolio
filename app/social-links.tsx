import { links } from "./data";
import { SocialIcon } from "./icons";
const profiles = [
  { name: "GitHub", url: links.github },
  { name: "LinkedIn", url: links.linkedin },
  { name: "Instagram", url: links.instagram },
] as const;
export default function SocialLinks({
  variant = "icons",
  includeCv = false,
}: {
  variant?: "icons" | "footer" | "cards";
  includeCv?: boolean;
}) {
  return (
    <div
      className={`social-links social-${variant} ${variant === "icons" ? "profile-links" : ""}`}
      role="group"
      aria-label="Social profiles"
    >
      {profiles.map((profile) => (
        <a
          key={profile.name}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={profile.name}
          title={profile.name}
        >
          <SocialIcon name={profile.name} />
          <span
            className={variant === "icons" ? "social-tooltip" : "social-name"}
          >
            {profile.name}
          </span>
        </a>
      ))}
      {includeCv && (
        <a
          href="/resume.pdf"
          download="Sinan-Alekar-CV.pdf"
          aria-label="Download original résumé"
          title="Download CV"
        >
          <SocialIcon name="CV" />
          <span className="social-tooltip">Download CV</span>
        </a>
      )}
    </div>
  );
}
