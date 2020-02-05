import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import styled from "styled-components";


const StyledHeader = styled.h2`
text-align: center;
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  console.log(characters)
  const [query, setQuery] = useState('');
  console.log('I am query', characters)


  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
        // console.log(res.data.results)
        const list = res.data.results.filter( item => {
            return item.name.toLowerCase().includes(query.toLowerCase());
        })
        // const list = res.data.results;

        setCharacters(list);
       
    })
    .catch(error => {
        console.log("an Error", error)
    })
  }, [query]);

  return (
    <StyledHeader className="character-list">
        <div>
            <h2>Characters </h2>
        </div>
        <Link to={"/"}>
        Home
        </Link>

        <SearchForm setQuery={setQuery} />
        {characters.map( character => {
            return <CharacterCard character={character} />
        })}

    </StyledHeader>
  );
}
