import React from "react";
import { Route } from "../routes/pokedex";
function PokedexList() {
  const pokemons = Route.useLoaderData();
  console.log(pokemons);
  return (
    <div>
      {pokemons.results.map((pokemon, index) => {
        return (
          <div key={index} className="my-2">
            <h1>{pokemon.name}</h1>
            <a href={`/pokemon/${pokemon.name}`}>{pokemon.url}</a>
          </div>
        );
      })}
    </div>
  );
}

export default PokedexList;
