import { useState } from 'react';
import { Calendar, Map, SearchIcon } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { NavbarRegisterResponse } from '../../components/navbar-new-response/NavbarRegisterResponse';

export function NavbarNew() {
    const [isSaving, setIsSaving] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [isSuccess, setIsSuccess] = useState(true)

    const save = () => {
        setIsSaving(true)

        setTimeout(() => {
            const randomResult = Math.random() < 0.5
            setIsSuccess(randomResult)
            setShowResult(true)
        }, 2000);
    };

    return (
        <div className="w-full bg-transparent min-h-screen border-r border-[#1F1F1F] sm:w-96">
            {showResult ? (
                <NavbarRegisterResponse
                    isSuccess={isSuccess} />

            ) : (
                <div>
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
                        {isSaving ? (
                            <div className="w-full h-2 rounded-lg bg-[#8625D2]"></div>
                        ) : (
                            <button
                                onClick={save}
                                className="bg-[#8625D2] text-white font-semibold w-full min-h-12 rounded-lg hover:bg-[#8625E2]"
                            >
                                Salvar Evento
                            </button>
                        )}
                    </div>

                    <div className="px-5 mt-4 text-center">
                        {isSaving ? (
                            <p className="text-[#848487]">Aguarde...</p>
                        ) : (
                            <a href='#' className="text-[#848487]">Preciso de ajuda</a>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}