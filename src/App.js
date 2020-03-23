import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <main data-testid='app'>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/CharacterList">Characters</Link>
      </nav>
      <Route exact path="/" component={App} />
      <Route path="/CharacterList" component={CharacterList} />
      <Header />
      <CharacterList />
    </main>
  );
}
