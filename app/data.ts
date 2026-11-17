export const links = {
  github: "https://github.com/sinanalekar",
  linkedin: "https://www.linkedin.com/in/sinan-anwar-alekar-90171825a/",
  cyr: "https://github.com/sinanalekar/c-ra",
  portfolio: "https://github.com/sinanalekar/sinan-portfolio",
};
// Public source snapshot reviewed for the project notes. No runtime GitHub fetches.
const cyrSource = `${links.cyr}/blob/2dda55e764420a020016c09cd4d3e04ad981993e`;
const portfolioSource = `${links.portfolio}/blob/ef34463`;
export type LibraryEntry = {
  slug: string;
  topic: string;
  kind: "Project" | "Documentation" | "Note";
  color: string;
  title: string;
  summary: string;
  rank?: number;
  rankReason?: string;
  status?: "Current" | "Legacy";
  stack?: readonly string[];
  sections: readonly (readonly [string, string])[];
  sources: readonly (readonly [string, string])[];
};
const disastersSource =
  "https://github.com/sinanalekar/disasters-platform/blob/38c236b0cc59f976260d0153edbf2a505a5619c9";
const mahadSource =
  "https://github.com/sinanalekar/mahad-professional-education/blob/f13a53d904a402b7fd0ac7d1557e6eea6cb8d8c7";
const profileSource =
  "https://github.com/sinanalekar/sinanalekar/blob/66004605c3a6aafce91500fbd165fc2cf5065020/README.md";
export const entries: readonly LibraryEntry[] = [
  {
    slug: "cyr",
    rank: 1,
    status: "Current",
    stack: ["Python", "FastAPI", "React", "Tauri"],
    rankReason:
      "Start with the research workspace: the broadest view of my Python tooling and permission design.",
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
    rank: 4,
    status: "Current",
    stack: ["Next.js", "React", "TypeScript"],
    rankReason:
      "A smaller, inspectable web application with a shared content model.",
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
    slug: "disasters",
    rank: 2,
    status: "Current",
    stack: ["Next.js", "TypeScript", "Firebase", "Capacitor"],
    rankReason:
      "A full product workflow, from a citizen report to a human-reviewed operations queue.",
    topic: "Web apps",
    kind: "Project",
    color: "mint",
    title: "Disasters",
    summary:
      "An emergency and civic-issue reporting app with triage, configurable routing, and incident tracking.",
    sections: [
      [
        "What I built",
        "I built a web/PWA reporting interface, an authority operations dashboard, and an Android wrapper. The public project supports descriptions, media, location, incident status, and messaging around a shared report.",
      ],
      [
        "How it works",
        "The repository uses Firebase Authentication and Firestore, a Next.js web app, and Capacitor for Android. Triage can use a configured model provider or a deterministic rules fallback. The rules implementation shows how category and priority suggestions are derived and when human review is required.",
      ],
      [
        "Where the boundary sits",
        "This is a software project, not an emergency-response service or proof of adoption by an authority. Agency routing depends on configured, supported endpoints. The public README directs life-threatening emergencies to India’s 112 service.",
      ],
      [
        "What to inspect",
        "Read the README for the application boundaries, then inspect the triage function and its tests. The repository also contains the reporting, authority, admin, and Android application code. No incident records are reproduced here.",
      ],
    ],
    sources: [
      ["Project README", `${disastersSource}/README.md`],
      ["Triage implementation", `${disastersSource}/src/lib/triage.ts`],
      ["Triage tests", `${disastersSource}/src/lib/triage.test.ts`],
    ],
  },
  {
    slug: "mahad-education",
    rank: 3,
    status: "Current",
    stack: ["Next.js", "TypeScript", "Firebase"],
    rankReason:
      "A focused civic application with an explicit participant-consent and submission model.",
    topic: "Web apps",
    kind: "Project",
    color: "butter",
    title: "Mahad education initiative",
    summary:
      "A civic participation platform for a request to assess a government engineering or medical institution in Mahad.",
    sections: [
      [
        "What I built",
        "I built a Next.js platform around a citizen-led request for a feasibility assessment in Mahad Taluka. The application brings email verification, the proposed representation, consent, and submission into a single participant flow.",
      ],
      [
        "Participant control",
        "The public README describes a participant seeing the subject, recipients, and message before recording explicit consents. A server-side authenticated endpoint handles submission. Duplicate active email participation is rejected, and provider limits leave messages queued.",
      ],
      [
        "Scope",
        "The application supports a public request for assessment. It does not establish that an institution has been approved, that an authority supports the proposal, or that a particular number of people have participated. The repository explicitly avoids seeded supporter counts and responses.",
      ],
      [
        "What to inspect",
        "The representation module shows the proposed message and how participant fields enter it. The README documents the integrity model, deployment requirements, and delivery queue. No participant data is included in this case study.",
      ],
    ],
    sources: [
      ["Project README", `${mahadSource}/README.md`],
      ["Representation builder", `${mahadSource}/src/lib/representation.ts`],
      ["Representation tests", `${mahadSource}/src/lib/representation.test.ts`],
    ],
  },
  {
    slug: "ix-x",
    rank: 5,
    status: "Legacy",
    stack: ["React", "TypeScript", "Firebase", "Android"],
    rankReason:
      "A legacy learning app, retained for context after the current public-source projects.",
    topic: "Web apps",
    kind: "Project",
    color: "lavender",
    title: "IX:X",
    summary:
      "A legacy Android, web, and PWA learning app with study guidance, authentication, and notifications.",
    sections: [
      [
        "The earlier project",
        "IX:X is my legacy cross-platform learning application. My public GitHub profile describes Android, web, and PWA delivery, Firebase-based authentication and data, AI-assisted study guidance, role-restricted workflows, and notifications.",
      ],
      [
        "What it represents",
        "The project brought together application interfaces, account access, and Android notification behavior. It is included here as an earlier independent project rather than a current service or company role.",
      ],
      [
        "What a visitor can inspect",
        "The public project profile is the source for this summary. A public application URL is also listed there, but availability and current behavior can change. This case study does not expose or link to private source code, and does not claim a maintained release or a security audit.",
      ],
    ],
    sources: [
      ["Public project profile", `${profileSource}#featured-projects`],
      ["Previously published application", "https://ix-zeta.vercel.app"],
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
    slug: "incident-triage",
    topic: "Engineering",
    kind: "Documentation",
    color: "mint",
    title: "Triage with a human decision point",
    summary:
      "Inside the deterministic fallback that suggests category and urgency for a report.",
    sections: [
      [
        "The fallback",
        "The Disasters rules module compares a report description with category keyword groups. It uses those matches to suggest a category and priority, with an additional urgency adjustment for danger language.",
      ],
      [
        "Human review",
        "The implementation marks a result for human review when confidence is below its threshold or the priority is critical. A suggestion helps route a report; it is not a substitute for an emergency responder’s decision.",
      ],
      [
        "Inspect a small function",
        "The public triage function and its tests make this a useful small piece of code to review independently of the full application. Read the tests alongside the implementation to understand its boundaries.",
      ],
    ],
    sources: [
      ["Rules implementation", `${disastersSource}/src/lib/triage.ts`],
      ["Rules tests", `${disastersSource}/src/lib/triage.test.ts`],
    ],
  },
  {
    slug: "participant-consent",
    topic: "Engineering",
    kind: "Documentation",
    color: "butter",
    title: "Consent before submission",
    summary:
      "Making a participant’s proposed civic message visible before they choose to submit it.",
    sections: [
      [
        "Show the representation",
        "The Mahad project’s integrity model starts with an email-verified participant seeing the exact subject, recipients, and message. The public representation builder shows how the message is composed.",
      ],
      [
        "Keep submission explicit",
        "The README describes explicit consents and a server-side authenticated submission endpoint. Delivery limits keep a message queued rather than bypassing provider controls.",
      ],
      [
        "Keep the scope honest",
        "The platform makes a request for assessment; it does not promise approval or manufacture participation statistics. Public empty states and zero counts are intentional in the source design.",
      ],
    ],
    sources: [
      ["Integrity model", `${mahadSource}/README.md#integrity-model`],
      ["Representation source", `${mahadSource}/src/lib/representation.ts`],
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
];

export const rankedProjects = entries
  .filter((entry) => entry.kind === "Project")
  .toSorted((a, b) => (a.rank ?? 99) - (b.rank ?? 99));
