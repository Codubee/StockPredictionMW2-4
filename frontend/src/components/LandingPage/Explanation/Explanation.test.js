import { render, screen } from '@testing-library/react';
import Explanation from './Explanation';

test('renders stock prediction title', () => {
    render(<Explanation />);
    const titleElement = screen.getByText(/Stock Prediction/i);
    expect(titleElement).toBeInTheDocument();
});

test('renders Fall 2020', () => {
    render(<Explanation />);
    const dateElement = screen.getByText(/Fall 2020/i);
    expect(dateElement).toBeInTheDocument();
});