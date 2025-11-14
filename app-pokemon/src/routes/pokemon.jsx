import { createFileRoute } from "@tanstack/react-router";
import PokemonPage from "../pages/PokemonPage";

export const Route = createFileRoute("/pokemon")({
  component: PokemonPage,
});
