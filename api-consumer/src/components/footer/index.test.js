import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './index';

test('renders <Footer /> corretly', () => {
    render(<Footer />);

    const footertext = screen.getByText('Made with ♡ by Pietra');
    expect(footertext).toBeInTheDocument();
});
