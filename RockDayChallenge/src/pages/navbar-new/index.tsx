import { useState } from 'react';
import { Calendar, Map, SearchIcon } from "lucide-react";

export function NavbarNew() {


    return (
        <div className="w-full bg-transparent min-h-screen border-r border-[#1F1F1F] sm:w-96">
            <div className="px-5 mt-9">
                <p className="text-[#848487] mb-2">Banda</p>
                <div className='h-14 px-4 dark:bg-[#18171E] border border-zinc-400 dark:border-zinc-800 rounded-lg flex items-center gap-2'>
                    <SearchIcon className="size-6 text-[#848487]" />
                    <input type="text" name='title' placeholder='Iron Maiden'
                        className='bg-transparent placeholder:text-zinc-400 outline-none flex-1'
                    />
                </div>
            </div>

            <div className="px-5 mt-5">
                <p className="text-[#848487] mb-2">Data</p>
                <div className='h-14 px-4 dark:bg-[#18171E] border border-zinc-400 dark:border-zinc-800 rounded-lg flex items-center gap-2'>
                    <Calendar className="size-6 text-[#848487]" />
                    <input type="date" name='date' placeholder='15/07/2024'
                        className='bg-transparent placeholder:text-zinc-400 outline-none flex-1'
                    />
                </div>
            </div>

            <div className="px-5 mt-5">
                <p className="text-[#848487] mb-2">Local</p>
                <div className='h-14 px-4 dark:bg-[#18171E] border border-zinc-400 dark:border-zinc-800 rounded-lg flex items-center gap-2'>
                    <Map className="size-6 text-[#848487]" />
                    <input type="text" name='date' placeholder='Espaço das Américas, SP'
                        className='bg-transparent placeholder:text-zinc-400 outline-none flex-1'
                    />
                </div>
            </div>

            <div className="px-5 mt-10 text-center">
                <button className="bg-[#8625D2] text-white font-semibold w-full min-h-12 rounded-lg">Salvar Evento</button>
            </div>

            <div className="px-5 mt-4 text-center">
                <a href='#' className="text-[#848487]">Preciso de ajuda</a>
            </div>
        </div>
    );
}