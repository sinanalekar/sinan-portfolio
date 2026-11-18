import ContactForm from "./ContactForm";
import SocialLinks from "../social-links";
import CopyEmail from "../copy-email";
import { person } from "../profile-content";
export const metadata = { title: "Contact" };
export default function Contact() {
  return (
    <article className="reading contact-page">
      <div className="page-intro">
        <p className="eyebrow">Let’s start a conversation / Contact</p>
        <h1>
          A question, an idea,
          <br />
          or a hello.
        </h1>
        <p>
          For project conversations, remote opportunities, and questions about
          the public work. Find me on these profiles or prepare an email below.
        </p>
      </div>
      <section className="direct-contact" aria-labelledby="direct-email-title">
        <div>
          <p className="eyebrow" id="direct-email-title">
            Direct email
          </p>
          <a className="email-address" href={`mailto:${person.email}`}>
            {person.email}
          </a>
          <p>
            Open your email app, or copy the address and write from your inbox.
          </p>
        </div>
        <CopyEmail />
      </section>
      <SocialLinks variant="cards" />
      <ContactForm />
    </article>
  );
}
