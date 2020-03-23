import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characterState, setCharacterState] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then(res => {
        setCharacterState(res.data.results)
        console.log("working!", res);
      })
      .catch(error => {
        console.error("Error message", error);
      })
  }, []);

  return (
    <section className="character-list">
    
      {characterState.map(character => {
        console.log(characterState);
        return (
        <CharacterCard key={character.id}
        image={character.image}
        id={character.id}
        name={character.name}
        species={character.species}
        location={character.locations}
        />

      )})}
    </section>
  );
}
