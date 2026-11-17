import Link from "next/link";
import { notFound } from "next/navigation";
import { entries } from "../../data";
import ProjectPreview from "../../project-preview";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return entries.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const entry = entries.find((item) => item.slug === slug);
  return entry ? { title: entry.title, description: entry.summary } : {};
}
export default async function LibraryEntry({ params }: Props) {
  const { slug } = await params;
  const entry = entries.find((item) => item.slug === slug);
  if (!entry) notFound();
  return (
    <article className="reading">
      <Link className="back" href="/library">
        ← Back to the Library
      </Link>
      <div className="page-intro">
        <p className="eyebrow">
          {entry.kind} / {entry.topic}
        </p>
        <span className="access-badge article-access">{entry.visibility}</span>
        <h1>{entry.title}</h1>
        {entry.status === "Legacy" && (
          <span className="legacy-badge article-legacy">Legacy project</span>
        )}
        <p>{entry.summary}</p>
      </div>
      {entry.stack && (
        <ul className="project-stack" aria-label="Technologies">
          {entry.stack.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      )}
      {entry.rankReason && (
        <p className="rank-context">
          <span className="micro">READING ORDER / 0{entry.rank}</span>
          {entry.rankReason}
        </p>
      )}
      {entry.slug === "cyr" && <ProjectPreview compact />}
      {entry.sections.map(([title, copy]) => (
        <section key={title}>
          <h2>{title}</h2>
          <p>{copy}</p>
        </section>
      ))}
      <div className="source-list">
        <h2 className="micro">FURTHER READING</h2>
        <ul>
          {entry.sources.map(([label, url]) => (
            <li key={url}>
              <a href={url}>{label} ↗</a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
