import { links } from "../data";
import ContactForm from "./ContactForm";
export const metadata = { title: "Contact" };
export default function Contact() {
  return <article className="reading">
    <div className="page-intro"><p className="eyebrow">Portfolio / Contact</p><h1>Contact</h1><p>For remote work, public project questions or research conversations.</p></div>
    <div className="actions"><a className="button" href={links.linkedin}>LinkedIn ↗</a><a className="button" href={links.github}>GitHub ↗</a></div>
    <ContactForm />
  </article>;
}
