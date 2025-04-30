import { test, expect, beforeAll, afterAll, beforeEach } from "vitest";
import { fireEvent, render, screen } from '@testing-library/react';
import App from "../App";
import '@testing-library/jest-dom';
import cleanDB from "../service";

beforeAll(() => {
    console.log("******Before All******");
})


beforeEach(() => {
    cleanDB()
})

test("on click event testing", () => {
    console.log("0")
    render(<App />);
    const button = screen.getByRole("button") as HTMLButtonElement;
    fireEvent.click(button);
    expect(screen.getByText("Hello")).toBeInTheDocument();
    // expect(button).toBeInTheDocument();
    // expect(button).toHaveTextContent("Click Me");
});


test("on click event testing 1", () => {
    console.log("1")
    render(<App />);
    const button = screen.getByRole("button") as HTMLButtonElement;
    fireEvent.click(button);
    expect(screen.getByText("Hello")).toBeInTheDocument();
    // expect(button).toBeInTheDocument();
    // expect(button).toHaveTextContent("Click Me");
});


test("on click event testing 2", () => {
    console.log("2")
    render(<App />);
    const button = screen.getByRole("button") as HTMLButtonElement;
    fireEvent.click(button);
    expect(screen.getByText("Hello")).toBeInTheDocument();
    // expect(button).toBeInTheDocument();
    // expect(button).toHaveTextContent("Click Me");
});


// afterEach(() => {
//     console.log("******After EachafterEach******");
// })


afterAll(() => {
    console.log("******After All******");
})
