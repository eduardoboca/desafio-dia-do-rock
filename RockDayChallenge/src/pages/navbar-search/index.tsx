import { useState } from 'react';
import { SearchIcon } from "lucide-react";

export function NavbarSearch(props : any) {
    const [searchQuery, setSearchQuery] = useState('');
    const events = [
        {
            id: 1,
            imgSrc: "public/band01.png",
            alt: "band01",
            band: "Iron Maiden",
            venue: "Espaço das Américas",
            address: "R. Tagipuru, 795 - Barra Funda",
            city: "São Paulo - SP",
            time: "19:00"
        },
        {
            id: 2,
            imgSrc: "public/band02.png",
            alt: "band02",
            band: "Iron Maiden",
            venue: "Estádio do Maracanã",
            address: "Rua Prof. Eurico Rabelo, s/ nº",
            city: "Rio de Janeiro - RJ",
            time: "25/Set"
        },
        {
            id: 3,
            imgSrc: "public/band03.png",
            alt: "band03",
            band: "Metallica",
            venue: "Allianz Parque",
            address: "Av. Francisco Matarazzo, 1705 - Água Branca",
            city: "São Paulo - SP",
            time: "20:00"
        },
        {
            id: 4,
            imgSrc: "public/band04.png",
            alt: "band04",
            band: "AC/DC",
            venue: "Mineirão",
            address: "Av. Antônio Abrahão Caram, 1001 - São José",
            city: "Belo Horizonte - MG",
            time: "21:00"
        },
        {
            id: 5,
            imgSrc: "public/band05.png",
            alt: "band05",
            band: "Guns N' Roses",
            venue: "Arena Fonte Nova",
            address: "Ladeira da Fonte das Pedras, s/n - Nazaré",
            city: "Salvador - BA",
            time: "18:00"
        },
        {
            id: 6,
            imgSrc: "public/band06.png",
            alt: "band06",
            band: "Nirvana",
            venue: "Estádio Beira-Rio",
            address: "Av. Padre Cacique, 891 - Praia de Belas",
            city: "Porto Alegre - RS",
            time: "17:00"
        },
        {
            id: 7,
            imgSrc: "public/band07.png",
            alt: "band07",
            band: "Queen",
            venue: "Arena Castelão",
            address: "Av. Alberto Craveiro, 2901 - Castelão",
            city: "Fortaleza - CE",
            time: "16:00"
        },
        {
            id: 8,
            imgSrc: "public/band08.png",
            alt: "band08",
            band: "Pink Floyd",
            venue: "Arena da Baixada",
            address: "R. Buenos Aires, 1260 - Água Verde",
            city: "Curitiba - PR",
            time: "19:30"
        },
        {
            id: 9,
            imgSrc: "public/band09.png",
            alt: "band09",
            band: "The Rolling Stones",
            venue: "Estádio Olímpico",
            address: "R. Goiás, 1545 - Centro",
            city: "Goiânia - GO",
            time: "20:30"
        },
        {
            id: 10,
            imgSrc: "public/band10.png",
            alt: "band10",
            band: "Foo Fighters",
            venue: "Estádio do Pacaembu",
            address: "Praça Charles Miller, s/n - Pacaembu",
            city: "São Paulo - SP",
            time: "22:00"
        },
        {
            id: 11,
            imgSrc: "public/band11.png",
            alt: "band11",
            band: "Led Zeppelin",
            venue: "Ginásio do Ibirapuera",
            address: "R. Manoel da Nóbrega, 1361 - Paraíso",
            city: "São Paulo - SP",
            time: "19:00"
        },
        {
            id: 12,
            imgSrc: "public/band12.png",
            alt: "band12",
            band: "The Beatles",
            venue: "Maracanãzinho",
            address: "Rua Prof. Eurico Rabelo, s/n - Maracanã",
            city: "Rio de Janeiro - RJ",
            time: "20:00"
        }
    ];

    const filteredEvents = events.filter(event =>
        event.band.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={{ display: props.isVisible ? 'block' : 'none' }} className="float-left w-60 bg-transparent min-h-screen border-r border-[#1F1F1F] sm:w-96">
            <div className="px-5 pt-12 mb-7">
                <p className="text-[#848487] mb-2">Buscar um evento</p>
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