import { Navbar } from "../components/navbar";

export function Home() {
  return (
    <div className="flex">
      <Navbar/>
      <div className="flex-1">
        <div className="w-full h-screen flex justify-center items-center">
          <img src="/mapa.png" alt="Mapa" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}