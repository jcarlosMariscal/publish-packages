// scripts/generate-package-json.js
import fs from "fs";
import path from "path";

const pkgPath = path.join(process.cwd(), "package.json");
const distPath = path.join(process.cwd(), "dist", "package.json");

const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

// Mapa para reemplazar workspace:* por la versión deseada
const deps = { ...pkg.dependencies };
// const replacements = {
//   "@didacteca/icons": "0.13.0",
// };

// for (const dep in replacements) {
//   if (deps[dep] && deps[dep].startsWith("workspace:")) {
//     deps[dep] = replacements[dep];
//   }
// }

const cleanPkg = {
  name: pkg.name,
  version: pkg.version,
  types: pkg.types,
  description: pkg.description,
  dependencies: deps,
  author: pkg.author,
  contributors: pkg.contributors,
  keywords: pkg.keywords,
  repository: pkg.repository,
  publishConfig: pkg.publishConfig,
  bugs: pkg.bugs,
  license: pkg.license,
};

fs.writeFileSync(distPath, JSON.stringify(cleanPkg, null, 2));
console.log("✅ Clean package.json written to dist/");
