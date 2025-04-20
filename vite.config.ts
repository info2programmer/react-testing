/// <reference types="vitest/config" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // enable describe(), it(), etc.
    environment: "jsdom", // simulate browser DOM
    setupFiles: "./tests/setup.ts",
  },
});
