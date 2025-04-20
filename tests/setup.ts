// tests/setup.js
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom"; // adds toBeInTheDocument, etc.

afterEach(() => {
  cleanup();
});
