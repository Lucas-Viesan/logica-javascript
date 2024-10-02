const getPokemons = async () => {
  const result = await fetch("https://pokeapi.co/api/v2/pokemon");
  return result.json();
};

const fetchPokemons = async () => {
  const pokemons = await getPokemons();
  console.log(pokemons);
};

fetchPokemons();
