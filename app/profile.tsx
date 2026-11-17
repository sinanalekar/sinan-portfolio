"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Arrow } from "./icons";
import SocialLinks from "./social-links";
export default function Profile() {
  const path = usePathname();
  const [choice, setChoice] = useState<{
    path: string;
    expanded: boolean;
  } | null>(null);
  const expanded = choice?.path === path ? choice.expanded : path === "/";
  return (
    <aside
      className="profile-panel profile-card"
      data-expanded={expanded}
      aria-label="Profile"
    >
      <div className="profile-card-heading">
        <Link className="profile-name" href="/" aria-label="Sinan Alekar home">
          <span className="brand-mark">
            <Image
              src="/brand-logo.jpg"
              alt="@lk.Sinan logo"
              width={1254}
              height={1254}
              priority
              sizes="80px"
            />
          </span>
          <span>
            Sinan
            <br />
            Alekar<span className="name-period">.</span>
          </span>
        </Link>
        <button
          className="profile-expand"
          type="button"
          aria-expanded={expanded}
          aria-controls="profile-card-details"
          aria-label={expanded ? "Minimize profile" : "Expand profile"}
          onClick={() => setChoice({ path, expanded: !expanded })}
        >
          <span aria-hidden="true">{expanded ? "−" : "＋"}</span>
        </button>
      </div>
      <div className="profile-portrait">
        <Image
          src="/profile-illustration.png"
          alt="Stylized male student with curly dark hair working at a laptop"
          width={1254}
          height={1254}
          priority
          sizes={
            expanded
              ? "(max-width: 760px) 340px, 260px"
              : "(max-width: 760px) 70px, 260px"
          }
        />
        <span className="portrait-caption">CURIOUS BY DEFAULT</span>
      </div>
      <div id="profile-card-details" className="profile-details">
        <div className="specialization">
          <span className="micro">Specialization:</span>
          <p>
            Security research <br />& Python / AI tooling
          </p>
          <span className="profile-student">
            Independent researcher · Student
          </span>
        </div>
        <div className="profile-based">
          <span className="micro">Based in:</span>
          <p>
            India <span className="muted">· Remote</span>
          </p>
        </div>
      </div>
      <div className="profile-bottom">
        <SocialLinks includeCv />
        <Link className="button primary" href="/contact">
          Let’s work together <Arrow diagonal />
        </Link>
      </div>
    </aside>
  );
}
