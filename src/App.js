import React from "react";
import { Route, Routes } from "react-router-dom";

import "./assets/styles/index.scss";
// import SplashScreen from "./components/splash_screen/SplashScreen";
import Layout from "./layouts/Layout";
// import Home from "./pages/home/Home";
import Pokedex from "./pages/pokedex/Pokedex";
import PokemonDetail from "./pages/pokemon_detail/PokemonDetail";
// const Layout = React.lazy(() => import("./layouts/Layout"));
// const Pokedex = React.lazy(() => import("./pages/pokedex/Pokedex"));
// const PokemonDetail = React.lazy(() =>
//   import("./pages/pokemon_detail/PokemonDetail")
// );

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path='/' element={<Pokedex />} />
          <Route path='/:id' element={<PokemonDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
