
import { useState, useEffect, useRef } from "react";

const About = () => {
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

  const features = [
    {
      emoji: "📚",
      title: "Educação",
      description: "Meetups, bootcamps e workshops",
    },
    {
      emoji: "🛠️",
      title: "Projetos",
      description: "Uso real de Bitcoin e stablecoins",
    },
    {
      emoji: "🤝",
      title: "Conexão",
      description: "Networking e fomento ao ecossistema",
    },
  ];

  return (
    <section id="sobre" className="bg-white py-16 md:py-24" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className={`section-title ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            Sobre a Comunidade
          </h2>
          <p className={`section-subtitle mx-auto max-w-3xl ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            Espírito Bitcoin é uma comunidade ativa que une entusiastas, empreendedores e curiosos do ecossistema cripto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={isVisible ? "animate-fade-in" : "opacity-0"} style={{ animationDelay: "0.3s" }}>
            <p className="text-lg text-gray-700 mb-6">
              Nascemos com o propósito de fomentar a educação e adoção de Bitcoin e tecnologias blockchain no Espírito Santo, criando um hub local de inovação descentralizada.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Nosso foco está em três pilares fundamentais: eventos educacionais acessíveis, incentivo a negócios locais usando Bitcoin e desenvolvimento de projetos inovadores baseados em tecnologia blockchain.
            </p>
            <p className="text-lg text-gray-700">
              Seja você um especialista, entusiasta ou apenas curioso sobre o mundo cripto, há um lugar para você em nossa comunidade.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex items-start gap-4 card-hover ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="text-4xl">{feature.emoji}</div>
                <div>
                  <h3 className="text-xl font-semibold text-espirito-blue mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
