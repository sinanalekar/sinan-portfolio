# Portfolio redesign review

The visual reference is the supplied Braxton portfolio demo and profile-card screenshots. The latest profile uses an original male illustration generated from the user’s reference, a clear Specialization block, location, social/CV links, and a contact action. It does not present the illustration as a photograph.

## Final content

The Library has 16 entries: eight project overviews and eight documentation/methods notes. The editorial reading order is:

1. CYR@ — the shared desktop research workspace, with public source.
2. SEEK — security-state analysis and controlled behavioral comparisons.
3. VERITAS — hypothesis-led validation and evidence review.
4. HYDRA — software-artifact inspection and binary-comparison research.
5. CYRA — the portable agent research protocol, distinct from the CYR@ desktop application.
6. Mahad education initiative — civic participation and consent workflow.
7. Research portfolio — the app and catalog implementation.
8. IX:X — a legacy learning application.

Positions describe a reading path, not benchmark scores or a ranking of discovered vulnerabilities. The removed reporting platform and its triage note are absent from the site, generated route list, and sitemap; their former Library URLs return 404.

The user explicitly authorized inclusion of private research projects and related notes as summaries. Relevant architecture/methodology documentation was reviewed privately. The published entries contain original high-level descriptions of purpose, inputs, outputs, controls, and limits. They do not contain private source code, repository URLs, raw notes, candidate inventories, benchmark results, affected versions, report identifiers, reproduction steps, or actual bug details. Private source documents remain outside the repository. The notes explain general research methods rather than reproducing internal research records.

The supplied CV remains an unchanged, separately hosted user-authored PDF at `/resume.pdf`. SHA-256: `4a384a871a84660057f48da2127cec229cad198027541d80e1af41f5f22f9736`. Its download filename is set by the Vercel response header. The page summaries do not extract the CV’s private-project metrics or confidential reporting details.

Apple/Xiaomi reporting history remains clearly attributed to the supplied CV and user update, with no public vendor acknowledgement implied. Education, freelance work, and independent projects remain separate.

## Interaction and layout

- Light is the default before JavaScript runs; a visitor’s explicit dark preference persists.
- The illustrated profile stays visible on desktop. On mobile, the homepage opens with the full card; internal pages use a compact version. Expand/minimize controls let the visitor change that layout.
- The research explorer switches between five systems and shows their role, input, output, access level, and limitation. A comparison control places two projects side by side in an accessible table. The narrow layout supports horizontal scrolling.
- Search combines with topic and Research/Applications/Notes/Legacy filters and recommended/alphabetical sorting. Each entry identifies public source, private research summary, or public summary access. A jump link reaches the catalog from the opening Library content.
- Homepage navigation tracks sections. Reading progress, scroll entrances, sphere motion, hover feedback, and the circular scroll cue remain. Reduced motion removes decorative animation and smooth scrolling.
- The CYR@ architecture dialog supports Escape, focus restoration, source inspection, and continuation to its case study.
- Public Library, Docs, résumé, and project case-study URLs are preserved where the work remains present.
- Contact validates the message and prepares an explicit email draft link without storing or sending it.

## Provenance

- Public CYR@ architecture and integration: `sinanalekar/c-ra` at `2dda55e764420a020016c09cd4d3e04ad981993e`.
- The private project summaries draw on user-authorized architecture/methodology documents and the supplied CV. Only the summaries and general methods notes are committed.
- Mahad: public project at `f13a53d904a402b7fd0ac7d1557e6eea6cb8d8c7`; portfolio source at `ef34463`; legacy IX:X and earlier education: public profile at `66004605c3a6aafce91500fbd165fc2cf5065020`.
- The generated male avatar is a new asset inspired by the supplied male image and polished profile-card reference. The original generated file is retained outside this repository; a copy is served through Next.js image optimization.
- Syne and DM Sans are locally hosted with their OFL licenses. Reference template artwork and code are not included.

## Verification

Production-mode Chromium checks cover 24 main/content routes, desktop/mobile, both themes, widths 320–1920, search and filter combinations, ordering, legacy URLs, private-summary access labels, removed-page 404s, research selection/comparison, expandable mobile profile, image loading, keyboard/focus behavior, preview dialog, themes without JavaScript, reduced motion, contact UI/API, and the original CV’s download hash. Content checks also ensure removed entries and private repository links are not present in the published catalog.

Axe scans cover the homepage, Library, résumé, research history, contact, and architecture dialog in both themes. Screenshots use 1440×900 and 390×844 production-mode browsers with reduced motion for stable captures. Visual review prompted refinements to the compact profile, 320px overflow, heading wrapping, and comparison layout.

Production remains unchanged. This branch is for preview and review only.
