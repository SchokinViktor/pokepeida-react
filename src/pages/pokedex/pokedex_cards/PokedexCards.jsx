import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

// import PokemonCard from "../../../components/pokedex_card/PokedexCard";
import PokemonsList from "./PokemonsList";

const PokedexCards = ({ pokemonData, setPokemonData }) => {
  const [isLoading, setLoading] = useState(true);

  const url = `https://pokeapi.co/api/v2/pokemon/?limit=151`;

  const getPokemons = async (data) => {
    data.map(async (item) => {
      const result = await axios.get(item.url);
      //console.log(result);
      setPokemonData((state) => {
        //console.log(result.data);
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  const [pageRange, setPageRange] = useState(5);
  const [marginsPages, setMarginsPages] = useState(1);

  const changePaginationRange = () => {
    const {innerWidth: windowWidth} = window;
    if (windowWidth < 768) {
      setPageRange(2)
    } 
  }

  

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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(url);
      //console.log(response.data);
      getPokemons(response.data.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section className='pokedex-cards'>
      <div className='container'>
        <PokemonsList pokemonData={currentItems} isLoading={isLoading} />
        {/* <ul className='pokedex-cards__cards-list'>
          {currentPokemons.map((item, i) => {
            return (
              <li key={i} className='pokedex-cards__card-item'>
                <PokemonCard className='' pokemon={item} />
              </li>
            );
          })}
        </ul> */}

        <ReactPaginate
          breakLabel='...'
          nextLabel='>'
          onPageChange={handlePageClick}
          pageRangeDisplayed={pageRange}
          marginPagesDisplayed = {1}
          pageCount={pageCount}
          previousLabel='<'
          renderOnZeroPageCount={null}
          containerClassName = 'pokedex-pagination'
          pageClassName = 'pokedex-pagination__list-item'
          activeClassName = ''
          pageLinkClassName = 'pokedex-pagination__pagination-page'
          activeLinkClassName = 'pokedex-pagination__pagination-page_active'
          breakLinkClassName = 'pokedex-pagination__pagination-page break-link'
          previousLinkClassName = 'pokedex-pagination__pagination-btn'
          nextLinkClassName = 'pokedex-pagination__pagination-btn'
        />
      </div>
    </section>
  );
};

export default PokedexCards;
