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
  "/library/disasters",
  "/library/mahad-education",
  "/library/ix-x",
  "/library/incident-triage",
  "/library/participant-consent",
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
  await expect(page.getByRole("status")).toHaveText("10 entries");
  await page.getByRole("button", { name: "Security", exact: false }).click();
  await expect(page.getByRole("status")).toHaveText("1 entry");
  await expect(page.locator(".card h3")).toHaveText(["Tool permissions"]);
  await page
    .getByRole("searchbox", { name: "Search library" })
    .fill("checkpoints");
  await expect(page.getByRole("status")).toHaveText("0 entries");
  await page.getByRole("button", { name: "Clear search and filters" }).click();
  await expect(page.getByRole("status")).toHaveText("10 entries");
  await page.getByRole("searchbox").fill("  LOCAL DESKTOP  ");
  await expect(page.locator(".card h3")).toHaveText(["CYR@"]);
  await page.locator(".card").click();
  await expect(page).toHaveURL(/\/library\/cyr$/);
  await expect(
    page.getByRole("link", { name: "Permission implementation" }),
  ).toHaveAttribute("href", /2dda55e.*capabilities.py$/);
  await page.goto("/docs");
  await expect(page.locator(".card")).toHaveCount(5);
  await page.goto("/projects");
  await expect(page.locator(".card")).toHaveCount(5);
});
test("narrow Library filters remain reachable with touch and keyboard", async ({
  page,
}) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/library");
  const filter = page.getByRole("button", { name: "Research methods" });
  await filter.scrollIntoViewIfNeeded();
  await filter.click();
  await expect(page.getByRole("status")).toHaveText("1 entry");
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

test("Library ranking, alphabetical order, type controls and legacy entry", async ({
  page,
}) => {
  await page.goto("/library");
  await expect(page.locator(".card h3")).toHaveText([
    "CYR@",
    "Disasters",
    "Mahad education initiative",
    "Research portfolio",
    "IX:X",
    "Tool permissions",
    "Task checkpoints",
    "Triage with a human decision point",
    "Consent before submission",
    "Writing a useful evidence record",
  ]);
  await page
    .getByRole("group", { name: "Entry type" })
    .getByRole("button", { name: "Projects", exact: true })
    .click();
  await expect(page.getByRole("status")).toHaveText("5 entries");
  await page.getByLabel("Sort entries").selectOption("az");
  await expect(page.locator(".card h3")).toHaveText([
    "CYR@",
    "Disasters",
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

test("recommended reading order expands without hiding the search controls", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/library");
  await expect(page.locator(".library-picks")).not.toHaveAttribute("open", "");
  await page.getByText("Why this reading order?", { exact: true }).click();
  await expect(page.locator(".picks-list>a")).toHaveCount(3);
  await expect(page.locator(".picks-list")).toBeVisible();
  await page.getByText("Why this reading order?", { exact: true }).click();
  await expect(page.getByRole("searchbox")).toBeVisible();
});
