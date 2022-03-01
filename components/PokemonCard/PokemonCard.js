import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

const PokemonCard = ({ pokemon }) => {
  const [pokemonInfo, setPokemonInfo] = useState({});

  useEffect(
    () =>
      (async () => {
        const response = await fetch(pokemon.url);
        const body = await response.json();
        setPokemonInfo(body);
      })(),
    [pokemon.url]
  );

  return (
    <li className={styles.pokemon_container}>
      <h3 className={styles.pokemon_title}>{pokemon.name}</h3>
      {pokemonInfo.sprites && (
        <>
          <Image
            width="150"
            height="150"
            className={styles.pokemon_image}
            src={pokemonInfo.sprites.other.home.front_default}
            alt={pokemon.name}
          />
          <p>type: {pokemonInfo.types[0].type.name}</p>
          <p>ability: {pokemonInfo.abilities[0].ability.name}</p>
        </>
      )}
    </li>
  );
};

export default PokemonCard;
