import Catalog from "../catalog";
export const metadata = { title: "Documentation" };
export default function Docs() {
  return <><div className="page-intro"><p className="eyebrow">Portfolio / Docs</p><h1>Documentation</h1><p>Read how the public project handles permissions, task state and evidence.</p></div><Catalog mode="docs" /></>;
}
