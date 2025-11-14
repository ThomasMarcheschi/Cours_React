import { useQuery } from "@tanstack/react-query";

function PokemonComponent() {
  const url_api = "https://pokeapi.co/api/v2/pokemon?limit=1000";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => {
      const response = await fetch(url_api);
      const jsonData = await response.json();

      // Récupérer les détails de chaque Pokémon
      const pokemonsWithDetails = await Promise.all(
        jsonData.results.map((pokemon) =>
          fetch(pokemon.url).then((r) => r.json())
        )
      );

      return pokemonsWithDetails;
    },
  });

  if (isLoading) return <p>Chargement...</p>;
  if (isError) return <p>Erreur</p>;

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {data.map((pokemon, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ccc",
            display: "flex",
            padding: "10px",
            flexDirection: "column",
            marginBottom: "10px",
            justifyContent: "center",
          }}
        >
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>ID: {pokemon.id}</p>
          <p>Hauteur: {pokemon.height}</p>
          <p>Poids: {pokemon.weight}</p>
          <p>Types: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
export default PokemonComponent;
