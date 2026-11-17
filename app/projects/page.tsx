import Catalog from "../catalog";
export const metadata = { title: "Projects" };
export default function Projects() {
  return <><div className="page-intro"><p className="eyebrow">Portfolio / Projects</p><h1>Selected work</h1><p>Personal projects with public source and documentation.</p></div><Catalog mode="projects" /></>;
}
