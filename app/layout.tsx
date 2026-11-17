import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";
import "./profile.css";
import "./interactions.css";
import "./navigation.css";
import SocialLinks from "./social-links";
import Profile from "./profile";
import Navigation from "./navigation";
import Motion from "./motion";
import ReadingProgress from "./reading-progress";
import PressFeedback from "./press-feedback";

const sans = localFont({
  src: [
    {
      path: "../public/fonts/dm-sans-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/dm-sans-semibold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});
const display = localFont({
  src: "../public/fonts/syne-semibold.ttf",
  weight: "600",
  variable: "--font-display",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://sinan-alekar.vercel.app",
  ),
  title: {
    default: "Sinan Alekar — Security research & software",
    template: "%s · Sinan Alekar",
  },
  description:
    "Independent security researcher and student building Python tools and web apps. Explore public projects, architecture notes and research methods.",
  icons: {
    icon: [{ url: "/brand-logo.jpg", type: "image/jpeg" }],
    apple: "/brand-logo.jpg",
  },
  openGraph: {
    type: "website",
    siteName: "Sinan Alekar",
    title: "Sinan Alekar — Security research & software",
    description:
      "Independent security researcher and student. Python tooling, web apps and public research notes.",
    images: [
      {
        url: "/brand-logo.jpg",
        width: 1254,
        height: 1254,
        alt: "@lk.Sinan logo",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{const t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='dark'?'dark':'light'}catch{}",
          }}
        />
      </head>
      <body className={`${sans.variable} ${display.variable}`}>
        <Motion />
        <ReadingProgress />
        <PressFeedback />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <div className="site-shell">
          <Profile />
          <div className="main-column">
            <Navigation />
            <main id="main" tabIndex={-1}>
              {children}
            </main>
            <footer className="footer">
              <span>
                Sinan Anwar Alekar
                <br />
                <span className="muted">
                  Research, code, and a curious mind.
                </span>
              </span>
              <nav aria-label="Footer">
                <SocialLinks variant="footer" />
                <Link href="/contact">Contact ↗</Link>
                <Link href="/research">Research ↗</Link>
                <a href="#main">Back to top ↑</a>
              </nav>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
