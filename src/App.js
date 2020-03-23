import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import { Route, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage"
import SearchForm from "./components/SearchForm"

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <SearchForm />
        <nav>
          <Link to="/">Home</Link>
          <br></br>
          <br></br>
          <br></br>
          <Link to="/CharacterList">Characters</Link>
          <br></br>
          <br></br>
          <br></br>
        </nav>

        <Route exact path="/" component={WelcomePage} />
        <Route path="/CharacterList" component={CharacterList} />

      <Header />
      <CharacterList />
    </main>
  );
}
