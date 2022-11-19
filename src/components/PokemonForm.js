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
    setFormData({
      ...formData,
      [key]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "content-Type":"application/json",
      },
      body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((data) => onAddPokemon(data))
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
            id="sprites"
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
          />
          <Form.Input
            id="sprites"
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
