const conventionalChangelogConventionalCommits = require("conventional-changelog-conventionalcommits");

module.exports = {
  ...conventionalChangelogConventionalCommits,
  parserOpts: {
    ...conventionalChangelogConventionalCommits.parserOpts,
    headerPattern: /^(\w*)(?:\((.*)\))?: (.*)$/,
    headerCorrespondence: ["type", "scope", "subject"],
  },
  writerOpts: {
    ...conventionalChangelogConventionalCommits.writerOpts,
    transform: (commit, context) => {
      const allowedScopes = ["@jcmariscal/demo-vite"];
      console.log(commit);

      // 🧽 Asegúrate de limpiar espacios y comparar bien
      const scope = commit.scope?.trim();

      if (!scope || !allowedScopes.includes(scope)) {
        return; // Ignora commits sin scope o con otro scope
      }

      return commit;
    },
  },
};
