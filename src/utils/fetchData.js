import axios from 'axios';

const fetchData = async (url) => {
    const response = await axios.get(url);
    if (response == null) {
        return 'No data'
    }
    return response;
    // getPokemons(response.data.results);
}

export default fetchData