
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
            <span className="font-medium">19:00</span> - Chegada
          </div>
        </li>
        <li className="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-espirito-orange mt-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <span className="font-medium">19:20</span> - Boas-vindas
          </div>
        </li>
        <li className="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-espirito-orange mt-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <span className="font-medium">19:30</span> - Apresentação Impact Hub
          </div>
        </li>
        <li className="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-espirito-orange mt-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <span className="font-medium">19:40</span> - Apresentação Espírito Bitcoin
          </div>
        </li>
        <li className="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-espirito-orange mt-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <span className="font-medium">19:50</span> - Investortech Ventures - Nosso trabalho e missão (Mentoria e Investimento)
          </div>
        </li>
        <li className="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-espirito-orange mt-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <span className="font-medium">20:00</span> - MangroveDLT - Internacionalização
          </div>
        </li>
        <li className="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-espirito-orange mt-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <span className="font-medium">20:10</span> - Painel: "Como podemos construir um hub Web3 no ES?" | Impact Hub, Espírito Bitcoin e Investortech
          </div>
        </li>
      </ul>

      <div className="border-t border-gray-200 pt-4">
        <h4 className="font-semibold text-lg mb-3 text-espirito-blue">
          Organizadores
        </h4>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
            Impact Hub
          </span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
            Espírito Bitcoin
          </span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
            Investortech
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
