import "./App.css";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
//import characters from './data.js';
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  let [characters, setCharacters] = useState([]);

  function onSearch(id) {
    for (const character of characters) {
      if (character.id === parseInt(id))
        return window.alert("El personaje ya esta agregado!");
    }
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters([...characters, data]);
        } else {
          window.alert("¡No hay personajes con este ID");
        }
      })
      .catch(() => window.alert("¡No hay personajes con este ID"));
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => parseInt(id) != character.id)
    );
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards onClose={onClose} characters={characters} />
    </div>
  );
}

export default App;
