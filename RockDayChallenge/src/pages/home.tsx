import { useState } from "react";
import { Navbar } from "../components/navbar";

export function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleNavbarExpand = (expanded) => {
    setIsExpanded(expanded);
  };

  return (
    <div className="flex">
      <Navbar onExpand={handleNavbarExpand} />
      <div className={`flex-1`}>
        <div className="w-full h-screen flex justify-center items-center">
          <img src="public/mapa.png" alt="Mapa" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}