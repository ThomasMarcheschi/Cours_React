import { createFileRoute } from "@tanstack/react-router";
import App from "../App";
export const Route = createFileRoute("/")({
  component: App,
});

// composant par défaut dans la doc
// function Index() {
//   return (
//     <div className="p-2">
//       <h3>Welcome Home!</h3>
//     </div>
//   );
// }
