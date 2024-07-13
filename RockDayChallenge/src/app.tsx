import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavbarSearch } from "./pages/navbar-search";
import { Rocket } from "lucide-react"

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1 className="flex justify-center py-10 text-4xl gap-5"><Rocket />Hello RockDay Challenge<Rocket /></h1>
    },
    {
        path: "/navbar",
        element: <NavbarSearch />
    }
])

export function App() {
    return <RouterProvider router={router} />
}