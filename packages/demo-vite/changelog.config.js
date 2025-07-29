const conventionalChangelogConventionalCommits = require("conventional-changelog-conventionalcommits");

const allowedScopes = ["@jcmariscal/demo-vite"]; // Ajusta el scope aquí

module.exports = {
  // ✅ Necesario para el análisis de commits y decidir el bump
  parserOpts: conventionalChangelogConventionalCommits.parserOpts,
  whatBump: conventionalChangelogConventionalCommits.whatBump,

  // ✅ Esta parte es para el changelog visual
  writerOpts: {
    ...conventionalChangelogConventionalCommits.writerOpts,
    transform: (commit, context) => {
      const scope = commit.scope?.trim();

      if (!scope || !allowedScopes.includes(scope)) {
        return null; // Excluye del changelog
      }

      // 🔄 Procesa el commit con la lógica del preset
      if (
        typeof conventionalChangelogConventionalCommits.writerOpts.transform ===
        "function"
      ) {
        return conventionalChangelogConventionalCommits.writerOpts.transform(
          commit,
          context
        );
      }

      return commit;
    },
  },
};
