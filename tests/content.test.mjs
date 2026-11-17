import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("required public routes exist", async () => {
  await Promise.all(["app/page.tsx","app/about/page.tsx","app/projects/page.tsx","app/resume/page.tsx","app/contact/page.tsx","app/library/page.tsx","app/docs/page.tsx"].map(path=>access(new URL(path,root))));
});

test("the published catalog has unique routes and excludes retired project claims", async () => {
  const data = await read("app/data.ts");
  const slugs = Array.from(data.matchAll(/slug: "([^"]+)"/g), match => match[1]);
  assert.ok(slugs.length > 0);
  assert.equal(new Set(slugs).size, slugs.length);
  for (const path of ["app/page.tsx", "app/about/page.tsx", "app/resume/page.tsx", "app/data.ts", "app/sitemap.ts"]) {
    assert.doesNotMatch(await read(path), /Sentinental IX|IX:X|Founder & Lead Developer/);
  }
});

test("visitor PIN and admin systems are absent", async () => {
  const packageJson=await read("package.json");
  assert.doesNotMatch(packageJson,/bcrypt|argon2|jose/);
  await assert.rejects(access(new URL("app/admin",root)));
  await assert.rejects(access(new URL("app/unlock",root)));
});
