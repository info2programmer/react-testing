import { test, expect } from "vitest";
import { fireEvent, render, screen } from '@testing-library/react';
import App from "../App";
import '@testing-library/jest-dom';


test("on click event testing", () => {
    render(<App />);
    const button = screen.getByRole("button") as HTMLButtonElement;
    fireEvent.click(button);
    expect(screen.getByText("Hello")).toBeInTheDocument();
    // expect(button).toBeInTheDocument();
    // expect(button).toHaveTextContent("Click Me");
});