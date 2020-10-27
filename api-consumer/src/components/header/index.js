import React from 'react';

import './styles.css';

export const Header = ({ pokemons = [] }) => {
    return (
        <div className="header">
            <p>Pokedex ({pokemons.length} - 151)</p>
        </div>
    )
}
