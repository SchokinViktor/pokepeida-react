import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

import PokemonsList from "./PokemonsList";

const PokedexCards = ({ pokemonData, setPokemonData }) => {
  //Fetching Pokemons
  const [isLoading, setLoading] = useState(true);
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=151`;

  const getPokemons = async (data) => {
    data.map(async (item) => {
      const result = await axios.get(item.url);
      setPokemonData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(url);
    //console.log(response.data);
    getPokemons(response.data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <div className='container'>
        <PokemonsList pokemonData={currentItems} isLoading={isLoading} />

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
    </section>
  );
};

export default PokedexCards;
