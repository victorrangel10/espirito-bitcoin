
import { useState, useEffect, useRef } from "react";

const Sponsorship = () => {
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

  const plans = [
    {
      name: "Cota Apresenta",
      price: "R$ 2.500",
      description: "Seja o principal patrocinador do evento",
      features: [
        "Logo em destaque em todo material",
        "10 minutos de apresentação",
        "10 ingressos para convidados",
        "Estande exclusivo no evento",
        "Menção em todas comunicações",
        "Material promocional no kit",
      ],
      popular: true,
    },
    {
      name: "Cota Patrocínio",
      price: "R$ 1.500",
      description: "Patrocínio com alta visibilidade",
      features: [
        "Logo em material de divulgação",
        "5 minutos de apresentação",
        "5 ingressos para convidados",
        "Mesa para materiais promocionais",
        "Menção durante o evento",
      ],
      popular: false,
    },
    {
      name: "Cota Apoio",
      price: "R$ 1.000",
      description: "Apoie o movimento Bitcoin",
      features: [
        "Logo em material digital",
        "3 ingressos para convidados",
        "Menção durante o evento",
        "Distribuição de material",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="apoio"
      className="py-16 md:py-24 bg-espirito-blue text-white"
      ref={sectionRef}
    >
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            Cotas de Apoio
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Apoie o movimento que transforma o Espírito Santo em um hub de inovação!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden ${
                plan.popular
                  ? "bg-gradient-to-br from-espirito-orange to-yellow-500 shadow-xl transform md:-translate-y-4"
                  : "bg-white/10 backdrop-blur-sm"
              } ${isVisible ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="bg-yellow-500 text-center py-2 text-white font-bold text-sm uppercase tracking-wider">
                  Mais Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
                <p
                  className={`mb-6 ${
                    plan.popular ? "text-white/90" : "text-gray-300"
                  }`}
                >
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={plan.popular ? "text-white" : "text-espirito-orange"}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className={`block text-center py-3 px-6 rounded-md font-medium transition-all duration-300 ${
                    plan.popular
                      ? "bg-white text-espirito-orange hover:bg-gray-100"
                      : "bg-espirito-orange text-white hover:opacity-90"
                  }`}
                >
                  Quero Apoiar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,266.7C960,267,1056,245,1152,213.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Sponsorship;
