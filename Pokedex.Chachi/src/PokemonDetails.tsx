import { useParams } from "react-router-dom";
import axios from "axios";
import { Pokemon, PokemonFromApi } from "./assets/models/models";

export const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=151";

export const getImage = (number: number): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
};
