import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = [
  "/",
  "/projects",
  "/library",
  "/docs",
  "/about",
  "/resume",
  "/contact",
  "/research",
  "/library/cyr",
  "/library/portfolio",
  "/library/permissions",
  "/library/checkpoints",
  "/library/evidence",
  "/library/mahad-education",
  "/library/ix-x",
  "/library/participant-consent",
  "/library/seek",
  "/library/veritas",
  "/library/hydra",
  "/library/cyra",
  "/library/state-comparisons",
  "/library/evidence-gates",
  "/library/artifact-comparisons",
  "/library/research-protocol",
];
for (const scenario of [
  { name: "desktop dark", width: 1440, theme: "dark" },
  { name: "desktop light", width: 1440, theme: "light" },
  { name: "mobile dark", width: 390, theme: "dark" },
]) {
  test(`main routes render without overflow or runtime errors: ${scenario.name}`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: scenario.width, height: 900 });
    await page.addInitScript(
      (theme) => localStorage.setItem("portfolio-theme", theme),
      scenario.theme,
    );
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status(), route).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("html")).toHaveAttribute(
        "data-theme",
        scenario.theme,
      );
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
        route,
      ).toBeTruthy();
      expect(await page.locator("body").innerText()).not.toMatch(
        /sent[ie]n[et]+al\s*ix|founder/i,
      );
    }
    expect(errors).toEqual([]);
  });
}
test("Library combines search and topic filters and recovers from no results", async ({
  page,
}) => {
  await page.goto("/library");
  await expect(page.getByRole("status")).toHaveText("16 entries");
  await page
    .locator(".shelf")
    .getByRole("button", { name: "Security", exact: false })
    .click();
  await expect(page.getByRole("status")).toHaveText("5 entries");
  await page.getByRole("searchbox").fill("Tool permissions");
  await expect(page.getByRole("status")).toHaveText("1 entry");
  await expect(page.locator(".card h3")).toHaveText(["Tool permissions"]);
  await page
    .getByRole("searchbox", { name: "Search library" })
    .fill("checkpoints");
  await expect(page.getByRole("status")).toHaveText("0 entries");
  await page.getByRole("button", { name: "Clear search and filters" }).click();
  await expect(page.getByRole("status")).toHaveText("16 entries");
  await page.getByRole("searchbox").fill("  LOCAL DESKTOP  ");
  await expect(page.locator(".card h3")).toHaveText(["CYR@"]);
  await page.locator(".card").click();
  await expect(page).toHaveURL(/\/library\/cyr$/);
  await expect(
    page.getByRole("link", { name: "Permission implementation" }),
  ).toHaveAttribute("href", /2dda55e.*capabilities.py$/);
  await page.goto("/docs");
  await expect(page.locator(".card")).toHaveCount(8);
  await page.goto("/projects");
  await expect(page.locator(".card")).toHaveCount(8);
});
test("narrow Library filters remain reachable with touch and keyboard", async ({
  page,
}) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/library");
  const filter = page.getByRole("button", { name: "Research methods" });
  await filter.scrollIntoViewIfNeeded();
  await filter.click();
  await expect(page.getByRole("status")).toHaveText("5 entries");
  await filter.focus();
  await page.keyboard.press("Enter");
  await expect(filter).toHaveAttribute("aria-pressed", "true");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBeTruthy();
});
test("preview supports keyboard, focus restoration, and opening the case study", async ({
  page,
}) => {
  await page.goto("/");
  const trigger = page.getByRole("button", {
    name: "Open CYR@ architecture preview",
  });
  await trigger.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Close architecture preview" }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page.getByRole("link", { name: "Read the case study" }).click();
  await expect(page).toHaveURL(/\/library\/cyr$/);
  expect(await page.locator("body").evaluate((el) => el.style.overflow)).toBe(
    "",
  );
});
test("theme persists and skip link reaches the main content", async ({
  page,
}) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByText("Skip to content", { exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Switch to light theme" }),
  ).toBeVisible();
});
test("section navigation tracks scroll and reduced motion disables animation", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".hero-orb")).toHaveCSS(
    "animation-name",
    "orb-breathe",
  );
  await page
    .getByRole("navigation", { name: "Primary" })
    .getByRole("link", { name: "Work", exact: true })
    .click();
  await expect(
    page
      .getByRole("navigation", { name: "Primary" })
      .getByRole("link", { name: "Work", exact: true }),
  ).toHaveAttribute("aria-current", "location");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".hero-orb")).toHaveCSS("animation-name", "none");
  await expect(page.locator(".scroll-ring")).toHaveCSS(
    "animation-name",
    "none",
  );
  await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
  for (const element of await page.locator(".reveal-ready").all())
    await expect(element).toHaveCSS("opacity", "1");
});
for (const theme of ["dark", "light"])
  test(`accessibility: ${theme} theme, content, filters, dialog, contact`, async ({
    page,
  }) => {
    await page.addInitScript(
      (value) => localStorage.setItem("portfolio-theme", value),
      theme,
    );
    await page.emulateMedia({ reducedMotion: "reduce" });
    for (const route of ["/", "/library", "/resume", "/contact", "/research"]) {
      await page.goto(route);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(results.violations, route).toEqual([]);
    }
    await page.goto("/");
    await page
      .getByRole("button", { name: "Open CYR@ architecture preview" })
      .click();
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    await page
      .getByRole("button", { name: "Close architecture preview" })
      .click();
    await page.setViewportSize({ width: 390, height: 844 });
    await page.getByRole("button", { name: "More pages", exact: true }).click();
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
  });
test("contact endpoint validates and prepares email without sending", async ({
  page,
}) => {
  await page.goto("/contact");
  const results = await page.evaluate(async () => {
    const invalid = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: "{}",
    });
    const valid = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: "Portfolio review",
        email: "review@example.com",
        company: "",
        subject: "Public project question",
        purpose: "Technical discussion",
        message: "A browser verification of the contact preparation flow.",
        website: "",
      }),
    });
    return {
      invalidStatus: invalid.status,
      validStatus: valid.status,
      body: (await valid.json()) as { mailto: string },
    };
  });
  expect(results.invalidStatus).toBe(400);
  expect(results.validStatus).toBe(200);
  expect(results.body.mailto).toMatch(
    /^mailto:.*subject=Public%20project%20question/,
  );
});

test("responsive layout at boundary widths", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 360, 760, 768, 960, 1024, 1280, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ["/", "/library", "/resume", "/research"]) {
      await page.goto(route);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
        `${width} ${route}`,
      ).toBeTruthy();
    }
  }
});
test("contact form completes the browser-to-API preparation flow", async ({
  page,
}) => {
  await page.goto("/contact");
  await page.getByLabel("Name", { exact: true }).fill("Portfolio review");
  await page.getByLabel("Email", { exact: true }).fill("review@example.com");
  await page
    .getByLabel("Subject", { exact: true })
    .fill("Public project question");
  await page
    .getByLabel("Message", { exact: true })
    .fill("A browser verification of the contact preparation flow.");
  const response = page.waitForResponse(
    (r) => r.url().endsWith("/api/contact") && r.request().method() === "POST",
  );
  await page.getByRole("button", { name: "Prepare email" }).click();
  expect((await response).status()).toBe(200);
  await expect(page.getByRole("status")).toContainText("Your message is ready");
});

test("Library ranks research first, supports applications and legacy filters", async ({
  page,
}) => {
  await page.goto("/library");
  await expect(page.locator(".card h3").nth(0)).toHaveText("CYR@");
  await expect(page.locator(".card h3").nth(1)).toHaveText("SEEK");
  await expect(page.locator(".card h3").nth(2)).toHaveText("VERITAS");
  await expect(page.locator(".card h3").nth(3)).toHaveText("HYDRA");
  await expect(page.locator(".card h3").nth(4)).toHaveText("CYRA");
  await page
    .getByRole("group", { name: "Entry type" })
    .getByRole("button", { name: "Applications", exact: true })
    .click();
  await expect(page.getByRole("status")).toHaveText("3 entries");
  await page.getByLabel("Sort entries").selectOption("az");
  await expect(page.locator(".card h3")).toHaveText([
    "IX:X",
    "Mahad education initiative",
    "Research portfolio",
  ]);
  await page.getByRole("button", { name: "Legacy", exact: true }).click();
  await expect(page.getByRole("status")).toHaveText("1 entry");
  await page.locator(".card").click();
  await expect(page).toHaveURL(/\/library\/ix-x$/);
  await expect(page.locator(".article-legacy")).toHaveText("Legacy project");
});
test("CV download is the selected original PDF and research scope expands", async ({
  page,
}) => {
  const { createHash } = await import("node:crypto");
  const { readFile } = await import("node:fs/promises");
  await page.goto("/resume");
  const downloadEvent = page.waitForEvent("download");
  await page.getByRole("link", { name: "Download CV" }).click();
  const download = await downloadEvent;
  expect(download.suggestedFilename()).toBe("Sinan-Alekar-CV.pdf");
  const path = await download.path();
  expect(path).toBeTruthy();
  expect(
    createHash("sha256")
      .update(await readFile(path!))
      .digest("hex"),
  ).toBe("4a384a871a84660057f48da2127cec229cad198027541d80e1af41f5f22f9736");
  await page.goto("/research");
  await expect(
    page.getByText("Researcher-reported statuses.", { exact: false }),
  ).toBeVisible();
  await page.locator("#xiaomi summary").click();
  await expect(page.locator("#xiaomi details")).toHaveAttribute("open", "");
});
test("light theme also renders before JavaScript runs", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(process.env.BASE_URL || "http://127.0.0.1:3001");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await expect(page.locator("body")).toHaveCSS(
    "background-color",
    "rgb(246, 244, 247)",
  );
  await context.close();
});

test("research explorer switches projects and compares their roles", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/library");
  await page
    .getByRole("group", { name: "Research project" })
    .getByRole("button", { name: /HYDRA/ })
    .click();
  await expect(page.locator(".explorer-title h3")).toHaveText("HYDRA");
  await expect(page.locator(".explorer-title .access-badge")).toHaveText(
    "Private research",
  );
  await page.getByRole("button", { name: "Compare roles" }).click();
  await page.getByLabel("Compare with").selectOption("veritas");
  await expect(
    page.getByRole("columnheader", { name: "HYDRA", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("columnheader", { name: "VERITAS", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Close comparison" }).click();
  await expect(page.getByRole("table")).toHaveCount(0);
  await expect(page.getByRole("searchbox")).toBeVisible();
});
test("existing project case-study URLs lead to their current articles", async ({
  page,
}) => {
  await page.goto("/projects/ix-x/details");
  await expect(page).toHaveURL(/\/library\/ix-x$/);
  await expect(page.locator(".article-legacy")).toHaveText("Legacy project");
  await page.goto("/projects/cyr/details");
  await expect(page).toHaveURL(/\/library\/cyr$/);
});

test("mobile profile uses the male illustration, specialization, and expandable layout", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const image = page.getByRole("img", {
    name: "Stylized male student with curly dark hair working at a laptop",
  });
  await expect(image).toBeVisible();
  await expect
    .poll(() => image.evaluate((el: HTMLImageElement) => el.naturalWidth))
    .toBeGreaterThan(0);
  await expect(
    page.getByText("Specialization:", { exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Minimize profile" }).click();
  await expect(page.locator(".profile-card")).toHaveAttribute(
    "data-expanded",
    "false",
  );
  await page.getByRole("button", { name: "Expand profile" }).click();
  await expect(page.locator(".profile-card")).toHaveAttribute(
    "data-expanded",
    "true",
  );
  await page.goto("/library");
  await expect(page.locator(".profile-card")).toHaveAttribute(
    "data-expanded",
    "false",
  );
  await expect(page.locator(".profile-based")).not.toBeVisible();
  await expect(page.locator(".specialization>.micro")).not.toBeVisible();
});
test("removed platform and related triage page are not published", async ({
  page,
}) => {
  for (const path of ["/library/disasters", "/library/incident-triage"]) {
    expect((await page.goto(path))?.status()).toBe(404);
  }
  await page.goto("/library");
  await expect(page.locator("main")).not.toContainText(
    /Disasters|incident triage/i,
  );
  for (const slug of ["seek", "veritas", "hydra", "cyra"]) {
    await page.goto(`/library/${slug}`);
    await expect(page.locator(".article-access")).toHaveText(
      "Private research",
    );
    for (const link of await page.locator(".source-list a").all())
      expect(await link.getAttribute("href")).not.toMatch(
        /github.com\/sinanalekar\/(seek|veritas|hydra-apple-vrs|cyra-skill)(\/|$)/,
      );
  }
});

test("private project overviews connect to their related methods notes", async ({
  page,
}) => {
  for (const [project, note, title] of [
    ["seek", "state-comparisons", "Comparing security states"],
    ["veritas", "evidence-gates", "Challenge before conclusion"],
    ["hydra", "artifact-comparisons", "A difference is a starting point"],
    ["cyra", "research-protocol", "A portable research protocol"],
  ]) {
    await page.goto(`/library/${project}`);
    await page
      .getByRole("complementary", { name: "Related methods" })
      .getByRole("link", { name: title })
      .click();
    await expect(page).toHaveURL(new RegExp(`/library/${note}$`));
    await expect(page.locator(".article-access")).toHaveText(
      "Private research",
    );
  }
});

test("every project has a working stage map and keyboard walkthrough", async ({
  page,
}) => {
  for (const [slug, title] of [
    ["cyr", "CYR@"],
    ["seek", "SEEK"],
    ["veritas", "VERITAS"],
    ["hydra", "HYDRA"],
    ["cyra", "CYRA"],
    ["mahad-education", "Mahad education initiative"],
    ["portfolio", "Research portfolio"],
    ["ix-x", "IX:X"],
  ]) {
    await page.goto(`/library/${slug}`);
    const map = page.locator(".project-system");
    await expect(map).toBeVisible();
    const stages = map
      .getByRole("group", { name: `${title} system stages` })
      .getByRole("button");
    await expect(stages).toHaveCount(5);
    await expect(stages.first()).toHaveAttribute("aria-pressed", "true");
    const first = await map.locator(".system-story h3").innerText();
    await map.getByRole("button", { name: "Next stage", exact: true }).click();
    await expect(stages.nth(1)).toHaveAttribute("aria-pressed", "true");
    await expect(map.locator(".system-story h3")).not.toHaveText(first);
    await map
      .getByRole("button", { name: "Previous stage", exact: true })
      .click();
    await expect(stages.first()).toHaveAttribute("aria-pressed", "true");
    await stages.first().focus();
    await page.keyboard.press("End");
    await expect(stages.last()).toBeFocused();
    await expect(stages.last()).toHaveAttribute("aria-pressed", "true");
    await page.keyboard.press("ArrowRight");
    await expect(stages.first()).toBeFocused();
    await expect(stages.first()).toHaveAttribute("aria-pressed", "true");
    await page.keyboard.press("Tab");
    await expect(stages.nth(1)).toBeFocused();
    await page.keyboard.press("ArrowRight");
    await expect(stages.nth(2)).toBeFocused();
    await expect(stages.nth(2)).toHaveAttribute("aria-pressed", "true");
  }
});
test("project gallery browses, expands, copies and opens the selected project", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  await page
    .getByRole("button", { name: "Open CYR@ architecture preview" })
    .click();
  const dialog = page.getByRole("dialog");
  await dialog
    .getByRole("button", { name: "Next project", exact: true })
    .click();
  await expect(dialog.locator("#preview-title")).toHaveText("Inside SEEK.");
  await dialog
    .getByRole("button", { name: "Expand preview", exact: true })
    .click();
  await expect(dialog).toHaveClass(/dialog-wide/);
  await dialog
    .getByRole("button", { name: "Restore preview", exact: true })
    .click();
  await expect(dialog).not.toHaveClass(/dialog-wide/);
  await dialog
    .getByRole("button", { name: "Copy project link", exact: true })
    .click();
  await expect(dialog.getByRole("status")).toHaveText(
    "Project link copied to clipboard",
  );
  expect(await page.evaluate(() => navigator.clipboard.readText())).toMatch(
    /\/library\/seek$/,
  );
  await dialog
    .getByRole("button", { name: "Previous project", exact: true })
    .click();
  await expect(dialog.locator("#preview-title")).toHaveText("Inside CYR@.");
  await dialog.getByRole("link", { name: "Read the case study" }).click();
  await expect(page).toHaveURL(/\/library\/cyr$/);
});
test("brand and social icons use the supplied identity and Instagram profile", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByRole("img", { name: "@lk.Sinan logo" })).toBeVisible();
  const social = page.locator(".profile-card .social-links");
  for (const name of ["GitHub", "LinkedIn", "Instagram"]) {
    const link = social.getByRole("link", { name, exact: true });
    await expect(link.locator("svg")).toHaveCount(1);
    await expect(link).toHaveAttribute("target", "_blank");
  }
  await expect(
    social.getByRole("link", { name: "Instagram", exact: true }),
  ).toHaveAttribute("href", "https://www.instagram.com/alk.sinan/");
  await page.goto("/contact");
  await expect(page.locator(".social-cards a")).toHaveCount(3);
});
test("button press provides feedback and carries out its action", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/library");
  const button = page.getByRole("button", {
    name: "Expand profile",
    exact: true,
  });
  const box = await button.boundingBox();
  expect(box).not.toBeNull();
  await page.mouse.move(box!.x + box!.width / 2, box!.y + box!.height / 2);
  await page.mouse.down();
  await expect(button).toHaveCSS("filter", "brightness(0.9)");
  await page.mouse.up();
  await expect(
    page.getByRole("button", { name: "Minimize profile", exact: true }),
  ).toHaveAttribute("aria-expanded", "true");
});

test("mobile dock keeps Contact visible with usable touch targets", async ({
  page,
}) => {
  for (const width of [320, 390, 760]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/library");
    const header = page.getByRole("banner");
    const contact = header.getByRole("link", { name: "Contact", exact: true });
    await expect(contact).toBeVisible();
    await expect(contact).toHaveAttribute("href", "/contact");
    for (const control of await header
      .locator("a:visible, button:visible")
      .all()) {
      const box = await control.boundingBox();
      expect(box!.width).toBeGreaterThanOrEqual(44);
      expect(box!.height).toBeGreaterThanOrEqual(44);
    }
    await contact.click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(contact).toHaveAttribute("aria-current", "page");
    await expect(
      page.getByRole("button", { name: "Prepare email" }),
    ).toBeVisible();
  }
});

test("mobile More menu reaches secondary pages, traps focus, and closes with Escape", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const more = page.getByRole("button", { name: "More pages", exact: true });
  await more.click();
  const menu = page.getByRole("dialog", { name: "Explore the portfolio." });
  await expect(menu).toBeVisible();
  await expect(more).toHaveAttribute("aria-expanded", "true");
  await expect(
    page.getByRole("button", { name: "Close page menu" }),
  ).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(
    menu.getByRole("link", { name: "Download original CV" }),
  ).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("button", { name: "Close page menu" }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menu).not.toBeVisible();
  await expect(more).toBeFocused();
  for (const [name, route] of [
    ["Docs", "/docs"],
    ["Résumé", "/resume"],
    ["About", "/about"],
    ["Research history", "/research"],
  ]) {
    await more.click();
    await menu.getByRole("link", { name: new RegExp(`^${name} `) }).click();
    await expect(page).toHaveURL(new RegExp(`${route}$`));
    await expect(menu).not.toBeVisible();
    await expect(more).toHaveAttribute("data-current", "true");
  }
});

test("click and keyboard activation produce feedback while reduced motion stays still", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/library");
  const toggle = page.locator(".profile-expand");
  // Observe the short effect at activation; remote browser round trips can outlast it.
  await toggle.evaluate((node) => {
    const button = node as HTMLButtonElement & {
      pressFrames: { animation: string; reduced: boolean }[];
    };
    button.pressFrames = [];
    new MutationObserver(() => {
      if (button.hasAttribute("data-feedback"))
        button.pressFrames.push({
          animation: getComputedStyle(button, "::after").animationName,
          reduced: matchMedia("(prefers-reduced-motion: reduce)").matches,
        });
    }).observe(button, {
      attributes: true,
      attributeFilter: ["data-feedback"],
    });
  });
  const frames = () =>
    toggle.evaluate(
      (node) =>
        (
          node as HTMLButtonElement & {
            pressFrames: { animation: string; reduced: boolean }[];
          }
        ).pressFrames,
    );
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect
    .poll(frames)
    .toContainEqual({
      animation: expect.stringMatching(/press-wash/),
      reduced: false,
    });
  await expect(toggle).not.toHaveAttribute("data-feedback");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await toggle.focus();
  await page.keyboard.press("Space");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect
    .poll(frames)
    .toContainEqual({ animation: "none", reduced: true });
});

test("toolbox selects real project examples with pointer and keyboard", async ({
  page,
}) => {
  await page.goto("/");
  const tabs = page.getByRole("tablist", { name: "Tools in practice" });
  const panel = page.getByRole("tabpanel");
  for (const name of ["Python", "TypeScript", "React", "FastAPI", "Git"]) {
    const tab = tabs.getByRole("tab", { name, exact: false });
    await tab.click();
    await expect(tab).toHaveAttribute("aria-selected", "true");
    await expect(panel).toContainText(`${name} / In the public work`);
    await expect(panel.getByRole("link")).toHaveCount(2);
  }
  await page.keyboard.press("Home");
  await expect(tabs.getByRole("tab", { name: /Python/ })).toBeFocused();
  await page.keyboard.press("ArrowRight");
  await expect(tabs.getByRole("tab", { name: /TypeScript/ })).toHaveAttribute(
    "aria-selected",
    "true",
  );
  await panel.getByRole("link", { name: "Mahad education initiative" }).click();
  await expect(page).toHaveURL(/\/library\/mahad-education$/);
});

test("gallery picker, diagram enlargement, and native fullscreen work", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("button", { name: "Open CYR@ architecture preview" })
    .click();
  const dialog = page.getByRole("dialog", { name: "Inside CYR@." });
  await dialog
    .getByRole("group", { name: "Choose a project" })
    .getByRole("button", { name: /04 HYDRA/ })
    .click();
  await expect(page.locator("#preview-title")).toHaveText("Inside HYDRA.");
  const stage = page.locator(".project-dialog .system-stage").first();
  const before = (await stage.boundingBox())!.width;
  await page
    .getByRole("button", { name: "Enlarge diagram", exact: true })
    .click();
  await expect(page.locator(".project-dialog .project-system")).toHaveAttribute(
    "data-enlarged",
    "true",
  );
  expect((await stage.boundingBox())!.width).toBeGreaterThan(before);
  await page.getByRole("button", { name: "Fit diagram", exact: true }).click();
  await page.getByRole("button", { name: "Fullscreen", exact: true }).click();
  await expect
    .poll(() => page.evaluate(() => document.fullscreenElement?.className))
    .toBe("dialog-content");
  await expect(
    page.getByRole("button", { name: "Exit fullscreen" }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "Exit fullscreen" }).click();
  await expect
    .poll(() => page.evaluate(() => document.fullscreenElement))
    .toBeNull();
  await page
    .getByRole("button", { name: "Close architecture preview" })
    .click();
  await expect(
    page.getByRole("button", { name: "Open CYR@ architecture preview" }),
  ).toBeFocused();
});

test("fullscreen denial expands the viewer with an honest fallback", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Element.prototype.requestFullscreen = () =>
      Promise.reject(new Error("Unavailable"));
  });
  await page.goto("/");
  await page
    .getByRole("button", { name: "Open CYR@ architecture preview" })
    .click();
  await page.getByRole("button", { name: "Fullscreen", exact: true }).click();
  await expect(page.getByRole("dialog")).toHaveClass(/dialog-wide/);
  await expect(
    page.getByText(
      "Expanded to fit your screen. Fullscreen is unavailable in this browser.",
    ),
  ).toBeVisible();
});
