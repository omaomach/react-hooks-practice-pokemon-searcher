import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poke }) {

  const [front, setFront] = useState(true)

  // setImage(poke.sprites.back)

  // const handleClick = () => {
  //   let front = poke.sprites.front
  //   let back = poke.sprites.back

  //   if (front) {
  //     return back
  //   }else if (back) {
  //     return front
  //   }

  // }

  // console.log(poke)

  return (
    <Card onClick={(event) => setFront(front => !front)}>
      <div>
        <div className="image" >
          <img src={front ? poke.sprites.front : poke.sprites.back} alt="oh no!"/>
        </div>
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
