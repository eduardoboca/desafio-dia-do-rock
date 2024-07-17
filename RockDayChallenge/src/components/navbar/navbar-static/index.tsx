import { Plus, Map, Search } from "lucide-react";

interface NavbarStaticProps {
  hideAll: () => void;
  showNewRegister: () => void;
  showSearch: () => void;
}

export function NavbarStatic({
  hideAll,
  showNewRegister,
  showSearch,
}: NavbarStaticProps) {
  return (
    <div className="w-[500px] bg-white">
      <nav className="float-left pt-9 w-16 h-screen dark:bg-[#18171E]">
        <a className="flex mx-auto mb-4 w-10 h-10 rounded-full cursor-pointer bg-white">
          <img
            className="flex mx-auto mb-4 w-10 h-10 rounded-full cursor-pointer"
            src="../../../public/avatar.png"
            alt="image"
          />
          <div className="absolute mt-7 ml-7 bg-green-600 w-4 h-4 flex justify-center items-center rounded-full cursor-pointer">
            <span className="text-slate-50 text-xs font-black">✓</span>
          </div>
        </a>

        <div
          className="flex justify-center items-center h-16 hover:bg-zinc-300 dark:hover:bg-[#1A191F] cursor-pointer"
          onClick={showSearch}
        >
          <Search color="#8625d2" className="w-6 h-6" />
        </div>

        <div
          className="flex justify-center items-center h-16 hover:bg-zinc-300 dark:hover:bg-[#1A191F] cursor-pointer"
          onClick={hideAll}
        >
          <Map color="#8625d2" className="w-6 h-6" />
        </div>

        <div
          className="flex justify-center items-center h-16 hover:bg-zinc-300 dark:hover:bg-[#1A191F] cursor-pointer"
          onClick={showNewRegister}
        >
          <Plus color="#8625d2" className="w-6 h-6" />
        </div>
      </nav>
    </div>
  );
}
