import { useState, useEffect, useRef } from 'react';
import { Plus, Map, Search } from 'lucide-react';
import { NavbarSearch } from '../navbar-search/index';
import { NavbarNew } from '../navbar-new';

export function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  const [isNewBarActive, setIsNewBarActive] = useState(false);

  const searchBarRef = useRef<HTMLDivElement | null>(null);
  const newBarRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
      setIsExpanded(false);
    }

    if (newBarRef.current && !newBarRef.current.contains(event.target as Node)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  const toggleSearchBar = () => {
    setIsNewBarActive(false);
    setIsSearchBarActive(!isSearchBarActive);
    setIsExpanded(prev => !prev);
  };

  const toggleNewBar = () => {
    setIsSearchBarActive(false);
    setIsNewBarActive(!isNewBarActive);
    setIsExpanded(prev => !prev);
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
        <div ref={searchBarRef} className={`ml-16 ${isExpanded ? 'w-full' : 'w-0'} transition-all duration-300`}>
          {isExpanded && <NavbarSearch />}
        </div>
      }

      {isNewBarActive &&
        <div ref={newBarRef} className={`ml-16 ${isExpanded ? 'w-full' : 'w-0'} transition-all duration-300`}>
          {isExpanded && <NavbarNew />}
        </div>
      }
    </div>
  );
}
