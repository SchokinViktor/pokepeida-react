import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './assets/styles/index.scss';
import SplashScreen from './components/splash_screen/SplashScreen';
import Layout from './layouts/Layout';
import Pokedex from './pages/pokedex/Pokedex';
import NotFound from './pages/NotFound/NotFound';
const PokemonDetail = React.lazy(() => import('./pages/pokemon_detail/PokemonDetail'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' exact={true} element={<Layout />}>
          <Route path='/' exact={true} element={<Pokedex />} />
          <Route
            exact={true}
            path='/pokemon/:id'
            element={
              <Suspense fallback={<SplashScreen />}>
                <PokemonDetail />
              </Suspense>
            }
          />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
