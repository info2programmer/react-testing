import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from './App';

describe('App component', () => {
    test('renders first react test case', () => {
        render(<App />);
        const testCaseElement = screen.getByText(/First react test case/i);
        const testCaseElement2 = screen.getByText(/Saikat Bhadury/i);
        const title = screen.getByTitle(/logo react/i);
        expect(title).toBeDefined();
        expect(testCaseElement).toBeDefined();
        expect(testCaseElement2).toBeDefined();
    });
})

describe('App component', () => {
    test('testing input box', () => {
        render(<App />);
        const checkInput = screen.getByRole('textbox');
        expect(checkInput).toBeDefined();
        expect(checkInput).toHaveProperty('type', 'text');
        expect(checkInput).toHaveProperty('placeholder', 'enter username');
        expect(checkInput).toHaveProperty('name', 'txtUserName');
        expect(checkInput).toHaveProperty('value', 'Saikat');
        // expect(checkInput).toHaveAttribute('placeholder', 'enter username');
    });
})

// describe('App component', () => {
//     test('renders Vite + React heading', () => {
//         // Render the App component
//         render(<App />);

//         // Find the heading element by text content
//         // The 'i' flag makes the match case-insensitive
//         const headingElement = screen.getByRole('heading', {
//             name: /vite \+ react/i,
//         });

//         // Assert that the heading element is in the document
//         expect(headingElement).toBeDefined();
//     });
// });