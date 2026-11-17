import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { links } from "./data";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sinan-alekar.vercel.app"),
  title: { default: "Sinan Anwar Alekar · Research Portfolio", template: "%s · Sinan Alekar" },
  description: "Independent security research, student projects and documentation by Sinan Anwar Alekar.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <header className="top"><div className="shell top-inner">
          <Link className="brand" href="/"><span aria-hidden="true">S</span> Sinan Alekar</Link>
          <nav aria-label="Primary">
            <Link href="/library">Library</Link><Link href="/docs">Docs</Link>
            <Link href="/about">About</Link><Link href="/resume">Résumé</Link>
          </nav>
        </div></header>
        <main id="main" className="shell">{children}</main>
        <footer className="shell footer"><span>Sinan Anwar Alekar · India</span><nav aria-label="Elsewhere">
          <a href={links.github}>GitHub ↗</a><a href={links.linkedin}>LinkedIn ↗</a><Link href="/contact">Contact</Link>
        </nav></footer>
      </body>
    </html>
  );
}
