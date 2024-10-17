const pokemons = [
    { id: 1, name: 'Bulbassauro', tipo: 'Vegetal/Veneno' },
    { id: 2, name: 'Squirtle', tipo: 'Água' },
    { id: 3, name: 'Charmander', tipo: 'Fogo' },
];

const getPokemons = () => pokemons;
const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));
const createPokemon = (name, tipo) => pokemons.push({ id: pokemons.length + 1, name, tipo });

module.exports = { getPokemons, getPokemonById, createPokemon };
