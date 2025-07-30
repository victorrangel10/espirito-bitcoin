
const EventSchedule = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-espirito-blue">
      <h4 className="font-semibold text-lg mb-3 text-espirito-blue">
        Programação
      </h4>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-espirito-orange mt-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <span className="font-medium">19:00</span> - Recepção e networking
          </div>
        </li>
        <li className="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-espirito-orange mt-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <span className="font-medium">19:30</span> - O que é a Devconnect e por que estamos otimistas com o Ethereum? — Luiz Hadad
          </div>
        </li>
        <li className="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-espirito-orange mt-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <span className="font-medium">20:00</span> - Painel: Construindo no Ethereum – iniciativas locais: Luiz Hadad, Rodrigo Torres (Token Base)
          </div>
        </li>
        <li className="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-espirito-orange mt-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <span className="font-medium">20:30</span> - Próximos eventos ETH na América Latina: ETH Latam e Devconnect
          </div>
        </li>
        <li className="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-espirito-orange mt-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <span className="font-medium">21:00</span> - Encerramento e happy hour
          </div>
        </li>
      </ul>

      <div className="border-t border-gray-200 pt-4">
        <h4 className="font-semibold text-lg mb-3 text-espirito-blue">
          Patrocinadores
        </h4>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            Time da Devconnect - Ethereum Foundation
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            Investortech Ventures
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            MangroveDLT
          </span>
        </div>

        <h4 className="font-semibold text-lg mb-3 text-espirito-blue">
          Apoio
        </h4>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
            We Believe Hub
          </span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
            Hortifruti
          </span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
            Padaria Nossa Senhora da Penha
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
