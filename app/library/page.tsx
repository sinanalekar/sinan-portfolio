import Link from "next/link";
import Catalog from "../catalog";
import { rankedProjects } from "../data";
export const metadata = { title: "Library" };
export default function Library() {
  return (
    <>
      <div className="page-intro library-intro">
        <p className="eyebrow">The collection / Code, ideas & working notes</p>
        <h1>
          A closer look
          <br />
          at the work.
        </h1>
        <p>
          Public projects, architecture notes, and research methods. Search by
          topic or tool, or start with the recommended reading order below.
        </p>
      </div>
      <details className="library-picks">
        <summary>
          <span>
            <span className="micro">A SUGGESTED STARTING POINT</span>
            <strong>Why this reading order?</strong>
          </span>
          <span className="picks-toggle" aria-hidden="true">
            ＋
          </span>
        </summary>
        <div className="picks-intro">
          <span className="micro">START HERE</span>
          <p>
            A curated reading order, based on implementation depth and available
            public source.
          </p>
        </div>
        <div className="picks-list">
          {rankedProjects.slice(0, 3).map((entry) => (
            <Link href={`/library/${entry.slug}`} key={entry.slug}>
              <span className="pick-rank">0{entry.rank}</span>
              <div>
                <h2>{entry.title}</h2>
                <p>{entry.rankReason}</p>
              </div>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </details>
      <Catalog />
    </>
  );
}
