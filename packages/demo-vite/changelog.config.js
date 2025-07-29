const conventionalCommits = require("conventional-changelog-conventionalcommits");

module.exports = async (...args) => {
  const preset = await conventionalCommits(...args);
  //   const targetScope = process.env.CHANGELOG_SCOPE;
  const targetScope = "@jcmariscal/demo-vite";

  const originalTransform = preset.writerOpts.transform;

  preset.writerOpts.transform = (commit, context) => {
    // Filtro por scope
    if (targetScope && commit.scope !== targetScope) {
      return;
    }

    // Asegúrate de aplicar también la transformación original
    return originalTransform ? originalTransform(commit, context) : commit;
  };

  return preset;
};
