import "./App.css";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
//import characters from './data.js';
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route} from "react-router-dom"
import About from "./components/About.jsx"
import Detail from "./components/Detail";

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
      characters.filter((character) => parseInt(id) !== character.id)
    );
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/home" element={<Cards onClose={onClose} characters={characters} />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
