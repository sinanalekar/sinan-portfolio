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
          Connected methods.
        </h1>
        <p>
          Research systems, web applications, and a legacy learning app. The
          reading order starts with the research workspace; each overview
          identifies whether its source is public or its implementation remains
          private.
        </p>
      </div>
      <Catalog mode="projects" />
    </>
  );
}
