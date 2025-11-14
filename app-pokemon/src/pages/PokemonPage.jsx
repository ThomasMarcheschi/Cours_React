import React from "react";
import PokemonComponent from "../components/PokemonComponent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function PokemonPage() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonComponent />
    </QueryClientProvider>
  );
}

export default PokemonPage;
