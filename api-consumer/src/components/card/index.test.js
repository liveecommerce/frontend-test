import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './index';

test('renders <Card /> loading message', () => {
    render(<Card />);

    const loadingMessage = screen.getByText(/loading/i);
    expect(loadingMessage).toBeInTheDocument();
});
