import { useState } from 'react';
import { SearchIcon } from "lucide-react";

interface Event {
    id: number;
    imgSrc: string;
    alt: string;
    band: string;
    venue: string;
    address: string;
    city: string;
    time: string;
  }

export function NavbarSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const storedEventsString = localStorage.getItem('events');
    const events : Event[] = storedEventsString ? JSON.parse(storedEventsString) : [];

    const filteredEvents = events.filter(event =>
        event.band.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full bg-transparent min-h-screen border-r border-[#1F1F1F] sm:w-96">
            <div className="px-5 pt-14 mb-7">
                <p className="text-[#848487]">Buscar um evento</p>
                <div className='h-14 px-4 dark:bg-[#18171E] border border-zinc-400 dark:border-zinc-800 rounded-lg flex items-center gap-2'>
                    <SearchIcon className="size-6 text-[#848487]" />
                    <input type="text" name='title' placeholder='Insira a banda' value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='bg-transparent placeholder:text-zinc-400 outline-none flex-1'
                    />
                </div>
            </div>

            <div className="overflow-y-auto scrollbar-thin" style={{ height: 'calc(100vh - 200px)' }}>
                {filteredEvents.map(event => (
                    <div key={event.id} className="flex items-center gap-3 px-5 py-5 w-full bg-transparent hover:bg-zinc-300 dark:hover:bg-[#1A191F] hover:cursor-pointer">
                        <div className="w-10">
                            <img src={event.imgSrc} alt={event.alt} className="h-10 w-10" />
                        </div>
                        <div className="text-[10px] flex-1">
                            <p className="text-base">{event.venue}</p>
                            <p>{event.address}</p>
                            <p>{event.city}</p>
                            <p><span className='font-bold'>Banda:</span> {event.band}</p>
                        </div>
                        <div className="flex justify-end items-center">
                            <p className="text-sm">{event.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}