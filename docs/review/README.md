# Portfolio redesign review

The visual reference is the supplied Braxton portfolio demo and profile-card screenshots. The profile uses the exact user-supplied `@lk.Sinan` logo, an original male illustration generated from the user’s reference, a clear Specialization block, location, social/CV links, and a contact action. It does not present the illustration as a photograph. The old SA logo and social-preview artwork have been removed.

The latest shared Google link resolves to the same Braxton SVG demo. It was operated in visible Chromium on the Cloud desktop after the dedicated Cloud browser connection failed to initialize. The review covered every section tab, full-page scrolling, gallery next/previous, zoom, share options, fullscreen, closing/Escape, testimonial navigation, both themes, mobile navigation, and empty-form validation. No form message was sent and no social share was posted. The demo contains 17 placeholder `#0` links; those do not become dead actions in this portfolio. Its artwork, testimonial claims, and source code are not copied.

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
- Every project has a five-stage system map with a readable explanation for each stage. Click/touch, next/previous, and arrow/Home/End keys select stages. The stage strip scrolls horizontally without moving the page. Private maps are explicitly conceptual overviews.
- The homepage architecture dialog browses all eight projects, expands/restores, copies the selected project’s real URL, and continues to its case study. Escape and close restore focus; clipboard denial exposes a selectable manual-copy field instead of claiming success.
- GitHub, LinkedIn, and Instagram use recognizable SVG icons and real profile links. The profile provides labelled hover/focus tooltips, the contact page provides larger social actions, and the supplied logo is also used in page icons and social metadata.
- Buttons and main links have visible hover, keyboard-focus, and held-press feedback. Controls change actual state, navigate, download, or prepare an email rather than acting as decorative placeholders.
- Public Library, Docs, résumé, and project case-study URLs are preserved where the work remains present.
- Contact validates the message and prepares an explicit email draft link without storing or sending it.

## Provenance

- Public CYR@ architecture and integration: `sinanalekar/c-ra` at `2dda55e764420a020016c09cd4d3e04ad981993e`.
- The private project summaries draw on user-authorized architecture/methodology documents and the supplied CV. Only the summaries and general methods notes are committed.
- Mahad: public project at `f13a53d904a402b7fd0ac7d1557e6eea6cb8d8c7`; portfolio source at `ef34463`; legacy IX:X and earlier education: public profile at `66004605c3a6aafce91500fbd165fc2cf5065020`.
- The generated male avatar is a new asset inspired by the supplied male image and polished profile-card reference. The original generated file is retained outside this repository; a copy is served through Next.js image optimization.
- `public/brand-logo.jpg` is the original supplied 1254×1254 logo, unchanged. SHA-256: `c72908d4430a87dca16eaa8406a31591ad6582245c88b01dd17f59e34d4b27f6`. The supplied Instagram URL is canonicalized to `https://www.instagram.com/alk.sinan/` without tracking parameters.
- Syne and DM Sans are locally hosted with their OFL licenses. Reference template artwork and code are not included.

## Verification

The 25 production-mode Chromium tests cover 24 main/content routes, desktop/mobile, both themes, widths 320–1920, search and filter combinations, ordering, legacy URLs, private-summary access labels, removed-page 404s, research selection/comparison, expandable mobile profile, image loading, keyboard/focus behavior, all eight project walkthroughs, gallery navigation/expand/copy, social links, held-press feedback, themes without JavaScript, reduced motion, contact UI/API, and the original CV’s download hash. Seven content checks also ensure removed entries and private repository links are absent from the published catalog/maps and that the original logo and CV bytes remain intact.

Axe scans cover the homepage, Library, résumé, research history, contact, and architecture dialog in both themes. Screenshots use 1440×900 and 390×844 production-mode browsers with reduced motion for stable captures. Visual review prompted refinements to the compact profile, 320px overflow, heading wrapping, comparison layout, and independent horizontal map scrolling.

Desktop and mobile captures include the home viewport/full page, both themes, Library, comparison, research history, résumé, contact, and a selected SEEK map stage. The desktop dialog capture shows the explorable architecture preview. Reference-site captures remain outside the committed review assets.

Production remains unchanged. This branch is for preview and review only.
