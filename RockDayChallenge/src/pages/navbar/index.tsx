import { Plus } from 'lucide-react';
import { Map } from 'lucide-react';
import { Search } from 'lucide-react';
import { useState } from "react";
import { NavbarSearch } from '../navbar-search';
import { NavbarNew } from '../navbar-new';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { MapComponent } from '../../components/map-component';

export function Navbar() {
  const [openNavbarSearch, setNavbarSearch] = useState(false);
  const [openNavbarNew, setNavbarNew] = useState(false);

  const toggleNavbarSearch = () => {
    setNavbarSearch(!openNavbarSearch);
    setNavbarNew(false);
  };

  const toggleNavbarNew = () => {
    setNavbarNew(!openNavbarNew);
    setNavbarSearch(false);
  };

  const HideNavbar = () => {
    setNavbarSearch(false);
    setNavbarNew(false);
  }


  return (
    <>
      <nav className="mr-6 float-left pt-9  w-16 h-screen dark:bg-[#18171E]" >
        <a className="flex mx-auto mb-4 w-10 h-10 rounded-full cursor-pointer bg-white">
          <img className="flex mx-auto mb-4 w-10 h-10 rounded-full cursor-pointer" src="../../../public/avatar.png" alt="image" />
          <div className="absolute mt-7 ml-7 bg-green-600 w-4 h-4 flex justify-center items-center rounded-full">
            <span className="text-slate-50 text-xs font-black">✓</span>
          </div>
        </a>
        <div onClick={toggleNavbarSearch} className="flex justify-center items-center h-16 cursor-pointer hover:bg-zinc-300 dark:hover:bg-[#1A191F]">
          <Search color='#8625d2' className='w-6 h-6' />
        </div>
        <div onClick={HideNavbar} className="flex justify-center items-center h-16 cursor-pointer hover:bg-zinc-300 dark:hover:bg-[#1A191F]">
          <Map color='#8625d2' className='w-6 h-6' />
        </div>
        <div onClick={toggleNavbarNew} className="flex justify-center items-center h-16 cursor-pointer hover:bg-zinc-300 dark:hover:bg-[#1A191F]">
          <Plus color='#8625d2' className='w-6 h-6' />
        </div>
      </nav>

      <NavbarSearch isVisible={openNavbarSearch} ></NavbarSearch>

      <NavbarNew isVisible={openNavbarNew} ></NavbarNew>

      <MapComponent/>
      
    </>
  );
};


