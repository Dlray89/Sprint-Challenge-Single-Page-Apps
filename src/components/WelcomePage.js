import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeadingStyled = styled.header`
margin: 0 auto;
display: flex;
width: 86%;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 20px;
background:black;
color:white;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <HeadingStyled>
        <h1> Welcome to the ultimate fan site! </h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <br />
        <Link to={'/characters'}>View characters </Link>
      </HeadingStyled>
    </section>
  );
}
