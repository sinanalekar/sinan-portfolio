import Catalog from "../catalog";
import ResearchExplorer from "../research-explorer";
export const metadata = { title: "Research library" };
export default function Library() {
  return (
    <>
      <div className="page-intro library-intro">
        <p className="eyebrow">
          The research library / Systems, methods & working notes
        </p>
        <h1>
          Questions, tools,
          <br />
          and the work between.
        </h1>
        <p>
          Explore CYR@, SEEK, VERITAS, HYDRA, and CYRA. Public code sits
          alongside carefully scoped summaries of private research, with notes
          on the methods behind it.
        </p>
        <div className="actions">
          <a className="text-link" href="#library-catalog">
            Search the collection <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <ResearchExplorer />
      <Catalog />
    </>
  );
}
