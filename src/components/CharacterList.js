import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState([]);
  const [filterData, updateData] = useState([]);

  const searchData = charactersArry => {
      updateData(charactersArry)
  };

  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
        console.log(res.data.results)
        setCharacter(res.data.results);
        updateData(res.data.results)
    })
    .catch(error => {
        console.log("an Error", error)
    })
  }, []);

  return (
    <section className="character-list">
        <div>
            <h2>Characters </h2>
        </div>
        <Link to={"/"}>
        Home
        </Link>
        <SearchForm search={searchData} characters={characters} />
        {filterData.map( character => {
            return <CharacterCard character={character} />
        })}

    </section>
  );
}
