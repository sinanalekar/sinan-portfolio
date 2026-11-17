import Catalog from "../catalog";
export const metadata = { title: "Documentation" };
export default function Docs() {
  return (
    <>
      <div className="page-intro">
        <p className="eyebrow">Behind the implementation / Docs</p>
        <h1>
          Small decisions.
          <br />
          Visible reasoning.
        </h1>
        <p>
          Read the implementation notes: tool permissions, task recovery,
          triage, participant consent, and evidence records. Each note links to
          its public source.
        </p>
      </div>
      <Catalog mode="docs" />
    </>
  );
}
