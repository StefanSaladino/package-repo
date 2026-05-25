import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.js"),
        advanced: resolve(__dirname, "src/advanced.js")
      },
      formats: ["es"],
      fileName: (_, entryName) => `${entryName}.js`,
      cssFileName: "styles"
    },
    outDir: "dist",
    emptyOutDir: true
  }
});