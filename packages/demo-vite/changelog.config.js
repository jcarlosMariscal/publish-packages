const conventionalChangelogConventionalCommits = require("conventional-changelog-conventionalcommits");

const allowedScopes = ["@jcmariscal/demo-vite"]; // Cambia esto según el scope de tu paquete

module.exports = {
  ...conventionalChangelogConventionalCommits,
  writerOpts: {
    ...conventionalChangelogConventionalCommits.writerOpts,
    transform: (commit, context) => {
      const scope = commit.scope?.trim();

      // Si el scope no es permitido, no se incluye en el changelog
      if (!scope || !allowedScopes.includes(scope)) {
        return null;
      }

      // Si el preset original tiene su propia transform, la usamos
      if (
        typeof conventionalChangelogConventionalCommits.writerOpts.transform ===
        "function"
      ) {
        return conventionalChangelogConventionalCommits.writerOpts.transform(
          commit,
          context
        );
      }

      // Si no tiene, devolvemos el commit como está
      return commit;
    },
  },
};
