import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("required public routes exist", async () => {
  await Promise.all(
    [
      "app/page.tsx",
      "app/about/page.tsx",
      "app/projects/page.tsx",
      "app/resume/page.tsx",
      "app/contact/page.tsx",
      "app/library/page.tsx",
      "app/docs/page.tsx",
    ].map((path) => access(new URL(path, root))),
  );
});

test("the published catalog has unique routes and excludes retired project claims", async () => {
  const data = await read("app/data.ts");
  const slugs = Array.from(
    data.matchAll(/slug: "([^"]+)"/g),
    (match) => match[1],
  );
  assert.ok(slugs.length > 0);
  assert.equal(new Set(slugs).size, slugs.length);
  for (const path of [
    "app/page.tsx",
    "app/about/page.tsx",
    "app/resume/page.tsx",
    "app/data.ts",
    "app/sitemap.ts",
  ]) {
    assert.doesNotMatch(
      await read(path),
      /Sentinental IX|Founder & Lead Developer/,
    );
  }
});

test("visitor PIN and admin systems are absent", async () => {
  const packageJson = await read("package.json");
  assert.doesNotMatch(packageJson, /bcrypt|argon2|jose/);
  await assert.rejects(access(new URL("app/admin", root)));
  await assert.rejects(access(new URL("app/unlock", root)));
});

test("public pages and metadata exclude retired operations brand and inflated titles", async () => {
  const { readdir } = await import("node:fs/promises");
  async function files(dir) {
    const items = await readdir(new URL(dir, root), { withFileTypes: true });
    return (
      await Promise.all(
        items.map((item) =>
          item.isDirectory()
            ? files(`${dir}/${item.name}`)
            : `${dir}/${item.name}`,
        ),
      )
    ).flat();
  }
  for (const path of [
    ...(await files("app")),
    "public/social.svg",
    "public/favicon.svg",
  ])
    if (/\.(tsx?|css|svg)$/.test(path))
      assert.doesNotMatch(
        await read(path),
        /sent[ie]n[et]+al\s*ix|founder/i,
        path,
      );
});

test("the exact user-selected CV is hosted independently of Drive", async () => {
  const { createHash } = await import("node:crypto");
  const pdf = await readFile(new URL("public/resume.pdf", root));
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
  assert.equal(
    createHash("sha256").update(pdf).digest("hex"),
    "4a384a871a84660057f48da2127cec229cad198027541d80e1af41f5f22f9736",
  );
  assert.match(await read("app/resume/page.tsx"), /href="\/resume.pdf"/);
  assert.doesNotMatch(await read("app/resume/page.tsx"), /drive.google/);
});
