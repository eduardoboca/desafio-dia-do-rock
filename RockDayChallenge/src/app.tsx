import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavbarSearch } from "./pages/navbar-search";
import { NavbarRegisterResponse } from "./components/navbar/NavbarRegisterResponse";
import { Rocket } from "lucide-react";

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
    path: "/navbar",
    element: <NavbarSearch />,
  },
  {
    path: "/navbar-register-response",
    element: <NavbarRegisterResponse isSuccess={true} />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
