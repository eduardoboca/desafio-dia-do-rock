import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavbarSearch } from "./pages/navbar-search";
import { NavbarNew } from "./pages/navbar-new";
import { NavbarRegisterResponse } from "./components/navbar/NavbarRegisterResponse";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
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
