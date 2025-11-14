import { createFileRoute } from "@tanstack/react-router";
import Pokedex from "../pages/Pokedex";

export const Route = createFileRoute("/pokedex")({
  loader: async ({ params }) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=1328`
    );
    if (!response.ok) {
      throw new Error("Pokémon introuvable");
    }
    return response.json();
  },
  component: Pokedex,
});
