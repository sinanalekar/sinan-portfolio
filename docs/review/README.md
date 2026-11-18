# Portfolio redesign review

The visual reference is the supplied Braxton portfolio demo and profile-card screenshots. The profile uses the exact user-supplied `@lk.Sinan` logo, an original male illustration generated from the user’s reference, a clear Specialization block, location, social/CV links, and a contact action. It does not present the illustration as a photograph. The old SA logo and social-preview artwork have been removed.

The latest shared Google link resolves to the same Braxton SVG demo. It was operated in visible Chromium on the Cloud desktop after the dedicated Cloud browser connection failed to initialize. The review covered every section tab, full-page scrolling, gallery next/previous, zoom, share options, fullscreen, closing/Escape, testimonial navigation, both themes, mobile navigation, and empty-form validation. No form message was sent and no social share was posted. The demo contains 17 placeholder `#0` links; those do not become dead actions in this portfolio. Its artwork, testimonial claims, and source code are not copied.

## Final content

The Library has 20 entries: 12 project overviews and eight documentation/methods notes. The editorial reading order is:

1. CYR@ — the shared desktop research workspace, with public source.
2. SEEK — security-state analysis and controlled behavioral comparisons.
3. VERITAS — hypothesis-led validation and evidence review.
4. HYDRA — software-artifact inspection and binary-comparison research.
5. CYRA — the portable agent research protocol, distinct from the CYR@ desktop application.
6. CIDER — experimental hypothesis-led research loops and synthetic demonstrations.
7. Frontier — experimental evaluation on simulated security state spaces.
8. Discovery Machine — an incomplete research-planning prototype, actively being built.
9. Mahad education initiative — civic participation and consent workflow.
10. Sentinental IX — a public defensive security-operations application.
11. Research portfolio — the app and catalog implementation.
12. IX:X — a legacy learning application.

Positions describe a reading path, not benchmark scores or a ranking of discovered vulnerabilities. The removed reporting platform and its triage note are absent from the site, generated route list, and sitemap; their former Library URLs return 404.

The user explicitly authorized inclusion of private research projects and related notes as summaries. Relevant architecture/methodology documentation was reviewed privately. The published entries contain original high-level descriptions of purpose, inputs, outputs, controls, and limits. They do not contain private source code, repository URLs, raw notes, candidate inventories, benchmark results, affected versions, report identifiers, reproduction steps, or actual bug details. Private source documents remain outside the repository. The notes explain general research methods rather than reproducing internal research records.

The supplied CV remains an unchanged, separately hosted user-authored PDF at `/resume.pdf`. SHA-256: `4a384a871a84660057f48da2127cec229cad198027541d80e1af41f5f22f9736`. Its download filename is set by the Vercel response header. The page summaries do not extract the CV’s private-project metrics or confidential reporting details.

The owner explicitly requested restoring Sentinental IX in this update. Its name is retained in the unchanged original CV and restored to the web catalog, system maps, and case study without founder titles. The public repository calls the application SentinelX; the case study explains the naming and separates documented workflows from disabled or unimplemented modules.

CIDER and Frontier are labelled experimental; synthetic results do not establish vulnerabilities in real systems. Discovery Machine is labelled **In progress** and described as **incomplete** in search results, the research explorer, project page, homepage list, comparison, and architecture viewer. Its conceptual map describes a planned workflow, not a completed implementation.

Apple/Xiaomi reporting history remains clearly attributed to the supplied CV and user update, with no public vendor acknowledgement implied. Education, freelance work, and independent projects remain separate.

## Interaction and layout

- Light is the default before JavaScript runs; a visitor’s explicit dark preference persists.
- The illustrated profile stays visible on desktop. On mobile, the homepage opens with the full card; internal pages use a compact version. Expand/minimize controls let the visitor change that layout.
- Mobile navigation has permanent Home, Work, Library, More, Theme, and Contact controls. Every dock target is at least 44×44px at tested widths, including 320px. More opens a page menu for About, Docs, résumé, research history, and the original CV. It locks background scrolling, cycles keyboard focus inside the menu, and restores focus on close/Escape.
- The research explorer switches between eight systems and shows their role, input, output, access level, and limitation. A comparison control places two projects side by side in an accessible table. The narrow layout supports horizontal scrolling.
- Search combines with topic and Research/Applications/Notes/Legacy filters and recommended/alphabetical sorting. Each entry identifies public source, private research summary, or public summary access. A jump link reaches the catalog from the opening Library content.
- Homepage navigation tracks sections. Reading progress, scroll entrances, sphere motion, hover feedback, and the circular scroll cue remain. Reduced motion removes decorative animation and smooth scrolling.
- Every project has a five-stage system map with a readable explanation for each stage. Click/touch, next/previous, and arrow/Home/End keys select stages. The stage strip scrolls horizontally without moving the page. Private maps are explicitly conceptual overviews.
- The homepage architecture dialog browses all 12 projects with previous/next and a direct project picker, expands/restores, copies the selected project’s real URL, and continues to its case study. Native fullscreen has a clear expanded-view fallback if unavailable. Every map can enlarge/fit its stage diagram. Escape and close restore focus; clipboard denial exposes a selectable manual-copy field instead of claiming success.
- GitHub, LinkedIn, and Instagram use recognizable SVG icons and real profile links. The profile provides labelled hover/focus tooltips, the contact page provides larger social actions, and the supplied logo is also used in page icons and social metadata.
- Buttons and main links have visible hover, keyboard-focus, held-press, and activation feedback. A short wash appears at the activation point; keyboard activation uses the center. Reduced motion keeps a static tint and removes decorative movement. Controls change actual state, navigate, download, or prepare an email.
- The toolbox replaces a static technology list with five keyboard-accessible tool tabs. Each selection explains an actual use and links to public project examples; no skill percentages or unsupported metrics are added.
- Public Library, Docs, résumé, and project case-study URLs are preserved where the work remains present.
- Contact exposes a direct email link and Copy email action, including success feedback and a selectable fallback when clipboard permission is unavailable. The existing form validates the message and prepares an explicit email draft link without storing or sending it.
- The web résumé includes grouped security and engineering skills from the supplied CVs, including Burp Suite, Wireshark, Nmap, OAuth/JWT, PostgreSQL, and CI/CD. Print / Save PDF produces a compact single-page A4 résumé with visible email, website, GitHub, and LinkedIn URLs. The original downloadable CV remains separate and unchanged.
- The accompanying GitHub profile README replaces founder titles with independent researcher/student identity, separates education, freelance work, and projects, and links only to public summaries for private research. The exact profile text is included as [a review artifact](github-profile-readme.md).

## Provenance

- Public CYR@ architecture and integration: `sinanalekar/c-ra` at `2dda55e764420a020016c09cd4d3e04ad981993e`.
- Sentinental IX: public architecture, module-status documentation, authentication, and asset endpoints at `sinanalekar/Sentinental-Ix` commit `662b339384b73d211d44c08e250684673d34a8c6`. Disabled AI/reporting/compliance modules and file-metadata limits are stated explicitly.
- The private project summaries draw on user-authorized architecture/methodology documents and the supplied CV. Only the summaries and general methods notes are committed.
- Mahad: public project at `f13a53d904a402b7fd0ac7d1557e6eea6cb8d8c7`; portfolio source at `ef34463`; legacy IX:X and earlier education: public profile at `66004605c3a6aafce91500fbd165fc2cf5065020`.
- The generated male avatar is a new asset inspired by the supplied male image and polished profile-card reference. The original generated file is retained outside this repository; a copy is served through Next.js image optimization.
- `public/brand-logo.jpg` is the original supplied 1254×1254 logo, unchanged. SHA-256: `c72908d4430a87dca16eaa8406a31591ad6582245c88b01dd17f59e34d4b27f6`. The supplied Instagram URL is canonicalized to `https://www.instagram.com/alk.sinan/` without tracking parameters.
- Syne and DM Sans are locally hosted with their OFL licenses. Reference template artwork and code are not included.

## Verification

The 36 production-mode Chromium tests cover 28 main/content routes, desktop/mobile, both themes, widths 320–1920, search and filter combinations, ordering, legacy URLs, private-summary access labels, removed-page 404s, research selection/comparison, expandable mobile profile, image loading, keyboard/focus behavior, all 12 project walkthroughs, gallery navigation/expand/copy, native fullscreen and fallback, diagram enlargement, toolbox tabs, the mobile Contact dock and More menu, social links, pointer/keyboard press feedback, themes without JavaScript, reduced motion, contact UI/API, the original CV’s download hash, direct email/copy behavior and denied-clipboard fallback, single-page résumé PDF text/contact links, Discovery Machine status across browsing surfaces, and the restored/experimental project scope. Seven content checks also ensure removed entries and private repository links are absent from the published catalog/maps and that the original logo and CV bytes remain intact.

Axe scans cover the homepage, Library, résumé, research history, contact, architecture dialog, and mobile page menu in both themes. Screenshots use 1440×900 and 390×844 production-mode browsers with reduced motion for stable captures. Visual review prompted refinements to the compact profile, 320px overflow, heading wrapping, comparison layout, independent horizontal map scrolling, the mobile dock’s permanent Contact action, email-panel padding, status-badge contrast, and removal of the extra print page.

Desktop and mobile captures include the home viewport/full page, both themes, Library, comparison, research history, résumé, contact, a selected SEEK map stage, the new research case studies, and the single-page printed web résumé. Additional captures show the toolbox, mobile page menu, project viewer, and fullscreen view. Reference-site captures remain outside the committed review assets.

At the user’s request, the ready baseline at `70fc149` was released first to `https://sinan-alekar.vercel.app/` on 17 November 2026. The homepage, Library, Docs, and résumé were checked on that domain, and no error/fatal runtime logs were returned for the deployment’s review window. The navigation and interaction refinements were subsequently released through PR #5. This update implements the five selected review annotations for contact/printing, CV-backed skills, restored Sentinental IX, research coverage and status, and the GitHub profile.
