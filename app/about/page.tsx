import Link from "next/link";
export const metadata = { title: "About" };
export default function About() {
  return <article className="reading">
    <div className="page-intro"><p className="eyebrow">Portfolio / About</p><h1>About me</h1><p>I’m Sinan Anwar Alekar, an independent security researcher and student based in India.</p></div>
    <section><h2>Research</h2><p>I’m interested in application authorization, browser and Android security, and tool permissions in AI systems. My independent work includes coordinated disclosure and Python tooling for reproducible experiments.</p></section>
    <section><h2>Education</h2><p>I’m pursuing a BS–MS in Artificial Intelligence and Cybersecurity at IIT Patna and a B.Tech in Computer Engineering.</p></section>
    <section><h2>Work interests</h2><p>I’m open to fully remote internships and early-career roles in security, AI and software engineering from India.</p></section>
    <Link className="button" href="/contact">Get in touch</Link>
  </article>;
}
