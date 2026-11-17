import ContactForm from "./ContactForm";
import SocialLinks from "../social-links";
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
      <SocialLinks variant="cards" />
      <ContactForm />
    </article>
  );
}
