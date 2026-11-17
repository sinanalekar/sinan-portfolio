export const links = {
  github: "https://github.com/sinanalekar",
  linkedin: "https://www.linkedin.com/in/sinan-anwar-alekar-90171825a/",
  cyr: "https://github.com/sinanalekar/c-ra",
  portfolio: "https://github.com/sinanalekar/sinan-portfolio",
};
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
  collection: "Research" | "Applications";
  visibility: "Public source" | "Private research" | "Public summary";
  focus?: string;
  input?: string;
  output?: string;
  boundary?: string;
  sections: readonly (readonly [string, string])[];
  sources: readonly (readonly [string, string])[];
};
// Summaries only. Private code, research artifacts, and report details are not included.
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
      [
        "README and architecture",
        "https://github.com/sinanalekar/c-ra/blob/2dda55e764420a020016c09cd4d3e04ad981993e/README.md",
      ],
      [
        "Permission implementation",
        "https://github.com/sinanalekar/c-ra/blob/2dda55e764420a020016c09cd4d3e04ad981993e/environment/capabilities.py",
      ],
      [
        "Task state and recovery",
        "https://github.com/sinanalekar/c-ra/blob/2dda55e764420a020016c09cd4d3e04ad981993e/environment/tasks.py",
      ],
    ],
    collection: "Research",
    visibility: "Public source",
    focus: "Desktop research orchestration",
    input: "Scoped research tasks",
    output: "Coordinated tools, task state, and research records",
    boundary: "Available integrations depend on local configuration.",
  },
  {
    kind: "Project",
    color: "lavender",
    status: "Current",
    collection: "Research",
    visibility: "Private research",
    stack: ["Python"],
    sources: [
      ["Original CV", "/resume.pdf"],
      [
        "Public integration overview",
        "https://github.com/sinanalekar/c-ra/blob/2dda55e764420a020016c09cd4d3e04ad981993e/README.md",
      ],
    ],
    slug: "seek",
    title: "SEEK",
    rank: 2,
    topic: "Security",
    summary:
      "A private research engine for modelling authorization state and comparing controlled behavior.",
    rankReason:
      "Follow the workspace with the engine that asks who gained access, under which conditions, and why.",
    focus: "Security-state analysis",
    input: "Authorized behavioral observations",
    output: "State comparisons and evidence records",
    boundary:
      "Observations must be checked against controls and authorization context.",
    sections: [
      [
        "What I built",
        "SEEK is a private Python research engine for understanding how actions change security state. It models relationships between principals, capabilities, resources, and the authority behind an action.",
      ],
      [
        "How the research is organised",
        "The architecture records observations, compares state transitions, and plans counterfactual experiments in which one condition changes. Evidence review remains separate from model-generated suggestions.",
      ],
      [
        "What this overview covers",
        "This page describes the project’s purpose and design at a high level. The repository, internal experiments, results, and vulnerability material remain private.",
      ],
      [
        "Related reading",
        "The linked state-comparison note explains the general method without including source code, targets, or report details.",
      ],
    ],
  },
  {
    kind: "Project",
    color: "lavender",
    status: "Current",
    collection: "Research",
    visibility: "Private research",
    stack: ["Python"],
    sources: [
      ["Original CV", "/resume.pdf"],
      [
        "Public integration overview",
        "https://github.com/sinanalekar/c-ra/blob/2dda55e764420a020016c09cd4d3e04ad981993e/README.md",
      ],
    ],
    slug: "veritas",
    title: "VERITAS",
    rank: 3,
    topic: "Research methods",
    summary:
      "A private framework for hypothesis-led experiments, negative controls, and traceable evidence decisions.",
    rankReason:
      "Next, inspect the validation discipline: how an observation is challenged before a conclusion is made.",
    focus: "Experimental validation",
    input: "A falsifiable hypothesis and scoped experiment",
    output: "A reviewed conclusion with a traceable record",
    boundary:
      "A model suggestion does not substitute for a validated observation.",
    sections: [
      [
        "What I built",
        "VERITAS is a private research framework organised around hypotheses, controlled experiments, and evidence review. The design keeps an experiment’s question, authorisation, observations, challenges, and conclusion connected.",
      ],
      [
        "Challenge before conclusion",
        "Its methodology calls for replication, negative controls, checks for confounding conditions, and minimisation where appropriate. Negative or inconclusive outcomes are useful records rather than successes to be rewritten.",
      ],
      [
        "Provenance and continuity",
        "The project uses tamper-evident records and checkpoints to make research activity reviewable. This overview describes the method rather than publishing implementation details or asserting that every planned capability is complete.",
      ],
      [
        "Disclosure boundary",
        "Source code, internal evaluation results, real-target experiments, and unpublished findings remain confidential. The public CYR@ integration provides context for the project’s role.",
      ],
    ],
  },
  {
    kind: "Project",
    color: "lavender",
    status: "Current",
    collection: "Research",
    visibility: "Private research",
    stack: ["Python"],
    sources: [
      ["Original CV", "/resume.pdf"],
      [
        "Public integration overview",
        "https://github.com/sinanalekar/c-ra/blob/2dda55e764420a020016c09cd4d3e04ad981993e/README.md",
      ],
    ],
    slug: "hydra",
    title: "HYDRA",
    rank: 4,
    topic: "Security",
    summary:
      "Private tooling for Apple software-artifact inspection, binary comparisons, and careful research-lead triage.",
    rankReason:
      "Explore the specialised artifact workflow after the general state-analysis and validation methods.",
    focus: "Artifact and binary research",
    input: "Authorized software artifacts",
    output: "Comparisons and prioritised research leads",
    boundary:
      "A changed artifact is a research lead, not proof of a vulnerability.",
    sections: [
      [
        "What I built",
        "HYDRA is a private Python project for inspecting Apple software artifacts and comparing binary structure across versions. It helps organise research leads and their supporting observations.",
      ],
      [
        "Where it fits",
        "The workflow separates artifact acquisition, structural modelling, comparison, and subsequent review. A difference in software is treated as a lead to investigate, not as an accepted vulnerability or a claim of exploitability.",
      ],
      [
        "Controls matter",
        "General methods include checking an artifact against itself, keeping comparison inputs consistent, and distinguishing a structural change from an interpretation of its impact.",
      ],
      [
        "Disclosure boundary",
        "This page contains no source code, affected versions, binary locations, candidate inventories, report identifiers, reproduction steps, or unpublished bug details.",
      ],
    ],
  },
  {
    kind: "Project",
    color: "lavender",
    status: "Current",
    collection: "Research",
    visibility: "Private research",
    stack: ["Research methodology", "Agent workflows"],
    sources: [
      ["Original CV", "/resume.pdf"],
      [
        "Public integration overview",
        "https://github.com/sinanalekar/c-ra/blob/2dda55e764420a020016c09cd4d3e04ad981993e/README.md",
      ],
    ],
    slug: "cyra",
    title: "CYRA",
    rank: 5,
    topic: "Research methods",
    summary:
      "A private portable research protocol for agents: scope, falsification, clear evidence, and honest reporting.",
    rankReason:
      "Finish with the portable method that carries the same research discipline across different agent tools.",
    focus: "Portable research methodology",
    input: "A research question and explicit scope",
    output: "A structured, evidence-aware research process",
    boundary:
      "A written protocol is guidance; it does not guarantee an agent’s correctness.",
    sections: [
      [
        "What I built",
        "CYRA is a private portable research skill and methodology document. It describes how an agent should frame a question, respect research scope, seek disconfirming evidence, and report the limits of a result.",
      ],
      [
        "Different from CYR@",
        "CYRA is the portable protocol; CYR@ is the desktop software workspace. They share a concern for explicit authorisation and evidence but serve different roles.",
      ],
      [
        "What this summary covers",
        "The public overview describes the method without reproducing the skill file, private research notes, evaluation data, or findings. It does not claim that written instructions guarantee reliable agent behaviour.",
      ],
    ],
  },
  {
    slug: "portfolio",
    rank: 7,
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
      ["Portfolio source", "https://github.com/sinanalekar/sinan-portfolio"],
      [
        "Catalog and filters",
        "https://github.com/sinanalekar/sinan-portfolio/blob/ef34463/app/catalog.tsx",
      ],
      [
        "Content model",
        "https://github.com/sinanalekar/sinan-portfolio/blob/ef34463/app/data.ts",
      ],
    ],
    collection: "Applications",
    visibility: "Public source",
  },
  {
    slug: "mahad-education",
    rank: 6,
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
      [
        "Project README",
        "https://github.com/sinanalekar/mahad-professional-education/blob/f13a53d904a402b7fd0ac7d1557e6eea6cb8d8c7/README.md",
      ],
      [
        "Representation builder",
        "https://github.com/sinanalekar/mahad-professional-education/blob/f13a53d904a402b7fd0ac7d1557e6eea6cb8d8c7/src/lib/representation.ts",
      ],
      [
        "Representation tests",
        "https://github.com/sinanalekar/mahad-professional-education/blob/f13a53d904a402b7fd0ac7d1557e6eea6cb8d8c7/src/lib/representation.test.ts",
      ],
    ],
    collection: "Applications",
    visibility: "Public source",
  },
  {
    slug: "ix-x",
    rank: 8,
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
      [
        "Public project profile",
        "https://github.com/sinanalekar/sinanalekar/blob/66004605c3a6aafce91500fbd165fc2cf5065020/README.md#featured-projects",
      ],
      ["Previously published application", "https://ix-zeta.vercel.app"],
    ],
    collection: "Applications",
    visibility: "Public summary",
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
        "https://github.com/sinanalekar/c-ra/blob/2dda55e764420a020016c09cd4d3e04ad981993e/README.md#capabilities-and-authorization",
      ],
      [
        "Capabilities module",
        "https://github.com/sinanalekar/c-ra/blob/2dda55e764420a020016c09cd4d3e04ad981993e/environment/capabilities.py",
      ],
    ],
    collection: "Research",
    visibility: "Public source",
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
        "https://github.com/sinanalekar/c-ra/blob/2dda55e764420a020016c09cd4d3e04ad981993e/README.md#tasks-agents-and-recovery",
      ],
      [
        "Tasks module",
        "https://github.com/sinanalekar/c-ra/blob/2dda55e764420a020016c09cd4d3e04ad981993e/environment/tasks.py",
      ],
    ],
    collection: "Research",
    visibility: "Public source",
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
      [
        "Integrity model",
        "https://github.com/sinanalekar/mahad-professional-education/blob/f13a53d904a402b7fd0ac7d1557e6eea6cb8d8c7/README.md#integrity-model",
      ],
      [
        "Representation source",
        "https://github.com/sinanalekar/mahad-professional-education/blob/f13a53d904a402b7fd0ac7d1557e6eea6cb8d8c7/src/lib/representation.ts",
      ],
    ],
    collection: "Applications",
    visibility: "Public source",
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
    sources: [
      [
        "Original public note",
        "https://github.com/sinanalekar/sinan-portfolio/blob/ef34463/app/data.ts",
      ],
    ],
    collection: "Research",
    visibility: "Public source",
  },
  {
    slug: "state-comparisons",
    title: "Comparing security states",
    topic: "Security",
    summary:
      "A SEEK methods note on principals, authority, capabilities, and changing one condition at a time.",
    sections: [
      [
        "Start with a state",
        "Describe the principal, resource, action, and authority involved before interpreting a result. A successful action alone does not explain why access was allowed.",
      ],
      [
        "Change one condition",
        "A counterfactual comparison keeps the experiment understandable: change one relevant condition and record what stays the same.",
      ],
      [
        "Keep observation and impact separate",
        "A changed state can motivate another experiment. It does not, by itself, establish a vulnerability or its severity.",
      ],
    ],
    kind: "Note",
    color: "lavender",
    collection: "Research",
    visibility: "Private research",
    sources: [
      ["Original CV", "/resume.pdf"],
      [
        "Public integration overview",
        "https://github.com/sinanalekar/c-ra/blob/2dda55e764420a020016c09cd4d3e04ad981993e/README.md",
      ],
    ],
  },
  {
    slug: "evidence-gates",
    title: "Challenge before conclusion",
    topic: "Research methods",
    summary:
      "A VERITAS methods note on replication, negative controls, and the value of inconclusive results.",
    sections: [
      [
        "Make the question falsifiable",
        "State what would count against the hypothesis before interpreting the observation.",
      ],
      [
        "Challenge the result",
        "Repeat the observation, compare a suitable negative control, and check whether another changing condition could explain it.",
      ],
      [
        "Record the outcome honestly",
        "Supported, refuted, blocked, and inconclusive outcomes each carry useful information. Keep the evidence needed to understand the decision.",
      ],
    ],
    kind: "Note",
    color: "lavender",
    collection: "Research",
    visibility: "Private research",
    sources: [
      ["Original CV", "/resume.pdf"],
      [
        "Public integration overview",
        "https://github.com/sinanalekar/c-ra/blob/2dda55e764420a020016c09cd4d3e04ad981993e/README.md",
      ],
    ],
  },
  {
    slug: "artifact-comparisons",
    title: "A difference is a starting point",
    topic: "Security",
    summary:
      "A HYDRA methods note on comparing software artifacts without overstating what a change proves.",
    sections: [
      [
        "Check the baseline",
        "A comparison should first be quiet when an artifact is compared with itself. Unexpected changes in that control need explanation.",
      ],
      [
        "Separate structure from interpretation",
        "An observed binary or structural difference establishes that something changed. Its security meaning requires further evidence.",
      ],
      [
        "Keep the boundary visible",
        "This note describes comparison discipline. It contains no affected versions, candidate details, target identifiers, or unpublished findings.",
      ],
    ],
    kind: "Note",
    color: "lavender",
    collection: "Research",
    visibility: "Private research",
    sources: [
      ["Original CV", "/resume.pdf"],
      [
        "Public integration overview",
        "https://github.com/sinanalekar/c-ra/blob/2dda55e764420a020016c09cd4d3e04ad981993e/README.md",
      ],
    ],
  },
  {
    slug: "research-protocol",
    title: "A portable research protocol",
    topic: "Research methods",
    summary:
      "A CYRA methods note on carrying scope and evidence discipline between agent tools.",
    sections: [
      [
        "Name the scope",
        "A portable protocol starts by describing the question, allowed work, and the conditions under which an experiment should stop.",
      ],
      [
        "Keep an inspectable record",
        "Record the observation, the comparison, and the reason for the conclusion. Distinguish tool output from the interpretation written about it.",
      ],
      [
        "Write down the limits",
        "A method should make uncertainty visible. Instructions guide the process; verification still depends on the evidence collected.",
      ],
    ],
    kind: "Note",
    color: "lavender",
    collection: "Research",
    visibility: "Private research",
    sources: [
      ["Original CV", "/resume.pdf"],
      [
        "Public integration overview",
        "https://github.com/sinanalekar/c-ra/blob/2dda55e764420a020016c09cd4d3e04ad981993e/README.md",
      ],
    ],
  },
];
export const rankedProjects = entries
  .filter((entry) => entry.kind === "Project")
  .toSorted((a, b) => (a.rank ?? 99) - (b.rank ?? 99));
export const researchProjects = rankedProjects.filter(
  (entry) => entry.collection === "Research",
);
