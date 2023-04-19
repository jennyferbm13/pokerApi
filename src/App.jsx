import { useState, useEffect } from "react";
import "./App.css";

function App() {
  let random = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
  let url = `https://pokeapi.co/api/v2/pokemon/${random}`; // Construye la URL de la petición

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      {pokemon && <p>{pokemon.name}</p>}
      {pokemon && <img src={pokemon.sprites.front_default}></img>}
      {pokemon &&
        pokemon.types.map((type) => <li key={pokemon.id}>{type.type.name}</li>)}
    </div>
  );
}

export default App;
