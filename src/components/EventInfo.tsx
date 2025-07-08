
interface EventInfoProps {
  isVisible: boolean;
}

const EventInfo = ({ isVisible }: EventInfoProps) => {
  return (
    <div
      className={`space-y-6 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
      style={{ animationDelay: "0.4s" }}
    >
      <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-espirito-blue">
        <h3 className="text-xl font-semibold mb-2">🚀 Vem aí mais uma edição do Conexões de Impacto!</h3>
        <p className="text-gray-600 mb-4">
          Dessa vez, vamos mergulhar no universo da Web3 — um tema que está mudando o jeito de empreender, investir e se conectar com o mundo.
        </p>
        <p className="text-gray-600">
          Você ainda não entenda muito bem o que é blockchain, tokens ou descentralização… calma! Esse encontro é justamente pra isso. 😉
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-espirito-orange">
        <h3 className="text-xl font-semibold mb-2">Por que participar?</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-espirito-orange mt-1">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Conheça pessoas interessadas no ecossistema Web3</span>
          </li>
          <li className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-espirito-orange mt-1">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Aprenda sobre blockchain, tokens e descentralização</span>
          </li>
          <li className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-espirito-orange mt-1">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Descubra oportunidades de investimento e mentoria</span>
          </li>
          <li className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-espirito-orange mt-1">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Participe de networking especializado</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
        <h3 className="text-xl font-semibold mb-2">Para todos os níveis</h3>
        <p className="text-gray-600 mb-4">
          Não importa se você é iniciante ou especialista em Web3, o evento foi desenhado para ser acessível e valioso para todos os níveis de conhecimento.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            Iniciantes
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
            Intermediários
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            Avançados
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
