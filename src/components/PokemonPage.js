import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ pokemon }) {

  const [search, setSearch] = useState("")

  function searchPokemon(newSearch) {
    return setSearch(newSearch)
  }

  const filteredPokemon = pokemon.filter((poke) => {
    let result = poke.name.toLowerCase().includes(search);
    return result
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm/>
      <br />
      <Search search={search} onSearch={searchPokemon}/>
      <br />
      <PokemonCollection pokemon={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
