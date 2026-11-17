import Catalog from "../catalog";
export const metadata = { title: "Projects" };
export default function Projects() {
  return (
    <>
      <div className="page-intro">
        <p className="eyebrow">Independent projects / Selected work</p>
        <h1>
          Different questions.
          <br />
          Working answers.
        </h1>
        <p>
          Five projects in a suggested reading order: research tooling, civic
          applications, this portfolio, and a legacy learning app. Each write-up
          explains what’s public and what you can inspect.
        </p>
      </div>
      <Catalog mode="projects" />
    </>
  );
}
