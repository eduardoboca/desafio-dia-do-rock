import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Rocket } from "lucide-react";
import { Navbar } from "./components/navbar";
import { NavbarRegisterResponse } from "./components/navbar-new-response/NavbarRegisterResponse";
import { NavbarSearch } from "./components/navbar-search";
import { NavbarNew } from "./components/navbar-new";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <h1 className="flex justify-center py-10 text-4xl gap-5">
        <Rocket />
        Hello RockDay Challenge
        <Rocket />
      </h1>
    ),
  },
  {
    path: "/navbar-search",
    element: <NavbarSearch />,
  },
  {
    path: "/aside-navbar",
    element: <Navbar />,
  },
  {
    path: "/navbar-new",
    element: <NavbarNew />,
  },
  {
    path: "/navbar-register-response",
    element: <NavbarRegisterResponse isSuccess={true} />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
