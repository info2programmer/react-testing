import { expect, test } from "vitest";
import sum from "./sum";

test("testing for sum function", () => {
  expect(sum(2, 3)).toBe(5);
});
