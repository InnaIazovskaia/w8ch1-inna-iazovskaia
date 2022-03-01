import PokemonCard from "../components/PokemonCard/PokemonCard";

const PokemonSSG = ({ pokemons }) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API);

  const pokeAPI = await response.json();
  const pokemons = pokeAPI.results;
  return { props: { pokemons } };
};

export default PokemonSSG;
