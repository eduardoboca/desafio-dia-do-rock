import { SearchIcon } from "lucide-react"

export function NavbarSearch() {
    return (
        <div className="w-96 bg-transparent min-h-screen border-r border-[#1F1F1F]">
            <div className="px-5 pt-14 mb-7">
                <p className="text-[#848487]">Buscar um evento</p>
                <div className='h-14 px-4 bg-[#18171E] border border-zinc-800 rounded-lg flex items-center gap-2'>
                    <SearchIcon className="size-6 text-[#848487]" />
                    <input type="title" name='title' placeholder='Insira a banda'
                        className='bg-transparent placeholder:text-zinc-400 outline-none flex-1' />
                </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-5 w-full bg-transparent hover:bg-[#1A191F] hover:cursor-pointer">
                <div className="w-10">
                    <img src="public\band01.png" alt="band01" />
                </div>

                <div className="text-[10px] flex-1">
                    <p className="text-base">Espaço das Américas</p>
                    <p>R. Tagipuru, 795 - Barra Funda</p>
                    <p>São Paulo - SP</p>
                </div>

                <div className="flex justify-end items-center">
                    <p className="text-sm">19:00</p>
                </div>
            </div>

            <div className="flex items-center gap-3 h-20 px-5 py-5 w-full bg-transparent hover:bg-[#1A191F] hover:cursor-pointer">
                <div className="w-10">
                    <img src="public\band02.png" alt="band02" />
                </div>

                <div className="text-[10px] flex-1">
                    <p className="text-base">Estádio do Maracanã</p>
                    <p>Rua Prof. Eurico Rabelo, s/ nº</p>
                    <p>Rio de Janeiro - RJ</p>
                </div>

                <div className="flex justify-end items-center">
                    <p className="text-sm">25/Set</p>
                </div>
            </div>
        </div>
    )
}