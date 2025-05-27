
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, ExternalLink, Users, Lightbulb, Shield, History, Building, MapPin, BookOpen, Heart } from "lucide-react";

const LearningTrail = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
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

  const steps = [
    {
      number: 1,
      title: "Bitcoin além do dinheiro",
      description: "Introdução à filosofia do Bitcoin como movimento descentralizador",
      icon: Lightbulb,
      content: "Descubra como o Bitcoin representa muito mais que uma moeda digital - é uma revolução na forma como pensamos sobre dinheiro, liberdade e descentralização.",
      cta: "Assistir Introdução",
      type: "video"
    },
    {
      number: 2,
      title: "Liberdade financeira e comunidades locais",
      description: "Como Bitcoin e stablecoins podem fortalecer economias locais",
      icon: Users,
      content: "Explore casos reais de como o Bitcoin está transformando comunidades no Brasil e no mundo, criando oportunidades econômicas locais.",
      cta: "Ver Casos Reais",
      type: "article"
    },
    {
      number: 3,
      title: "Como funciona o blockchain",
      description: "Linguagem simples + analogias visuais",
      icon: BookOpen,
      content: "Entenda a tecnologia por trás do Bitcoin de forma simples e visual, sem complicações técnicas desnecessárias.",
      cta: "Explorar Tecnologia",
      type: "interactive"
    },
    {
      number: 4,
      title: "Wallets e custódia pessoal",
      description: "Tipos de carteiras, seed phrase e segurança",
      icon: Shield,
      content: "Aprenda a proteger seus bitcoins com segurança, entendendo carteiras quentes, frias e a importância da custódia pessoal.",
      cta: "Guia de Segurança",
      type: "guide"
    },
    {
      number: 5,
      title: "História do dinheiro e moedas digitais",
      description: "Linha do tempo do surgimento das criptomoedas",
      icon: History,
      content: "Uma jornada através da evolução do dinheiro, desde o escambo até as moedas digitais e o nascimento do Bitcoin.",
      cta: "Ver Timeline",
      type: "timeline"
    },
    {
      number: 6,
      title: "Moedas sociais no Brasil",
      description: "Banco Palmas, Muda e moedas comunitárias",
      icon: Building,
      content: "Conheça iniciativas brasileiras de moedas sociais e como o blockchain pode potencializar essas comunidades.",
      cta: "Conhecer Projetos",
      type: "showcase"
    },
    {
      number: 7,
      title: "Web3 no Espírito Santo",
      description: "Entrevistas e projetos regionais",
      icon: MapPin,
      content: "Histórias inspiradoras de empreendedores e projetos Web3 que estão nascendo aqui no Espírito Santo.",
      cta: "Ver Entrevistas",
      type: "documentary"
    },
    {
      number: 8,
      title: "Junte-se à Comunidade",
      description: "Faça parte do movimento Bitcoin no ES",
      icon: Heart,
      content: "Conecte-se com outros entusiastas, participe dos nossos meetups e ajude a construir o futuro financeiro do Espírito Santo.",
      cta: "Entrar na Comunidade",
      type: "community"
    }
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section
      id="trilha"
      className="py-16 md:py-24 bg-gradient-to-br from-espirito-blue via-[#1a2332] to-espirito-blue text-white relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-espirito-orange rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <span className="gradient-text">Trilha de Aprendizagem</span>
          </h2>
          <p
            className={`text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Sua jornada completa para entender Bitcoin, blockchain e o futuro das finanças descentralizadas
          </p>
        </div>

        {/* Desktop Layout - Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-espirito-orange to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.number}
                </div>

                <div className="mb-4">
                  <IconComponent className="w-12 h-12 text-espirito-orange mb-3" />
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{step.description}</p>
                  <p className="text-gray-200 text-sm mb-6">{step.content}</p>
                </div>

                <button className="w-full bg-espirito-orange hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
                  {step.type === "video" && <Play className="w-4 h-4" />}
                  {step.type === "community" && <Users className="w-4 h-4" />}
                  {!["video", "community"].includes(step.type) && <ExternalLink className="w-4 h-4" />}
                  {step.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Mobile Layout - Carousel */}
        <div className="lg:hidden mb-16">
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentStep * 100}%)` }}>
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="w-full flex-shrink-0 p-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 relative">
                        {/* Step Number */}
                        <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-espirito-orange to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {step.number}
                        </div>

                        <div className="text-center">
                          <IconComponent className="w-16 h-16 text-espirito-orange mb-4 mx-auto" />
                          <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                          <p className="text-gray-300 mb-4">{step.description}</p>
                          <p className="text-gray-200 mb-6">{step.content}</p>

                          <button className="w-full bg-espirito-orange hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                            {step.type === "video" && <Play className="w-4 h-4" />}
                            {step.type === "community" && <Users className="w-4 h-4" />}
                            {!["video", "community"].includes(step.type) && <ExternalLink className="w-4 h-4" />}
                            {step.cta}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevStep}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextStep}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStep ? "bg-espirito-orange w-6" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div
          className={`text-center bg-gradient-to-r from-espirito-orange/20 to-yellow-500/20 backdrop-blur-sm rounded-2xl p-8 border border-espirito-orange/30 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "1s" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Essa trilha é apenas o começo!
          </h3>
          <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
            Conecte-se com a comunidade e participe dos nossos encontros presenciais no Espírito Santo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              className="bg-espirito-orange hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Users className="w-5 h-5" />
              Entrar na Comunidade
            </a>
            <a
              href="#evento"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Próximos Eventos
            </a>
          </div>
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

export default LearningTrail;
