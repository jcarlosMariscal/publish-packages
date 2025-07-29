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
      const scope = commit.scope?.trim();
      console.log("This is commit: ", commit);

      if (!scope || !allowedScopes.includes(scope)) {
        // No excluir para release-it, solo marcar para ocultar en changelog
        commit.skip = true;
      }

      return commit;
    },
    // Opcional: excluir visualmente commits con skip en el changelog
    finalizeContext: (context) => context,
  },
};
