const getConventionalChangelogPreset = require("conventional-changelog-conventionalcommits");

const allowedScopes = ["@jcmariscal/demo-vite"]; // ✅ Cambia aquí el scope del paquete actual

module.exports = async () => {
  const base = await getConventionalChangelogPreset();

  return {
    ...base,
    writerOpts: {
      ...base.writerOpts,
      transform: (commit, context) => {
        const scope = commit.scope?.trim();

        // ⛔️ Excluimos los commits fuera del scope deseado del changelog
        if (!scope || !allowedScopes.includes(scope)) {
          return null;
        }

        // ✅ Si el preset original tiene transform, usamos su salida
        if (typeof base.writerOpts.transform === "function") {
          return base.writerOpts.transform(commit, context);
        }

        return commit;
      },
    },
  };
};
