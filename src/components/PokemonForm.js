import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {

  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  })

  function handleChange(event) {
    const key = event.target.id

    if (key === "front" || key === "back") {
      setFormData({
        ...formData,
        sprites: {...formData.sprites, [key]: event.target.value}
      })
    }else {
      setFormData({
        ...formData,
        [key]: event.target.value
      })
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "content-Type":"application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        hp: formData.hp
      })
    })
    .then((res) => res.json())
    .then((pokemon) => {
      fetch("http://localhost:3001/sprites", {
        method: "POST",
        headers: {
          "content-Type":"application/json",
        },
        body: JSON.stringify({
          ...formData.sprites, 
          pokemonId: pokemon.id
        })
      })
      .then((res) => res.json())
      .then((sprite) => {
        onAddPokemon(
          {
            id: pokemon.id,
            name: pokemon.name,
            hp: pokemon.hp,
            sprites: [sprite]
          }
        )
      })
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input id="name" fluid label="Name" placeholder="Name" name="name" onChange={handleChange}/>
          <Form.Input id="hp" fluid label="hp" placeholder="hp" name="hp" onChange={handleChange}/>
          <Form.Input
            id="front"
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
          />
          <Form.Input
            id="back"
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
