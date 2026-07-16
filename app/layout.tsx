import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./ui";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sinan-alekar.vercel.app"),
  title: { default: "Sinan Anwar Alekar | Full-Stack Developer", template: "%s | Sinan Alekar" },
  description: "Portfolio of Sinan Anwar Alekar, a computer engineering student building full-stack, AI-assisted and defensive cybersecurity applications.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: { title: "Sinan Anwar Alekar", description: "Full-Stack Developer · AI & Cybersecurity Enthusiast", images: ["/og.png"], type: "website" },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{__html:"try{document.documentElement.dataset.theme=localStorage.getItem('theme')||'dark'}catch(e){document.documentElement.dataset.theme='dark'}"}} /></head>
      <body className={`${inter.variable} ${mono.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Person",name:"Sinan Anwar Alekar",jobTitle:"Computer Engineering Student and Full-Stack Developer",url:process.env.NEXT_PUBLIC_SITE_URL||"https://sinan-alekar.vercel.app",sameAs:["https://github.com/sinanalekar","https://linkedin.com/in/sinan-alekar-90171825a"],knowsAbout:["Full-stack development","Artificial Intelligence","Defensive Cybersecurity","Android","FastAPI","React","Next.js","Firebase","PostgreSQL"]})}} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
