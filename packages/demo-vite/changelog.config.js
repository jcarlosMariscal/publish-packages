const conventionalChangelogConventionalCommits = require("conventional-changelog-conventionalcommits");

module.exports = {
  ...conventionalChangelogConventionalCommits,
  parserOpts: {
    ...conventionalChangelogConventionalCommits.parserOpts,
    // Filtramos los commits por scope del paquete
    // Cambia "ebook-icons-native" por el scope deseado
    headerPattern: /^(\w*)(?:\((.*)\))?: (.*)$/,
    headerCorrespondence: ["type", "scope", "subject"],
  },
  writerOpts: {
    transform: (commit, context) => {
      const allowedScopes = ["demo-vite"]; // 👈 cámbialo por el scope del paquete actual

      if (!commit.scope || !allowedScopes.includes(commit.scope)) {
        return; // 👈 ignorar el commit
      }

      return commit;
    },
  },
};
