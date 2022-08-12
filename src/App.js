import React from "react";
import { Route, Routes } from "react-router-dom";

import "./assets/styles/index.scss";
import Layout from "./layouts/Layout";
import Pokedex from "./pages/pokedex/Pokedex";
import PokemonDetail from "./pages/pokemon_detail/PokemonDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Pokedex />} />
          <Route path='/:id' element={<PokemonDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
