import { createFileRoute } from "@tanstack/react-router";
import Catalogue from "../pages/Catalogue.jsx";

export const Route = createFileRoute("/catalogue")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Catalogue />
    </div>
  );
}
