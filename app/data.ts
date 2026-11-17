export const links = {
  github: "https://github.com/sinanalekar",
  linkedin: "https://www.linkedin.com/in/sinan-anwar-alekar-90171825a/",
  cyr: "https://github.com/sinanalekar/c-ra",
};

export const entries = [
  { slug: "cyr", topic: "AI tooling", kind: "Project", color: "lavender", title: "CYR@", summary: "A local desktop workspace for organizing AI research tasks and keeping tool permissions visible.", sections: [
    ["Overview", "CYR@ is a personal software project. Its Tauri and React interface sits in front of a local FastAPI backend."],
    ["What the workspace records", "The public repository describes task checkpoints, permission decisions, and an evidence journal. Together these help a reviewer understand what the software did during a session."],
    ["Scope", "This page describes the public software architecture. The upstream repository is the source for platform support, setup, and implementation details."],
  ] },
  { slug: "permissions", topic: "Security", kind: "Documentation", color: "mint", title: "Tool permissions", summary: "How the public CYR@ design separates permission decisions from the work a tool performs.", sections: [
    ["Default behavior", "CYR@ uses a deny-by-default design for sensitive tools. Its public documentation describes grants scoped to a single action, task, workspace, or session."],
    ["Reviewing a decision", "A useful permission record identifies the tool, the scope granted, and how long it applies. Documenting those choices makes it easier to review a task afterward."],
  ] },
  { slug: "checkpoints", topic: "Engineering", kind: "Documentation", color: "blue", title: "Task checkpoints", summary: "What a checkpoint contributes to a long-running local research session.", sections: [
    ["Continuity", "The CYR@ README documents durable tasks, checkpoints and restart recovery. A checkpoint records progress so the application can resume a task after an interruption."],
    ["What to keep", "As a design principle, keep the current task state and its supporting records distinguishable. When reading a recovered task, identify which steps were completed and which are still pending."],
  ] },
  { slug: "evidence", topic: "Research methods", kind: "Note", color: "butter", title: "Writing a useful evidence record", summary: "A short checklist for recording an observation, a control, and the limits of a conclusion.", sections: [
    ["State the question", "Write down what you expect to observe and the conditions you are comparing. Describe the observation with enough context to interpret it later."],
    ["Include the control", "Use a comparison that should produce no change. Report what happened in both cases, including negative or inconclusive results."],
    ["Record the limits", "Distinguish the observed result from your interpretation. Note the conditions you actually checked and questions that remain open."],
  ] },
] as const;
