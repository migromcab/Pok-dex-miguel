import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Pokemon, PokemonFromApi } from './models';

export const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

export const getImage = (number: number): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
};


export const PokemonDetails = (pokemon: PokemonFromApi[]): Pokemon[] => {
  return pokemon.map((pokemonItem: PokemonFromApi, index: number) => {
    return {
      name: pokemonItem.name,
      imageUrl: getImage(index + 1),
      id: index + 1,
    };
  });
};


export const PokemonDetails2 = () => {
  const [details, setDetails] = useState();

  
  useEffect(() => {
    const fetchPokemons = async () => {
      const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
      console.log('llamando a la api');
      const response = await axios.get(apiURL);
      setDetails(PokemonDetails(response.data.results));
    };

    fetchPokemons();
  }, []);


  const handlePokemonClick = (pokemonId: number) => {
   setDetails();


  
return (
  <div>
    {pokemon.map((pokemon: Pokemon) => (
      <div>
        
         <h1>Información del pokemon {pokemonId}</h1>
         <img src={pokemon.imageUrl.id} />
         <p>{pokemon.species}</p>
         <p>{pokemon.stats}</p>
          <p>{pokemon.generation}</p>


      </div>
    )
  </div>
))

  

}
}