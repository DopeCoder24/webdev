// import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import axios from "axios";
import { useEffect, useState } from "react";
import Pokemoncard from "../components/Pokemoncard";

const Pokemonlist = () => {
  let [pokelist, setpokelist] = useState([]);
  const getpokemonlist = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    console.log(response.data.results);
    setpokelist(response.data.results);
  };
  useEffect(() => {
    getpokemonlist();
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {pokelist.map((currentpokemon) => (
        <Pokemoncard url={currentpokemon.url} />
      ))}
    </div>
  );
};
export default Pokemonlist;
