import { test, expect } from "vitest";
import { fireEvent, render, screen } from '@testing-library/react';
import App from "./App";


test("on change event testing", () => {
    render(<App />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "a" } });
    expect(input.value).toBe("atest");
});