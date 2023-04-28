import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
//import characters from './data.js';
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import About from "./components/About.jsx"
import Detail from "./components/Detail";
import Form from "./components/Form/Form";
import styles from "./App.css"
import Favorites from "./components/Favorites/Favorites";

function App() {
const navigate = useNavigate();
const [access, setAccess] = useState(false);
// const EMAIL = 'lien.argentina@gmail.com', PASSWORD = '123123';

useEffect(() => {
  !access && navigate('/');
}, [access]);

  
let [characters, setCharacters] = useState([]);

//   function login(userData) {
//     if (userData.password === PASSWORD && userData.email === EMAIL) {
//        setAccess(true);
//        navigate('/home');
//     }
//  }
async function login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';
   try{
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
      !access && window.alert("No estas registrado mostro, 2 lucas y entras.")
    }
    catch(error){
      console.log("Error en axios login")
    }
}

//const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const URL_BASE = "http://localhost:3001/rickandmorty/character"
//const API_KEY = "17178412455e.75be543753360638a34b"

async function onSearch(id) {
    for (const character of characters) {
      if (character.id === +id)
        return window.alert("El personaje ya esta agregado!");
    } try{
      const {data} = await axios(`${URL_BASE}/${id}`) 
        if (data.name) {
          setCharacters([...characters, data]);
        }
      }
      catch(error){
        window.alert("¡No hay personajes con este ID")};
      }

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => id !== character.id)
    );
  };

  const {pathname} = useLocation()



  return (
    <div className="App">
      {pathname !=="/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login}/>}></Route>
        <Route path="/home" element={<Cards onClose={onClose} characters={characters} />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
        <Route path="/favorites" element={<Favorites onClose={onClose}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
