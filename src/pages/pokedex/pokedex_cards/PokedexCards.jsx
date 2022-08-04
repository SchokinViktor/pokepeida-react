import React from "react";
import { useEffect, useState, useContext } from "react";
import ReactPaginate from "react-paginate";

import PokemonsList from "./PokemonsList";
import getPokemons from "../../../utils/getPokemons";
import fetchData from "../../../utils/fetchData";
import { Context } from "../pokedexContext";

const PokedexCards = () => {
  //using context
  const { pokemonData, setPokemonData, inputValue } = useContext(Context);

  //Fetching Pokemons
  const [isLoading, setLoading] = useState(true);

  const renderPokemons = async () => {
    setLoading(true);

    setPokemonData([]);
    const response = await fetchData(
      `https://pokeapi.co/api/v2/pokemon/?limit=500`
    );
    getPokemons(response.data.results, setPokemonData, inputValue);

    setLoading(false);
  };

  useEffect(() => {
    renderPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  //Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0); // index of the first item in currentp page
  const itemsPerPage = 12;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage; // index of the last item in current page
    setCurrentItems(pokemonData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(pokemonData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, pokemonData]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % pokemonData.length;
    setItemOffset(newOffset);
  };

  return (
    <section className='pokedex-cards'>
      {pokemonData.length !== 0 ? (
        <>
          <div className='container'>
            <PokemonsList pokemonData={currentItems} />
            <ReactPaginate
              breakLabel='...'
              nextLabel='>'
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              marginPagesDisplayed={1}
              pageCount={pageCount}
              previousLabel='<'
              renderOnZeroPageCount={null}
              containerClassName='pokedex-pagination'
              pageClassName='pokedex-pagination__list-item'
              activeClassName=''
              pageLinkClassName='pokedex-pagination__pagination-page'
              activeLinkClassName='pokedex-pagination__pagination-page_active'
              breakLinkClassName='pokedex-pagination__pagination-page break-link'
              previousLinkClassName='pokedex-pagination__pagination-btn'
              nextLinkClassName='pokedex-pagination__pagination-btn'
            />
          </div>
        </>
      ) : (
        <div>
          <h2 className='pokedex-cards__empty'>No Pokemons found</h2>
        </div>
      )}
    </section>
  );
};

export default PokedexCards;
