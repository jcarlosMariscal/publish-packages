// packages/demo-vite/changelog-config.js
import fs from "fs";
import path from "path";

const pkg = JSON.parse(
  fs.readFileSync(new URL("./package.json", import.meta.url), "utf-8")
);
const scope = pkg.name.replace(/^@/, ""); // Ej: "jcmariscal/demo-vite"

export default {
  transform(commit) {
    const scopeRegex = new RegExp(`^${scope}$`);
    console.log("Evaluating commit scope:", commit.scope);

    const commitScope = commit.scope || "";
    if (!scopeRegex.test(commitScope)) {
      return;
    }

    return commit;
  },
};
