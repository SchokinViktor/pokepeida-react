import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './assets/styles/index.scss';
import SplashScreen from './components/splash_screen/SplashScreen';
import Layout from './layouts/Layout';
import Pokedex from './pages/pokedex/Pokedex';
const PokemonDetail = React.lazy(() => import('./pages/pokemon_detail/PokemonDetail'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Pokedex />} />
          <Route
            path='/:id'
            element={
              <Suspense fallback={<SplashScreen />}>
                <PokemonDetail />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
