const fs = require("fs");
const path = require("path");

const packageDir = path.join(__dirname, "../packages/demo-vite");
const distDir = path.join(packageDir, "dist");

// Archivos que deben copiarse a dist/
const filesToCopy = ["package.json", "README.md", "LICENSE"];

// Asegurarse que el directorio dist existe
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copiar cada archivo
filesToCopy.forEach((file) => {
  const source = path.join(packageDir, file);
  const destination = path.join(distDir, file);

  if (fs.existsSync(source)) {
    fs.copyFileSync(source, destination);
    console.log(`Copied ${file} to dist/`);
  }
});
