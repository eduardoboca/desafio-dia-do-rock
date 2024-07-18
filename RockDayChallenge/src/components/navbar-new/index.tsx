import { useEffect, useState } from 'react';
import { Calendar, Map, Search } from "lucide-react";
import { NavbarRegisterResponse } from '../../components/navbar-new-response/NavbarRegisterResponse';

export function NavbarNew() {
    const [isSaving, setIsSaving] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [isSuccess, setIsSuccess] = useState(true);

    const [band, setBand] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [errors, setErrors] = useState<string[]>([]);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const defaultEvents = [
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

        const storedEventsString = localStorage.getItem('events');
        const storedEvents = storedEventsString ? JSON.parse(storedEventsString) : [];
        if (!storedEventsString) {
            localStorage.setItem('events', JSON.stringify(defaultEvents));
        }
        setEvents(storedEvents);
    }, []);

    const save = () => {
        const newErrors = [];

        if (!band) newErrors.push('O campo Banda é obrigatório.');
        if (!date) newErrors.push('O campo Data é obrigatório.');
        if (!location) newErrors.push('O campo Local é obrigatório.');

        if (newErrors.length > 0) {
            setErrors(newErrors);
        } else {
            setIsSaving(true);
            setErrors([]);
            setTimeout(() => {
                const success = Math.random() < 0.5;
                if (success) {
                    const newEvent = {
                        id: events.length + 1,
                        imgSrc: "public/band01.png",
                        alt: "band01",
                        band: band,
                        venue: location,
                        address: "R. Tagipuru, 795 - Barra Funda",
                        city: "São Paulo - SP",
                        time: date
                    };

                    const updatedEvents = [...events, newEvent];
                    setEvents(updatedEvents);
                    localStorage.setItem('events', JSON.stringify(updatedEvents));
                }
                setIsSuccess(success);
                setShowResult(true);
                setIsSaving(false);
            }, 2000);
        }
    };

    return (
        <div className="w-full bg-transparent min-h-screen border-r border-[#1F1F1F] sm:w-96">
            {showResult ? (
                <NavbarRegisterResponse isSuccess={isSuccess} />
            ) : (
                <div>
                    <div className="px-5 mt-9">
                        <p className="text-[#848487] mb-2">Banda</p>
                        <div className='h-14 px-4 dark:bg-[#18171E] border border-zinc-400 dark:border-zinc-800 rounded-lg flex items-center gap-2'>
                            <Search className="size-6 text-[#848487]" />
                            <input
                                type="text"
                                name='band'
                                placeholder='Iron Maiden'
                                value={band}
                                onChange={(e) => setBand(e.target.value)}
                                className='bg-transparent placeholder:text-zinc-400 outline-none flex-1'
                            />
                        </div>
                    </div>

                    <div className="px-5 mt-5">
                        <p className="text-[#848487] mb-2">Data</p>
                        <div className='h-14 px-4 dark:bg-[#18171E] border border-zinc-400 dark:border-zinc-800 rounded-lg flex items-center gap-2'>
                            <Calendar className="size-6 text-[#848487]" />
                            <input
                                type="date"
                                name='date'
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className='bg-transparent placeholder:text-zinc-400 outline-none flex-1'
                            />
                        </div>
                    </div>

                    <div className="px-5 mt-5">
                        <p className="text-[#848487] mb-2">Local</p>
                        <div className='h-14 px-4 dark:bg-[#18171E] border border-zinc-400 dark:border-zinc-800 rounded-lg flex items-center gap-2'>
                            <Map className="size-6 text-[#848487]" />
                            <input
                                type="text"
                                name='location'
                                placeholder='Espaço das Américas, SP'
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
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

                    <div className="px-5 mt-4">
                        {errors.length > 0 && (
                            <div className="text-red-500">
                                {errors.map((error, index) => (
                                    <p key={index}>{error}</p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
