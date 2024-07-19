import { useState } from 'react';
import { Plus, Map, Search } from 'lucide-react';
import { NavbarSearch } from '../navbar-search/index';
import { NavbarNew } from '../navbar-new';

interface NavbarProps {
  onExpand: (isExpanded: boolean) => void;
};

export function Navbar({ onExpand } : NavbarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  const [isNewBarActive, setIsNewBarActive] = useState(false);

  // const initializeEvents = () => {
  //   const defaultEvents = [
  //     {
  //       id: 1,
  //       imgSrc: "public/band01.png",
  //       alt: "band01",
  //       band: "Iron Maiden",
  //       venue: "Espaço das Américas",
  //       address: "R. Tagipuru, 795 - Barra Funda",
  //       city: "São Paulo - SP",
  //       time: "19:00"
  //     },
  //     {
  //       id: 2,
  //       imgSrc: "public/band02.png",
  //       alt: "band02",
  //       band: "Iron Maiden",
  //       venue: "Estádio do Maracanã",
  //       address: "Rua Prof. Eurico Rabelo, s/ nº",
  //       city: "Rio de Janeiro - RJ",
  //       time: "25/Set"
  //     },
  //     {
  //       id: 3,
  //       imgSrc: "public/band03.png",
  //       alt: "band03",
  //       band: "Metallica",
  //       venue: "Allianz Parque",
  //       address: "Av. Francisco Matarazzo, 1705 - Água Branca",
  //       city: "São Paulo - SP",
  //       time: "20:00"
  //     },
  //     {
  //       id: 4,
  //       imgSrc: "public/band04.png",
  //       alt: "band04",
  //       band: "AC/DC",
  //       venue: "Mineirão",
  //       address: "Av. Antônio Abrahão Caram, 1001 - São José",
  //       city: "Belo Horizonte - MG",
  //       time: "21:00"
  //     },
  //     {
  //       id: 5,
  //       imgSrc: "public/band05.png",
  //       alt: "band05",
  //       band: "Guns N' Roses",
  //       venue: "Arena Fonte Nova",
  //       address: "Ladeira da Fonte das Pedras, s/n - Nazaré",
  //       city: "Salvador - BA",
  //       time: "18:00"
  //     },
  //     {
  //       id: 6,
  //       imgSrc: "public/band06.png",
  //       alt: "band06",
  //       band: "Nirvana",
  //       venue: "Estádio Beira-Rio",
  //       address: "Av. Padre Cacique, 891 - Praia de Belas",
  //       city: "Porto Alegre - RS",
  //       time: "17:00"
  //     },
  //     {
  //       id: 7,
  //       imgSrc: "public/band07.png",
  //       alt: "band07",
  //       band: "Queen",
  //       venue: "Arena Castelão",
  //       address: "Av. Alberto Craveiro, 2901 - Castelão",
  //       city: "Fortaleza - CE",
  //       time: "16:00"
  //     },
  //     {
  //       id: 8,
  //       imgSrc: "public/band08.png",
  //       alt: "band08",
  //       band: "Pink Floyd",
  //       venue: "Arena da Baixada",
  //       address: "R. Buenos Aires, 1260 - Água Verde",
  //       city: "Curitiba - PR",
  //       time: "19:30"
  //     },
  //     {
  //       id: 9,
  //       imgSrc: "public/band09.png",
  //       alt: "band09",
  //       band: "The Rolling Stones",
  //       venue: "Estádio Olímpico",
  //       address: "R. Goiás, 1545 - Centro",
  //       city: "Goiânia - GO",
  //       time: "20:30"
  //     },
  //     {
  //       id: 10,
  //       imgSrc: "public/band10.png",
  //       alt: "band10",
  //       band: "Foo Fighters",
  //       venue: "Estádio do Pacaembu",
  //       address: "Praça Charles Miller, s/n - Pacaembu",
  //       city: "São Paulo - SP",
  //       time: "22:00"
  //     },
  //     {
  //       id: 11,
  //       imgSrc: "public/band11.png",
  //       alt: "band11",
  //       band: "Led Zeppelin",
  //       venue: "Ginásio do Ibirapuera",
  //       address: "R. Manoel da Nóbrega, 1361 - Paraíso",
  //       city: "São Paulo - SP",
  //       time: "19:00"
  //     },
  //     {
  //       id: 12,
  //       imgSrc: "public/band12.png",
  //       alt: "band12",
  //       band: "The Beatles",
  //       venue: "Maracanãzinho",
  //       address: "Rua Prof. Eurico Rabelo, s/n - Maracanã",
  //       city: "Rio de Janeiro - RJ",
  //       time: "20:00"
  //     }
  //   ]

  //   const storedEventsString = localStorage.getItem('events')
  //   if (!storedEventsString) {
  //     localStorage.setItem('events', JSON.stringify(defaultEvents))
  //   }
  // }

  const toggleSearchBar = () => {
    setIsNewBarActive(false)
    setIsSearchBarActive(!isSearchBarActive)
    setIsExpanded(!isSearchBarActive || !isExpanded)
    onExpand(!isSearchBarActive || !isExpanded);
  }

  const toggleNewBar = () => {
    setIsSearchBarActive(false)
    setIsNewBarActive(!isNewBarActive)
    setIsExpanded(!isNewBarActive || !isExpanded)
    onExpand(!isNewBarActive || !isExpanded);
  };

  return (
    <div className="flex">
      <nav className="fixed top-0 left-0 pt-9 w-16 h-screen dark:bg-[#18171E]">

        <a className="flex mx-auto mb-4 w-10 h-10 rounded-full cursor-pointer bg-white">
          <img className="flex mx-auto mb-4 w-10 h-10 rounded-full cursor-pointer" src="../../../public/avatar.png" alt="image" />
          <div className="absolute mt-7 ml-7 bg-green-600 w-4 h-4 flex justify-center items-center rounded-full">
            <span className="text-slate-50 text-xs font-black">✓</span>
          </div>
        </a>
        <a className="flex justify-center items-center h-16 hover:bg-zinc-300 dark:hover:bg-[#1A191F]" onClick={toggleSearchBar}>
          <Search color='#8625d2' className='w-6 h-6' />
        </a>
        <a className="flex justify-center items-center h-16 hover:bg-zinc-300 dark:hover:bg-[#1A191F]" href="https:\\www.google.com.br">
          <Map color='#8625d2' className='w-6 h-6' />
        </a>
        <a className="flex justify-center items-center h-16 hover:bg-zinc-300 dark:hover:bg-[#1A191F]" onClick={toggleNewBar}>
          <Plus color='#8625d2' className='w-6 h-6' />
        </a>
      </nav>

      {isSearchBarActive &&
        <div className={"ml-16 ${isExpanded ? 'w-full' : 'w-0'} transition-all duration-300"}>
          {isExpanded && <NavbarSearch />}
        </div>
      }

      {isNewBarActive &&
        <div className={"ml-16 ${isExpanded ? 'w-full' : 'w-0'} transition-all duration-300"}>
          {isExpanded && <NavbarNew />}
        </div>
      }
    </div>
  )
}