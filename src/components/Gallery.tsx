
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
      url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      alt: "Pessoas em evento de Bitcoin",
      caption: "Workshop sobre carteiras Bitcoin",
    },
    {
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      alt: "Participantes em meetup",
      caption: "Meetup mensal da comunidade",
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Workshop de Bitcoin",
      caption: "Aprendizado prático sobre blockchain",
    },
    {
      url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      alt: "Apresentação sobre criptomoedas",
      caption: "Palestra sobre Bitcoin e privacidade",
    },
    {
      url: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
      alt: "Networking após evento",
      caption: "Happy hour pós-evento",
    },
    {
      url: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      alt: "Demonstração de lightning network",
      caption: "Demonstração de pagamentos instantâneos",
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
