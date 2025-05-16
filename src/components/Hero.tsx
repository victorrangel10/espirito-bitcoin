
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center" id="home">
      {/* Background */}
      <div
        className="absolute inset-0 bg-espirito-blue z-0"
        style={{
          backgroundColor: "#141c27",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "soft-light",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className={`text-white ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">Espírito Bitcoin:</span>
              <span className="gradient-text">Educação. Inovação. Adoção.</span>
            </h1>

            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Fomentando o uso de Bitcoin no Espírito Santo por meio de encontros, projetos e muito aprendizado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#evento" className="btn-primary text-center">
                Participe do Próximo Evento
              </a>
              <a
                href="#sobre"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium py-3 px-6 rounded-md hover:bg-white/20 transition-all duration-300 text-center"
              >
                Conheça a Comunidade
              </a>
            </div>
          </div>

          <div
            className={`flex justify-center ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src="/lovable-uploads/4549e0c9-2d22-446d-87be-dbdf0718a5d4.png"
                alt="Espírito Bitcoin Logo"
                className="w-full h-full object-contain mix-blend-multiply"
              />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-espirito-blue via-purple-500 to-espirito-orange opacity-50 blur-xl -z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
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

export default Hero;
