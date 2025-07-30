interface EventDetailsProps {
  isVisible: boolean;
}

const EventDetails = ({ isVisible }: EventDetailsProps) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
      style={{ animationDelay: "0.3s" }}
    >
      <div className="relative">
        <img
          src="/lovable-uploads/28420fc8-0a74-44fd-810f-84b1c08fb13f.png"
          alt="Conexões de Impacto: Web3 ES"
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h3 className="text-2xl font-bold">Ethereum Espirito Santo - Destino Devconnect</h3>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-espirito-blue">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>NaCapital – Unidade Rio Branco (Av. Rio Branco, 1383 – Praia do Canto, Vitória)</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-espirito-blue">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span>16 de julho de 2025</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-espirito-blue">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>19:00h às 21:00h</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-espirito-blue">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span>Capacidade: 40 pessoas</span>
          </div>
        </div>

        <a href="#contato" className="btn-primary w-full block text-center">
          Quero Participar!
        </a>
      </div>
    </div>
  );
};

export default EventDetails;
