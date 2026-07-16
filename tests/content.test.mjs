import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("required public routes and resume exist", async () => {
  await Promise.all(["app/page.tsx","app/about/page.tsx","app/projects/page.tsx","app/resume/page.tsx","app/contact/page.tsx","public/resume.pdf"].map(path=>access(new URL(path,root))));
});

test("portfolio uses the exact student title and verified project names", async () => {
  const [home,data]=await Promise.all([read("app/page.tsx"),read("app/data.ts")]);
  assert.match(home,/Computer Engineering Student \| Full-Stack Developer \| AI &amp; Cybersecurity Enthusiast/);
  assert.match(data,/Sentinental IX/);
  assert.match(data,/IX:X Android & Web/);
  assert.doesNotMatch(home,/Software Engineer|AI Engineer|Cybersecurity Engineer/);
});

test("visitor PIN and admin systems are absent", async () => {
  const packageJson=await read("package.json");
  assert.doesNotMatch(packageJson,/bcrypt|argon2|jose/);
  await assert.rejects(access(new URL("app/admin",root)));
  await assert.rejects(access(new URL("app/unlock",root)));
});

test("external links remain exact", async () => {
  const [data,details]=await Promise.all([read("app/data.ts"),read("app/projects/[slug]/details/page.tsx")]);
  for(const expected of ["https://github.com/sinanalekar","https://linkedin.com/in/sinan-alekar-90171825a","https://sentinental-ix.vercel.app","https://github.com/sinanalekar/Sentinental-Ix","https://ix-zeta.vercel.app/","https://github.com/sinanalekar/ix"]){assert.match(data+details,new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")))}
});
