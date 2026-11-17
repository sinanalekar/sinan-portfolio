import Catalog from "../catalog";
export const metadata = { title: "Documentation" };
export default function Docs() {
  return (
    <>
      <div className="page-intro">
        <p className="eyebrow">Behind the work / Notes & documentation</p>
        <h1>
          Make the method
          <br />
          understandable.
        </h1>
        <p>
          Permissions, checkpoints, state comparisons, experimental controls,
          artifact comparisons, and a portable research protocol.
          Private-project notes explain the method without publishing code or
          findings.
        </p>
      </div>
      <Catalog mode="docs" />
    </>
  );
}
