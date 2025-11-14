import { createFileRoute } from "@tanstack/react-router";
import Pokemon from "../pages/Pokemon.jsx";

export const Route = createFileRoute("/pokemon/$name")({
  loader: async ({ params }) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.name}`
    );
    if (!response.ok) {
      throw new Error("Pokémon introuvable");
    }
    return response.json();
  },
  component: Pokemon,
});
