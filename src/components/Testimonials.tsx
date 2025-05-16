
import { useState, useEffect, useRef } from "react";

const Testimonials = () => {
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

  const testimonials = [
    {
      quote:
        "Nunca imaginei que aprender sobre cripto pudesse ser tão acessível e divertido.",
      name: "João",
      role: "Estudante",
    },
    {
      quote:
        "Os eventos do Espírito Bitcoin abriram minha mente para um novo mundo de possibilidades financeiras.",
      name: "Ana",
      role: "Empreendedora",
    },
    {
      quote:
        "A comunidade é acolhedora e me ajudou a implementar Bitcoin no meu negócio local.",
      name: "Carlos",
      role: "Comerciante",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-gray-50"
      id="depoimentos"
      ref={sectionRef}
    >
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className={`section-title ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            O Que Dizem Sobre Nós
          </h2>
          <p
            className={`section-subtitle max-w-3xl mx-auto ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Depoimentos de quem já participou dos nossos eventos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-md relative ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-espirito-orange rounded-full flex items-center justify-center text-white text-2xl">
                "
              </div>
              <div className="pt-4">
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
