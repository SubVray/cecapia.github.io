const { Schema, model } = require("mongoose");

const pokemonSchema = new Schema(
  {
    uid: {
      type: String,
    },
    namePokemon: {
      type: String,
    },
    picture: {
      type: String,
    },
    backPicture: {
      type: String,
    },
    type: {
      type: Object,
    },
    idPokemon: {
      type: String,
    },
    move: [
      {
        type: Object,
      },
    ],
    stats: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Pokemon", pokemonSchema);
