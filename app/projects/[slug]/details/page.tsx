import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "../../../data";

const external = {
  "sentinental-ix": { live:"https://sentinental-ix.vercel.app", repo:"https://github.com/sinanalekar/Sentinental-Ix", status:"Actively developed MVP", platform:"Web application" },
  "ix-x": { live:"https://ix-zeta.vercel.app/", repo:"https://github.com/sinanalekar/ix", status:"Released · version 1.1.4", platform:"Android · Web · PWA" },
};
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const p=projects.find(x=>x.slug===slug);
  if(!p)return {title:"Project"};
  const image=slug==="sentinental-ix"?"/og-sentinental-ix.png":slug==="ix-x"?"/og-ix-x.png":"/og.png";
  return {
    title:`${p.name} Case Study`,
    description:p.summary,
    openGraph:{title:`${p.name} Case Study`,description:p.summary,images:[image],type:"website"},
    twitter:{card:"summary_large_image",title:`${p.name} Case Study`,description:p.summary,images:[image]},
  };
}
export function generateStaticParams(){return projects.map(({slug})=>({slug}))}
export default async function Details({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=projects.find(x=>x.slug===slug);if(!project||!(slug in external))notFound();const x=external[slug as keyof typeof external];const sent=slug==="sentinental-ix";return <><section className="page-hero"><div className="shell"><span className="eyebrow">Public case study · {x.status}</span><h1>{project.name}</h1><p>{project.summary}</p><div className="actions"><a className="button primary" href={x.live}>Open live product ↗</a><a className="button" href={x.repo}>View GitHub ↗</a></div></div></section><section className="section"><div className="shell case-grid"><article className="case-main"><h2>Product overview</h2><p>{project.detail}</p>{sent?<><div className="metric-grid"><div className="metric"><b>6</b><span>Core operations areas</span></div><div className="metric"><b>CSV</b><span>Inventory workflows</span></div><div className="metric"><b>RBAC</b><span>Access foundation</span></div><div className="metric"><b>CI</b><span>GitHub Actions</span></div></div><h2>Verified capabilities</h2><ul><li>Firebase-backed identity with access-request, role and session-control foundations.</li><li>Asset inventory with manual creation and CSV import/export.</li><li>Vulnerability, alert and incident workflows, including incident timeline activity.</li><li>Audit history, integration status and database-backed dashboard aggregates.</li><li>File hash and metadata analysis; this is not represented as antivirus scanning.</li></ul><h2>Engineering decisions</h2><p>The frontend and FastAPI backend use a same-origin API structure, while SQLAlchemy and Alembic support relational persistence. Modules still in preview—such as report generation and AI copilot behavior—are not claimed here as finished production features.</p></>:<><div className="metric-grid"><div className="metric"><b>47</b><span>Board papers</span></div><div className="metric"><b>1,830</b><span>Previous-year questions</span></div><div className="metric"><b>63</b><span>Formula entries</span></div><div className="metric"><b>10</b><span>Practice papers</span></div></div><h2>Verified capabilities</h2><ul><li>Structured learning workspaces with board papers, PYQs, formulas and predicted practice papers.</li><li>Scanned PDF viewing and download, plus OCR-based image uploads.</li><li>AI-assisted paper evaluation with score history and achievements.</li><li>Firebase Authentication, database-backed access controls and notification preferences.</li><li>Web and Progressive Web App deployment with a consistent cross-platform learning experience.</li></ul><h2>Android release</h2><p>The resume records the Android experience at version 1.1.4, including Firebase Cloud Messaging, native call-style interactions, background handling, duplicate and stale-call protection, diagnostics and in-app update workflows.</p></>}</article><aside className="sidebar"><h3>Project facts</h3><div className="skill-list"><div><b>Status</b><p>{x.status}</p></div><div><b>Platform</b><p>{x.platform}</p></div><div><b>Role</b><p>Independent developer</p></div></div><div className="tags">{project.stack.map(s=><span key={s}>{s}</span>)}</div></aside></div></section></>}
