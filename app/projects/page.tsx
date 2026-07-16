import type { Metadata } from "next";
import { projects } from "../data";
import { ProjectCard } from "../ui";

export const metadata: Metadata = { title: "Projects", description: "Verified full-stack, AI-assisted and cybersecurity projects by Sinan Alekar." };
export default function Projects(){return <><section className="page-hero"><div className="shell"><span className="eyebrow">Selected projects</span><h1>Cross-platform products, built end to end.</h1><p>Every feature and technology below is grounded in the current resume, repository code or deployment configuration. Project details are now publicly available.</p></div></section><section className="section"><div className="shell full-projects"><ProjectCard project={projects[0]}/><ProjectCard project={projects[1]} image="/ixx-preview.jpg"/></div></section></>}
