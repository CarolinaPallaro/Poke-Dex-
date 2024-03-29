import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Pokemon, Pokemons, Items } from './pages'; 
import './global.css'

function App() {
  return (

    <Router>

    <div className="app">

     <Routes>
     <Route path="/pokemons/:name" element={<Pokemon />} />
     <Route path="/pokemons" element={<Pokemons />} />
     <Route path="/items" element={<Items />} />
     <Route path="/" element={<Pokemons />} />
     </Routes>  
    </div>
    
    </Router>
  );
}

export default App;
