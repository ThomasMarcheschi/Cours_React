import { createFileRoute } from "@tanstack/react-router";
import Panier from "../pages/Panier";
export const Route = createFileRoute("/")({
  component: Panier,
});
