export default {
  transform: (commit, context) => {
    const pkgScope = "@jcmariscal/demo-vite"; // Ajusta esto según el paquete

    if (commit.scope !== pkgScope) {
      return; // ❌ descarta el commit
    }

    return commit; // ✅ incluye el commit en el changelog
  },
};
