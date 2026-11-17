import Link from "next/link";
import { links } from "./data";
import { Arrow, Mark } from "./icons";

export default function Profile() {
  return (
    <aside className="profile-panel" aria-label="Profile">
      <Link className="profile-name" href="/" aria-label="Sinan Alekar home">
        <span className="brand-mark">
          <Mark />
        </span>
        <span>
          Sinan
          <br />
          Alekar<span className="name-period">.</span>
        </span>
      </Link>
      <div className="profile-art" aria-label="SA monogram">
        <span className="monogram">
          <Mark />
        </span>
        <span className="art-caption">CURIOSITY → CLARITY</span>
        <span className="art-index">SA / 01</span>
      </div>
      <div className="profile-details">
        <div>
          <span className="micro">A little about me</span>
          <p>
            Independent security <br />
            researcher & student.
          </p>
        </div>
        <div>
          <span className="micro">Based in</span>
          <p>
            India <span className="muted">· Remote</span>
          </p>
        </div>
      </div>
      <Link className="mobile-contact text-link" href="/contact">
        Get in touch <Arrow diagonal />
      </Link>
      <div className="profile-bottom">
        <div className="profile-links">
          <a href={links.github}>
            GitHub <Arrow diagonal />
          </a>
          <a href={links.linkedin}>
            LinkedIn <Arrow diagonal />
          </a>
        </div>
        <Link className="button primary" href="/contact">
          Let’s work together <Arrow diagonal />
        </Link>
      </div>
    </aside>
  );
}
