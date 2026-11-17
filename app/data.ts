export const links = {
  github: "https://github.com/sinanalekar",
  linkedin: "https://www.linkedin.com/in/sinan-anwar-alekar-90171825a/",
  cyr: "https://github.com/sinanalekar/c-ra",
  portfolio: "https://github.com/sinanalekar/sinan-portfolio",
};
// Public source snapshot reviewed for the project notes. No runtime GitHub fetches.
const cyrSource = `${links.cyr}/blob/2dda55e764420a020016c09cd4d3e04ad981993e`;
const portfolioSource = `${links.portfolio}/blob/ef34463`;
export const entries = [
  {
    slug: "cyr",
    topic: "AI tooling",
    kind: "Project",
    color: "lavender",
    title: "CYR@",
    summary:
      "A local desktop workspace that brings research tasks, tool permissions, and task records into one place.",
    sections: [
      [
        "What I built",
        "CYR@ is my independent software project for authorized security research. I built a Tauri and React desktop shell around a local Python backend using FastAPI. The public architecture connects the interface to a coordinator, tool runtimes, and task records over loopback HTTP.",
      ],
      [
        "How it works",
        "The coordinator routes work through a central permission layer. The public design includes grants for a single action, a task, a workspace, or a session. Task state and checkpoints are persisted so an interrupted session can be recovered; the journal records actions and decisions.",
      ],
      [
        "What to inspect",
        "Start with the README’s architecture and setup instructions. The capabilities module shows how grants are checked, the tasks module contains persistence and recovery logic, and the UI directory contains the desktop interface. The links below point to the source version used for this write-up.",
      ],
      [
        "Scope and limits",
        "This is a description of the public implementation, not a claim that the system has been independently audited or that every engine is available in every installation. Platform requirements, unavailable tools, and configuration are documented upstream. No vulnerability reports or research target details are included here.",
      ],
    ],
    sources: [
      ["README and architecture", `${cyrSource}/README.md`],
      ["Permission implementation", `${cyrSource}/environment/capabilities.py`],
      ["Task state and recovery", `${cyrSource}/environment/tasks.py`],
    ],
  },
  {
    slug: "portfolio",
    topic: "Engineering",
    kind: "Project",
    color: "blue",
    title: "Research portfolio",
    summary:
      "A Next.js web app with a searchable Library, shared documentation, and a web résumé.",
    sections: [
      [
        "What I built",
        "This portfolio brings my public projects and notes into one small web app. It uses Next.js, React, and TypeScript, with a shared catalog for the Library, documentation listing, article pages, and sitemap.",
      ],
      [
        "How it works",
        "Visitors can search the catalog and narrow it by topic. Each entry has a stable URL. The documentation view selects the supporting notes from that same catalog, keeping the article content in one place.",
      ],
      [
        "What to inspect",
        "The public repository contains the route structure, catalog filtering, shared content, and validation checks. It also includes a contact endpoint that validates a message and prepares an email link rather than storing the visitor’s message.",
      ],
    ],
    sources: [
      ["Portfolio source", links.portfolio],
      ["Catalog and filters", `${portfolioSource}/app/catalog.tsx`],
      ["Content model", `${portfolioSource}/app/data.ts`],
    ],
  },
  {
    slug: "permissions",
    topic: "Security",
    kind: "Documentation",
    color: "mint",
    title: "Tool permissions",
    summary:
      "How CYR@ separates a permission decision from the action a tool performs.",
    sections: [
      [
        "Default behavior",
        "CYR@ uses a deny-by-default design for sensitive tools. Its public documentation describes grants scoped to a single action, task, workspace, or session. The central capabilities module is the place to inspect how those decisions are represented.",
      ],
      [
        "Reviewing a decision",
        "A useful permission record identifies the tool, the scope granted, and how long it applies. In the public design, high-risk operations also require per-operation confirmation. These records help a reviewer understand what was allowed during a task.",
      ],
      [
        "Read alongside the source",
        "This is an architecture note rather than a security assurance. Review the implementation and its tests before relying on a permission boundary in a particular environment.",
      ],
    ],
    sources: [
      [
        "Capabilities documentation",
        `${cyrSource}/README.md#capabilities-and-authorization`,
      ],
      ["Capabilities module", `${cyrSource}/environment/capabilities.py`],
    ],
  },
  {
    slug: "checkpoints",
    topic: "Engineering",
    kind: "Documentation",
    color: "blue",
    title: "Task checkpoints",
    summary:
      "Keeping task progress understandable when a local research session is interrupted.",
    sections: [
      [
        "Continuity",
        "The CYR@ README documents durable tasks, checkpoints, and restart recovery. The task module persists state and marks interrupted tasks as recovering when the application starts again.",
      ],
      [
        "What to keep",
        "Keep the current task state and its supporting records distinguishable. When reading a recovered task, identify which steps were completed and which are still pending. A checkpoint is a record of progress, not proof that a conclusion is correct.",
      ],
      [
        "Inspect the implementation",
        "The linked task module contains the public state and persistence code. The README describes how the recovery behavior fits into the wider application.",
      ],
    ],
    sources: [
      [
        "Tasks and recovery documentation",
        `${cyrSource}/README.md#tasks-agents-and-recovery`,
      ],
      ["Tasks module", `${cyrSource}/environment/tasks.py`],
    ],
  },
  {
    slug: "evidence",
    topic: "Research methods",
    kind: "Note",
    color: "butter",
    title: "Writing a useful evidence record",
    summary:
      "A short checklist for recording an observation, a control, and the limits of a conclusion.",
    sections: [
      [
        "State the question",
        "Write down what you expect to observe and the conditions you are comparing. Describe the observation with enough context to interpret it later.",
      ],
      [
        "Include the control",
        "Use a comparison that should produce no change. Report what happened in both cases, including negative or inconclusive results.",
      ],
      [
        "Record the limits",
        "Distinguish the observed result from your interpretation. Note the conditions you actually checked and questions that remain open. This is a general methods note; it does not describe a vulnerability finding.",
      ],
    ],
    sources: [["Original public note", `${portfolioSource}/app/data.ts`]],
  },
] as const;
