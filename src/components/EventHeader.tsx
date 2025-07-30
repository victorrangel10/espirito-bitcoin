
interface EventHeaderProps {
  isVisible: boolean;
}

const EventHeader = ({ isVisible }: EventHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className={`section-title ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        Ethereum Espirito Santo - Destino Devconnect
      </h2>
      <p
        className={`section-subtitle max-w-3xl mx-auto ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`}
        style={{ animationDelay: "0.2s" }}
      >
        Apresentando os fundamentos do Ethereum e construindo o futuro da tecnologia blockchain no ES!
      </p>
    </div>
  );
};

export default EventHeader;
