import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CharacterList from './characterList'


const App = () => {
 const [characters, setCharacters] = useState([])

 useEffect(() => {
  axios.get(`https://swapi.dev/api/people`)
  .then(({data}) => {
    setCharacters(data);
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
}, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      <CharacterList characters={characters}/>
      
    </div>
  );
}

export default App;
