
interface EventHeaderProps {
  isVisible: boolean;
}

const EventHeader = ({ isVisible }: EventHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className={`section-title ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        Destaque: Conexões de Impacto Web3 ES
      </h2>
      <p
        className={`section-subtitle max-w-3xl mx-auto ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`}
        style={{ animationDelay: "0.2s" }}
      >
        Venha participar do nosso encontro e conhecer o ecossistema Web3 do Espírito Santo!
      </p>
    </div>
  );
};

export default EventHeader;
