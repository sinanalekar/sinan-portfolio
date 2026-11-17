export type SystemStage = {
  id: string;
  label: string;
  caption: string;
  explanation: string;
};
export type ProjectSystem = {
  slug: string;
  title: string;
  scope: string;
  overview: string;
  outcome: string;
  stages: readonly SystemStage[];
};
export const projectSystems: Record<string, ProjectSystem> = {
  cyr: {
    slug: "cyr",
    title: "CYR@",
    scope: "Public architecture overview",
    overview:
      "A desktop interface coordinates local research work while keeping permission decisions and task progress visible.",
    outcome:
      "The visitor can inspect the public workspace architecture and the modules linked in the case study.",
    stages: [
      {
        id: "interface",
        label: "Desktop shell",
        caption: "Frame the task",
        explanation:
          "The Tauri and React interface is the starting point for a scoped research task and its visible activity.",
      },
      {
        id: "coordinator",
        label: "Local backend",
        caption: "Coordinate the work",
        explanation:
          "A local Python/FastAPI backend coordinates task state and connects the interface to available tools and integrations.",
      },
      {
        id: "permission",
        label: "Permission gate",
        caption: "Check the allowed action",
        explanation:
          "Sensitive tool actions are checked against explicit grants. A task description alone is not permission to act.",
      },
      {
        id: "tools",
        label: "Tool runtime",
        caption: "Perform a scoped action",
        explanation:
          "An available runtime carries out the permitted action and returns an observation. Missing tools or integrations are reported as unavailable.",
      },
      {
        id: "record",
        label: "Task record",
        caption: "Keep progress inspectable",
        explanation:
          "Task events and checkpoints preserve the work’s state so a session can be reviewed or recovered after an interruption.",
      },
    ],
  },
  seek: {
    slug: "seek",
    title: "SEEK",
    scope: "Conceptual overview · private implementation",
    overview:
      "SEEK examines how controlled actions change the relationship between a principal, an authority, and a resource.",
    outcome:
      "The public glimpse explains the method. Implementation, experiments, and findings remain private.",
    stages: [
      {
        id: "scope",
        label: "Research scope",
        caption: "Define the boundary",
        explanation:
          "Begin with a permitted question and a description of the principal, resource, action, and authority involved.",
      },
      {
        id: "observe",
        label: "Observations",
        caption: "Record what happened",
        explanation:
          "Collect a structured account of actions and observations before interpreting their security meaning.",
      },
      {
        id: "state",
        label: "State comparison",
        caption: "Look at what changed",
        explanation:
          "Compare the states before and after the action, keeping capability and authority context attached to the observation.",
      },
      {
        id: "control",
        label: "Counterfactual",
        caption: "Change one condition",
        explanation:
          "Use a controlled comparison to test whether a relevant condition explains the observed difference.",
      },
      {
        id: "review",
        label: "Evidence review",
        caption: "Decide what is supported",
        explanation:
          "Review the observation, comparison, and limits together. A state change is not automatically a vulnerability claim.",
      },
    ],
  },
  veritas: {
    slug: "veritas",
    title: "VERITAS",
    scope: "Conceptual overview · private implementation",
    overview:
      "A question becomes an experiment, then a challenged observation and a traceable conclusion.",
    outcome:
      "The case study and related note explain the validation discipline without exposing private research records.",
    stages: [
      {
        id: "question",
        label: "Hypothesis",
        caption: "Make the question testable",
        explanation:
          "State the research question and what observation would count against it before running the experiment.",
      },
      {
        id: "scope",
        label: "Authorization",
        caption: "Keep the scope explicit",
        explanation:
          "Check the permitted work and stop conditions. The experiment must stay within that boundary.",
      },
      {
        id: "experiment",
        label: "Experiment",
        caption: "Collect an observation",
        explanation:
          "Run the scoped experiment and record the conditions needed to understand what happened.",
      },
      {
        id: "challenge",
        label: "Challenge",
        caption: "Test another explanation",
        explanation:
          "Use replication, negative controls, and checks for confounding conditions to challenge the interpretation.",
      },
      {
        id: "record",
        label: "Decision record",
        caption: "Keep evidence and limits",
        explanation:
          "Connect the conclusion to its supporting observations and challenges. Negative and inconclusive outcomes remain useful records.",
      },
    ],
  },
  hydra: {
    slug: "hydra",
    title: "HYDRA",
    scope: "Conceptual overview · private implementation",
    overview:
      "Artifact inspection and comparison help organise research leads; they do not establish a vulnerability by themselves.",
    outcome:
      "This map contains no affected versions, binary locations, candidate details, or reproduction steps.",
    stages: [
      {
        id: "scope",
        label: "Allowed artifacts",
        caption: "Choose scoped inputs",
        explanation:
          "Start with software artifacts that the research is authorized to inspect and compare.",
      },
      {
        id: "model",
        label: "Structural model",
        caption: "Organise the artifact",
        explanation:
          "Represent enough of the artifact’s structure to make a comparison understandable and repeatable.",
      },
      {
        id: "compare",
        label: "Comparison",
        caption: "Identify a difference",
        explanation:
          "Compare the selected inputs and distinguish an observed structural difference from an interpretation of its impact.",
      },
      {
        id: "control",
        label: "Baseline checks",
        caption: "Check the comparison",
        explanation:
          "Use controls, including a self-comparison where appropriate, to identify noise or inconsistent inputs.",
      },
      {
        id: "lead",
        label: "Research lead",
        caption: "Prioritise further review",
        explanation:
          "Treat a supported difference as a lead for further authorized investigation. Findings and validation records are not published here.",
      },
    ],
  },
  cyra: {
    slug: "cyra",
    title: "CYRA",
    scope: "Conceptual overview · private protocol",
    overview:
      "The portable research protocol carries scope and evidence discipline between different agent tools.",
    outcome:
      "The public note describes the method; the private skill file and research data are not reproduced.",
    stages: [
      {
        id: "question",
        label: "Research question",
        caption: "Name the uncertainty",
        explanation:
          "Start with a clear question rather than a desired conclusion or an instruction to manufacture a positive result.",
      },
      {
        id: "scope",
        label: "Explicit scope",
        caption: "Set the working boundary",
        explanation:
          "Describe the allowed work, required authorization, and conditions under which the task should stop.",
      },
      {
        id: "plan",
        label: "Controls & plan",
        caption: "Make the method reviewable",
        explanation:
          "Plan the observation and a comparison that can challenge the explanation being considered.",
      },
      {
        id: "evidence",
        label: "Evidence review",
        caption: "Separate output from meaning",
        explanation:
          "Keep tool output, interpretation, and the reason for a decision distinguishable in the research record.",
      },
      {
        id: "report",
        label: "Honest report",
        caption: "State the remaining limits",
        explanation:
          "Report the supported observation and unresolved questions. A written protocol guides an agent; it does not guarantee correctness.",
      },
    ],
  },
  "mahad-education": {
    slug: "mahad-education",
    title: "Mahad education initiative",
    scope: "Public workflow overview",
    overview:
      "A participant reviews the proposed civic message and explicitly consents before an authenticated submission enters the delivery flow.",
    outcome:
      "The public source describes participation and delivery. It does not imply government approval or invented supporter counts.",
    stages: [
      {
        id: "participant",
        label: "Participant",
        caption: "Begin a representation",
        explanation:
          "A participant enters the information needed for their voluntary representation about an institution assessment in Mahad.",
      },
      {
        id: "verify",
        label: "Email verification",
        caption: "Establish the participant",
        explanation:
          "The public integrity model requires an email-verified participant and rejects duplicate active email participation.",
      },
      {
        id: "review",
        label: "Review & consent",
        caption: "Show the message first",
        explanation:
          "The participant sees the subject, recipients, and body, then records explicit consents before choosing to submit.",
      },
      {
        id: "submit",
        label: "Submission",
        caption: "Use the authenticated endpoint",
        explanation:
          "A server-side authenticated endpoint handles the participant’s submission rather than exposing private records directly.",
      },
      {
        id: "queue",
        label: "Delivery queue",
        caption: "Respect delivery limits",
        explanation:
          "A configured delivery provider processes the queue. Missing configuration or provider limits leave messages queued rather than bypassing controls.",
      },
    ],
  },
  portfolio: {
    slug: "portfolio",
    title: "Research portfolio",
    scope: "Public architecture overview",
    overview:
      "A shared content model drives project pages, the searchable Library, documentation, and the sitemap.",
    outcome:
      "Visitors can explore public source, read private-project summaries, download the original CV, and prepare an email.",
    stages: [
      {
        id: "visitor",
        label: "Visitor",
        caption: "Choose a route",
        explanation:
          "Navigation leads to the homepage, projects, Library, Docs, background, research history, or résumé.",
      },
      {
        id: "content",
        label: "Content catalog",
        caption: "Keep the content in one place",
        explanation:
          "A shared TypeScript catalog holds the publishable project summaries, topic labels, notes, source links, and stable slugs.",
      },
      {
        id: "search",
        label: "Search & filters",
        caption: "Find relevant work",
        explanation:
          "Client-side search combines with topic and type filters and a recommended or alphabetical reading order.",
      },
      {
        id: "read",
        label: "Project overview",
        caption: "Inspect the method",
        explanation:
          "Each project page combines its system map, a plain-language explanation, and related notes or appropriate reading links.",
      },
      {
        id: "connect",
        label: "CV & contact",
        caption: "Continue the conversation",
        explanation:
          "The original CV is served locally. The contact endpoint validates a message and prepares a draft for the visitor’s email app.",
      },
    ],
  },
  "ix-x": {
    slug: "ix-x",
    title: "IX:X",
    scope: "Legacy project · conceptual overview",
    overview:
      "The earlier learning app connected account access, role-restricted learning workflows, and web/Android delivery.",
    outcome:
      "This glimpse follows the public profile and supplied CV. It does not claim the legacy app is a maintained live service.",
    stages: [
      {
        id: "account",
        label: "Account access",
        caption: "Establish the user",
        explanation:
          "The public project description identifies Firebase Authentication as the basis for account access.",
      },
      {
        id: "role",
        label: "Role boundary",
        caption: "Restrict the workflow",
        explanation:
          "Role-restricted application workflows and Firebase data rules determine which actions are available to an account.",
      },
      {
        id: "learn",
        label: "Learning flow",
        caption: "Support study activity",
        explanation:
          "The earlier application combined learning interfaces with AI-assisted study guidance, as described in the public project profile.",
      },
      {
        id: "notify",
        label: "Notifications",
        caption: "Connect application states",
        explanation:
          "The supplied CV describes Firebase Cloud Messaging and Android notification lifecycle work. No private implementation is shown.",
      },
      {
        id: "platform",
        label: "Web & Android",
        caption: "Deliver across platforms",
        explanation:
          "The project was described as an Android, web, and PWA application. Its public summary is retained as legacy work.",
      },
    ],
  },
};
