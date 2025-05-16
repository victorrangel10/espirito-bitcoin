
import { useState, useEffect, useRef } from "react";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const images = [
    {
      url: "/lovable-uploads/18cdae14-bf02-46a0-b0aa-197515582167.png",
      alt: "Painel de discussão sobre Bitcoin",
      caption: "Painel de discussão sobre adoção de Bitcoin",
    },
    {
      url: "/lovable-uploads/dde9bb8a-45bc-41a0-b09e-4861d6bd3bb8.png",
      alt: "Apresentação sobre criptomoedas",
      caption: "Apresentação sobre o ecossistema Bitcoin",
    },
    {
      url: "/lovable-uploads/b8ffa470-ca84-43ba-b224-762da66ca746.png",
      alt: "Público engajado em evento",
      caption: "Público atento às palestras",
    },
    {
      url: "/lovable-uploads/818d3374-7195-472c-97a5-f6533d0c1290.png",
      alt: "Participantes do evento",
      caption: "Participantes aprendendo sobre blockchain",
    },
    {
      url: "/lovable-uploads/fe906817-551e-4f1b-984f-492811804fcd.png",
      alt: "Comunidade comemorando",
      caption: "Entusiasmo ao final da apresentação",
    },
    {
      url: "/lovable-uploads/b729584f-8a07-4fcb-949a-6720d2360c93.png",
      alt: "Encontro da comunidade Web3",
      caption: "1º Encontro Web3 - Dezembro 2022",
    },
  ];

  return (
    <section id="galeria" className="py-16 md:py-24 bg-white" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className={`section-title ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            Galeria de Eventos
          </h2>
          <p
            className={`section-subtitle max-w-3xl mx-auto ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Confira alguns momentos dos nossos eventos anteriores
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative rounded-lg overflow-hidden h-64 shadow-lg ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-semibold">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-10 text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.8s" }}
        >
          <p className="text-gray-600 mb-4">
            Quer fazer parte da nossa próxima galeria? Participe dos eventos!
          </p>
          <a href="#evento" className="btn-primary inline-block">
            Próximo Evento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
