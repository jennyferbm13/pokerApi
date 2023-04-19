import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    refresh();
  }, []);

  function refresh() {
    const random = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
    const url = `https://pokeapi.co/api/v2/pokemon/${random}`; // Construye la URL de la petición
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="App">
      <div className="container">
        <div className="ladoIzquierdo">
          {pokemon && (
            <img
              src={pokemon.sprites.front_default}
              alt="Imagen de un pokemon aletorio sacado de la API https://pokeapi.co/api/v2/pokemon/{random}"
            ></img>
          )}
        </div>

        <div className="ladoDerecho">
          {pokemon && <p>{pokemon.name}</p>}
          {pokemon &&
            pokemon.types.map((type) => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
        </div>
      </div>
      <button className="refresh" onClick={refresh}>
        Refrescar
      </button>
    </div>
  );
}

export default App;
