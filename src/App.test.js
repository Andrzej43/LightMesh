// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LightMesh title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LightMesh/i);
    expect(titleElement).toBeInTheDocument();
});
