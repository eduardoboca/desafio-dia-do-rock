import { useEffect, useState } from "react";
import { Calendar, Map, Search } from "lucide-react";
import { NavbarRegisterResponse } from "../../components/navbar-new-response/NavbarRegisterResponse";

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

export function NavbarNew() {
  const [isSaving, setIsSaving] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  const [band, setBand] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
      const storedEventsString = localStorage.getItem('events');
      const storedEvents = storedEventsString ? JSON.parse(storedEventsString) : [];
      setEvents(storedEvents);
  }, []);

  const save = () => {
    const newErrors = [];

    if (!band) newErrors.push("O campo Banda é obrigatório.");
    if (!date) newErrors.push("O campo Data é obrigatório.");
    if (!location) newErrors.push("O campo Local é obrigatório.");

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
            imgSrc: "/band01.png",
            alt: "band01",
            band: band,
            venue: location,
            address: "R. Tagipuru, 795 - Barra Funda",
            city: "São Paulo - SP",
            time: date,
          };

          const updatedEvents = [...events, newEvent];
          setEvents(updatedEvents);
          localStorage.setItem("events", JSON.stringify(updatedEvents));
        }
        setIsSuccess(success);
        setShowResult(true);
        setIsSaving(false);
      }, 2000);
    }
  };

  const handleClose = () => {
    setShowResult(false);
    setBand("");
    setDate("");
    setLocation("");
  };

  return (
    <div className="w-full bg-transparent border-r border-[#1F1F1F] sm:w-96">
      {showResult ? (
        <NavbarRegisterResponse isSuccess={isSuccess} onClose={handleClose} />
      ) : (
        <div>
          <div className="px-5 mt-9">
            <p className="text-[#848487] mb-2">Banda</p>
            <div className="h-14 px-4 dark:bg-[#18171E] border border-zinc-400 dark:border-zinc-800 rounded-lg flex items-center gap-2">
              <Search className="size-6 text-[#848487]" />
              <input
                type="text"
                name="band"
                placeholder="Iron Maiden"
                value={band}
                onChange={(e) => setBand(e.target.value)}
                className="bg-transparent placeholder:text-zinc-400 outline-none flex-1"
              />
            </div>
          </div>

          <div className="px-5 mt-5">
            <p className="text-[#848487] mb-2">Data</p>
            <div className="h-14 px-4 dark:bg-[#18171E] border border-zinc-400 dark:border-zinc-800 rounded-lg flex items-center gap-2">
              <Calendar className="size-6 text-[#848487]" />
              <input
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-transparent placeholder:text-zinc-400 outline-none flex-1"
              />
            </div>
          </div>

          <div className="px-5 mt-5">
            <p className="text-[#848487] mb-2">Local</p>
            <div className="h-14 px-4 dark:bg-[#18171E] border border-zinc-400 dark:border-zinc-800 rounded-lg flex items-center gap-2">
              <Map className="size-6 text-[#848487]" />
              <input
                type="text"
                name="location"
                placeholder="Espaço das Américas, SP"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent placeholder:text-zinc-400 outline-none flex-1"
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
              <a href="#" className="text-[#848487]">
                Preciso de ajuda
              </a>
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
