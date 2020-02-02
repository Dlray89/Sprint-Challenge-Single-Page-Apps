import React from "react";
import {Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header.js";


export default function App() {
  return (
    <main><Header />
    <Route exact path='/characters' component={WelcomePage} />
    <Route path='Characters' component={CharacterList} />
    </main>
  );
}
