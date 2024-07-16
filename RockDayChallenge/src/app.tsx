import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavbarSearch } from "./pages/navbar-search";
import { Rocket } from "lucide-react";
import { Navbar } from "./pages/navbar";
import { NavbarNew } from "./pages/navbar-new";
import { NavbarRegisterResponse } from "./components/navbar/NavbarRegisterResponse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/navbar-search",
    element: <NavbarSearch />,
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
