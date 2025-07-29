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
      const allowedScopes = ["demo-vite"]; // 👈 cambia este scope por el de tu paquete actual

      if (!commit.scope || !allowedScopes.includes(commit.scope)) {
        return;
      }

      return commit;
    },
  },
};
