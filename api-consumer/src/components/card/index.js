import React, { useState, useEffect } from 'react';

import './styles.css';

export const Card = ({ url }) => {
    const [error, setError] = useState();
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        if (!url) return;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setPokemon(data)
                }
            })
            .catch(e => setError(e.message))
    }, [url]);

    return (
        <div className="card">
            {error ? <div> {error} </div> : null}
            {!pokemon && !error ? <div>Loading...</div> : null}
            {pokemon ? (
                <React.Fragment>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <div className="card-container"><b>#</b>{pokemon.order} </div>
                    <div className="card-container"> {pokemon.name} </div>
                    <div className="card-container-types">
                        {pokemon.types.map(({ type }) => (
                            <p key={type.name}> {type.name} </p>
                        ))}
                    </div>
                </React.Fragment>
            ) : null}
        </div>
    )
}

