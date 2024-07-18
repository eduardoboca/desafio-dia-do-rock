import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { NavbarRegisterResponse } from "./components/navbar-new-response/NavbarRegisterResponse";
import { NavbarSearch } from "./components/navbar-search";
import { NavbarNew } from "./components/navbar-new";
import { Home } from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/navbar-search",
    element: <NavbarSearch />,
  },
  {
    path: "/aside-navbar",
    element: <Navbar isExpanded={false} />,
  },
  {
    path: "/navbar-new",
    element: <NavbarNew />,
  },

  {
    path: "/navbar-register-response",
    element: <NavbarRegisterResponse isSuccess={true} onClose={function (): void {
      throw new Error("Function not implemented.");
    }} />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
