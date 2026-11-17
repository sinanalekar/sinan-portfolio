import Link from "next/link";
import Catalog from "./catalog";

export default function Home() {
  return <>
    <section className="intro">
      <p className="eyebrow"><span className="dot" /> Independent research portfolio</p>
      <h1>Sinan Anwar Alekar<span>.</span></h1>
      <p className="lede">I study AI and cybersecurity at IIT Patna and build tools for controlled experiments, evidence tracking and application security research.</p>
      <div className="actions"><Link className="primary button" href="/library">Browse the library <span aria-hidden="true">↘</span></Link><Link className="button" href="/about">About me</Link></div>
    </section>
    <Catalog />
  </>;
}
