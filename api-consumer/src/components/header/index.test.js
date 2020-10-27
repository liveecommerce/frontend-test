import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './index';

test('renders <Header /> and shows the correct pokemons length', () => {
    const { rerender } = render(<Header />);

    expect(screen.getByText(/pokedex \(0 - 151\)/gi)).toBeInTheDocument();

    const mockedpokemons = ['pikachu', 'eevee'];
    rerender(<Header pokemons={mockedpokemons} />);

    expect(screen.getByText(/pokedex \(2 - 151\)/gi)).toBeInTheDocument();
});
