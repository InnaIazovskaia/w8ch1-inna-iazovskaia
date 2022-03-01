import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import PokemonCard from "../components/PokemonCard/PokemonCard";

const PokemonsCSR = () => {
  const [pokemonsList, setPokemonsList] = useState([]);

  useEffect(
    () =>
      (async () => {
        const response = await fetch(process.env.NEXT_PUBLIC_API);

        const { results: pokemons } = await response.json();

        setPokemonsList(
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))
        );
      })(),
    []
  );

  return (
    <>
      <h2>Pokemons list CSR</h2>
      <ul className={styles.pokemons_container}>{pokemonsList}</ul>
    </>
  );
};

export default PokemonsCSR;
