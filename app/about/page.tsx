import Link from "next/link";
export const metadata = { title: "About" };
export default function About() {
  return (
    <article className="reading">
      <div className="page-intro">
        <p className="eyebrow">A little about me</p>
        <h1>
          Curiosity is
          <br />
          the starting point.
        </h1>
        <p>
          I’m Sinan Anwar Alekar, an independent security researcher and student
          based in India. I build Python tools and web apps to explore how
          systems work.
        </p>
      </div>
      <div className="about-principles">
        <span>Ask clear questions</span>
        <span>Test assumptions</span>
        <span>Document the limits</span>
      </div>
      <section>
        <h2>Research interests</h2>
        <p>
          I’m interested in application authorization, browser and Android
          security, and tool permissions in AI systems. I work through
          controlled experiments and keep observations separate from
          conclusions. The Library contains public software and general methods
          notes.
        </p>
      </section>
      <section>
        <h2>Research reporting</h2>
        <p>
          I’ve reported reproducible bugs to Apple and a Xiaomi bug through
          HackerOne. My research history distinguishes my own status updates
          from publicly acknowledged outcomes.{" "}
          <Link className="text-link" href="/research">
            Read the history ↗
          </Link>
        </p>
      </section>
      <section>
        <h2>Education</h2>
        <p>
          I’m pursuing a BS–MS in Artificial Intelligence and Cybersecurity at
          IIT Patna and a B.Tech in Computer Engineering. My earlier education
          includes HSC Science at Bal Sanskar Vidya Mandir and SSC at Samarth
          Ramdas Vidyalaya in the Mahad area.
        </p>
      </section>
      <section>
        <h2>Freelance work</h2>
        <p>
          My freelance work has involved remote technical support, online
          research, and writing support documentation for Windows, Android, and
          web application issues.
        </p>
      </section>
      <section>
        <h2>What’s next</h2>
        <p>
          I’m open to remote internships and early-career roles in security, AI,
          and software engineering. I’m especially interested in opportunities
          to build useful tools and learn through careful technical work.
        </p>
      </section>
      <Link className="button primary" href="/contact">
        Let’s talk ↗
      </Link>
    </article>
  );
}
