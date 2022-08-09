import React from "react";
import questionImg from "../assets/images/question.png";

export const definePokemonSprite = (pokemon, ifPixel = true) => {
  const animPixelSprite =
    pokemon.sprites.versions["generation-v"]["black-white"].animated
      .front_default;
  const staticPixelSprite =
    pokemon.sprites.versions["generation-v"]["black-white"].front_default;
  const defaultSprite = pokemon.sprites.other["official-artwork"].front_default;

  if (ifPixel) {
    if (animPixelSprite)
      return (
        <img
          className='pokemon-sprite'
          src={animPixelSprite}
          alt='Pokemon Sprite'
        />
      );
    else if (staticPixelSprite)
      return (
        <img
          className='pokemon-sprite'
          src={staticPixelSprite}
          alt='Pokemon Sprite'
        />
      );
  }
  if (defaultSprite)
    return (
      <img
        className='pokemon-sprite'
        src={defaultSprite}
        alt='Pokemon Sprite'
      />
    );
  else
    return (
      <img
        // className='pokedex-card__img-undefiend'
        src={questionImg}
        alt='Undefiend Pokemon'
      />
    );
};
