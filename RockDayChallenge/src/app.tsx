import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavbarSearch } from "./pages/navbar-search";
import { Rocket } from "lucide-react"
import { Navbar } from "./pages/navbar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1 className="flex justify-center py-10 text-4xl gap-5"><Rocket />Hello RockDay Challenge<Rocket /></h1>
    },
    {
        path: "/navbar-search",
        element: <NavbarSearch />
    },
    {
        path: "/aside-navbar",
        element: <Navbar/>
    }
])

export function App() {
    return <RouterProvider router={router} />
}