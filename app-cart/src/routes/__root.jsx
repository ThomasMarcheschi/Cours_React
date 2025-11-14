import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <>
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/catalogue" className="[&.active]:font-bold">
        Catalogue
      </Link>
      <Link to="/category/$name" className="[&.active]:font-bold">
        Category
      </Link>
      <Link to="/pokemon/$name" className="[&.active]:font-bold">
        Pokemon
      </Link>
      <Link to="/pokedex" className="[&.active]:font-bold">
        Pokedex
      </Link>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools position="bottom-right" />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
