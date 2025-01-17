import React, { useEffect, useState } from "react";
import PokemonPage from "./PokemonPage";

function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pokemon?_embed=sprites")
    .then((res) => res.json())
    .then((data) => {
      setPokemon(data)
      
    //   const spriteArr = data.map(pokemon => {
    //     return {
    //         id: pokemon.id,
    //         pokemonId: pokemon.id,
    //         front: pokemon.sprites.front,
    //         back: pokemon.sprites.back
    //     }
    // })
    
    // const spritesObj = {
    //     arr: spriteArr
    // }
    
    // fetch("http://localhost:3001/pokemon" , {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     },
    //     body: JSON.stringify(spritesObj)
    // })
    
    // console.log("My pokemon array: ", JSON.stringify(spriteArr))
    })
  }, [])

  // console.log(pokemon)

  function addPokemon(newPokemon) {
    const updatedPokemons = [...pokemon, newPokemon]
    setPokemon(updatedPokemons)
  }

  return (
    <div className="App">
      <PokemonPage onAddPokemon={addPokemon} pokemon={pokemon}/>
    </div>
  );
}

export default App;
