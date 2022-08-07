import React from "react";

import PokedexHeroImage from "../../../assets/images/pikachu-hero.png";
import PokedexHeroIcon from "../../../assets/images/pokeball-icon-hero.svg";
import ThreeDButton from "../../../components/buttons/three_d_button/ThreeDButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const PokedexHero = () => {
  return (
    <section className='pokedex-hero'>
      <div className='pokedex-hero__container container'>
        <div className='pokedex-hero__col'>
          <div className='pokedex-hero__img-holder'>
            <div className='pokedex-hero__icon-holder'>
              <img src={PokedexHeroIcon} alt='pokeball' />
            </div>
            <img src={PokedexHeroImage} alt='Pikachu' />
          </div>
        </div>
        <div className='pokedex-hero__col'>
          <div className='pokedex-hero__text-holder'>
            <h1 className='pokedex-hero__title'>
              Welcome to <br />
              <span>Pokepedia!</span>
            </h1>
            <p className='pokedex-hero__text'>
              The best tool for finding pokemon you are interested in!
            </p>
            <ThreeDButton
              buttonText='Explore Pokedex!'
              className='pokedex-hero__btn'
            ></ThreeDButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokedexHero;
