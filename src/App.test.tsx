import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from './App';

describe('App component', () => {
    test('renders Vite + React heading', () => {
        // Render the App component
        render(<App />);

        // Find the heading element by text content
        // The 'i' flag makes the match case-insensitive
        const headingElement = screen.getByRole('heading', {
            name: /vite \+ react/i,
        });

        // Assert that the heading element is in the document
        expect(headingElement).toBeDefined();
    });
});