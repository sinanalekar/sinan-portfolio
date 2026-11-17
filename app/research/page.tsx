import Link from "next/link";
import { researchHistory } from "../background";
export const metadata = {
  title: "Research history",
  description:
    "A high-level record of Sinan Alekar’s reported security research. Technical report details remain private.",
};
export default function Research() {
  return (
    <article className="research-page">
      <div className="page-intro">
        <p className="eyebrow">Independent research / Disclosure history</p>
        <h1>
          Careful reports.
          <br />
          Open questions.
        </h1>
        <p>
          A high-level record of my security reporting. I focus on reproducible
          observations, clear evidence, and following up through the appropriate
          reporting channel.
        </p>
      </div>
      <div className="research-provenance">
        <span className="status-dot" aria-hidden="true" />
        <p>
          Researcher-reported statuses. These summaries come from my supplied CV
          and status updates; public vendor acknowledgements are not linked.
        </p>
        <a className="text-link" href="/resume.pdf">
          Read the source CV ↗
        </a>
      </div>
      <div className="research-history">
        {researchHistory.map((item, index) => (
          <section key={item.id} id={item.id}>
            <div className="research-heading">
              <span className="micro">
                0{index + 1} / {item.channel}
              </span>
              <span className="research-status">{item.status}</span>
            </div>
            <h2>{item.vendor}</h2>
            <p>{item.summary}</p>
            <details>
              <summary>
                Disclosure scope <span aria-hidden="true">＋</span>
              </summary>
              <p>{item.scope}</p>
            </details>
          </section>
        ))}
      </div>
      <div className="research-method">
        <span className="micro">THE METHOD</span>
        <h2>
          Reproduce. Record.
          <br />
          Review the limits.
        </h2>
        <p>
          Useful reports make the observation understandable, include a control,
          and separate a reproducible behavior from a conclusion about its
          impact.
        </p>
        <Link className="text-link" href="/library/evidence">
          Read my evidence checklist ↗
        </Link>
      </div>
    </article>
  );
}
