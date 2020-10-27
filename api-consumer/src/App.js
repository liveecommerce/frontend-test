import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Card } from './components/card';

const pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon';
function buildUrl(limit, offset) {
  return `${pokeapiUrl}/?limit=${limit}&offset=${offset}`
}

const DEFAULT_LIMIT = 12;
const MAX_POKEMON_COUNT = 151;
function generateUrl(pokemons) {
  const numberOfPokemonsToReachLimit = MAX_POKEMON_COUNT - pokemons.length;
  function getLimit() {
    if (numberOfPokemonsToReachLimit <= 0) {
      return 0;
    }

    if (numberOfPokemonsToReachLimit >= DEFAULT_LIMIT) {
      return DEFAULT_LIMIT;
    }

    return numberOfPokemonsToReachLimit;
  }

  const limit = getLimit();
  const offset = pokemons.length;

  const url = numberOfPokemonsToReachLimit <= 0 ? null : buildUrl(limit, offset);

  return url;
}

export const App = () => {
  const [error, setError] = useState();
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState(() => generateUrl(pokemons));

  useEffect(() => {
    if (!url) {
      return;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data) {
          setPokemons((pokes) => pokes.concat(data.results));
        }
      })
      .catch(e => setError(e.message))
  }, [url]);

  const handleLoadMoreClick = () => {
    const nextUrl = generateUrl(pokemons);

    setUrl(nextUrl);
  };

  const shouldShowLoadMore = MAX_POKEMON_COUNT !== pokemons.length;

  return (
    <main>
      <Header pokemons={pokemons} />
      {error ? <div> {error} </div> : null}
      <div className="main__container">
        <div className="main__content">
          {pokemons.map((pokemon) => (
            <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          ))}
        </div>
        {shouldShowLoadMore ? (
          <button className="main__button" onClick={handleLoadMoreClick}>
            Load More
          </button>
        ) : null}
      </div>
      <Footer />
    </main>
  );
}



export default App;