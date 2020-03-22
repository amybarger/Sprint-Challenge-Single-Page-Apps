import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characterState, setCharacterState] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios
      .get(`https://rickandmortyapi.com/api/`)
      .then(res => {
        setCharacterState(res.data)
      })
      .catch(error => {
        console.error("Error message", error);
      })
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
