import { redirect } from "next/navigation";
import { entries } from "../../../data";
export default async function LegacyProject({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = entries.find(
    (entry) => entry.slug === slug && entry.kind === "Project",
  );
  redirect(project ? `/library/${project.slug}` : "/projects");
}
