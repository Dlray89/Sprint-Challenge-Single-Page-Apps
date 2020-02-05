import React from "react";
import styled from "styled-components";

const WrapperHeader = styled.header`
background: grey;
text-align: center;
color: white;
padding:3%;
width: 80%;
margin: 3% auto;
border-radius: 20px;
` 
//styling up top
export default function Header() {
  return (
    <WrapperHeader className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </WrapperHeader>
  );
}
