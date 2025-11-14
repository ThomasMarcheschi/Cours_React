import React from "react";
import { Route } from "../routes/pokemon.$name.jsx";

function PokemonList() {
  const pokemon = Route.useLoaderData();
  const { name } = Route.useParams();

  return (
    <div>
      <h1>{name}</h1>
      <img src={pokemon.sprites.front_default} alt={name} />
      <ul>
        <li>Poids : {pokemon.weight}</li>
        <li>Taille : {pokemon.height}</li>
        <li>Types : {pokemon.types.map((t) => t.type.name).join(", ")}</li>
      </ul>
    </div>
  );
}

export default PokemonList;
