import Link from "next/link";
import { notFound } from "next/navigation";
import { entries, links } from "../../data";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return entries.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const entry = entries.find(item => item.slug === slug);
  return entry ? { title: entry.title, description: entry.summary } : {};
}

export default async function LibraryEntry({ params }: Props) {
  const { slug } = await params;
  const entry = entries.find(item => item.slug === slug);
  if (!entry) notFound();
  return <article className="reading">
    <Link className="back" href="/library">← Library</Link>
    <div className="page-intro"><p className="eyebrow">{entry.kind} / {entry.topic}</p><h1>{entry.title}</h1><p>{entry.summary}</p></div>
    {entry.sections.map(([title, copy]) => <section key={title}><h2>{title}</h2><p>{copy}</p></section>)}
    {entry.kind !== "Note" && <a className="button" href={links.cyr}>Public source on GitHub ↗</a>}
  </article>;
}
