import React from "react";

export default function CharacterCard(props) {
  return (<div>
  <h2>Name: {props.character.name}</h2>
  <h3>Gender: {props.character.gender}</h3>
  </div>
  )
}
