const pokemonControl = {};

const Pokemon = require("../models/Pokemons.model");
const User = require("../models/Users.model");

// obtiene todas las notas
pokemonControl.getPokemons = async (req, res) => {
  const pokemon = await Pokemon.find();
  res.json(pokemon);
};
pokemonControl.getUserPokemons = async (req, res) => {
  const user = req.params.id;
  const pokemons = await Pokemon.find({ uid: user });
  res.json(pokemons);
};

pokemonControl.getPokemon = async (req, res) => {
  const pokemon = await Pokemon.findOne({ _id: req.params.id });
  res.json(pokemon);
};


pokemonControl.pokemonRegister = async (req, res) => {
  const {
    uid,
    namePokemon,
    picture,
    backPicture,
    type,
    idPokemon,
    move,
    stats,
  } = req.body;

  const newPokemon = new Pokemon({
    uid,
    namePokemon,
    picture,
    backPicture,
    type,
    idPokemon,
    move,
    stats,
  });
  await newPokemon.save();

  res.json({ message: "Pokemon created" });
};

pokemonControl.deletePokemon = async (req, res) => {
  await Pokemon.findByIdAndDelete(req.params.id);
  res.json({ message: "Pokemon deleted" });
};

module.exports = pokemonControl;
