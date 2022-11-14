import React, { useEffect, useState } from "react";
import PokemonPage from "./PokemonPage";

function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((res) => res.json())
    .then((data) => setPokemon(data))
  }, [])

  console.log(pokemon)

  return (
    <div className="App">
      <PokemonPage pokemon={pokemon}/>
    </div>
  );
}

export default App;
