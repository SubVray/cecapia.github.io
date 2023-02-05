const { Router } = require("express");
const router = Router();

const {
  getPokemons,
  pokemonRegister,
  deletePokemon,
  getUserPokemons,
  getPokemon,
} = require("../controllers/pokemons.controllers");

// get obtener
// post crear
// get ID  obtiene 1
// put actualizar
// delete borrar

router.route("/pokemons").get(getPokemons);
router.route("/pokemons/user/:id").get(getUserPokemons);
router.route("/add/pokemon").post(pokemonRegister);
router.route("/pokemon/:id").get(getPokemon);
router.route("/delete/pokemon/:id").delete(deletePokemon);

module.exports = router;
