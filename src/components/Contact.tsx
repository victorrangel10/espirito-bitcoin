
import { useState, useEffect, useRef } from "react";
import { Bitcoin } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    setFormSubmitted(true);
    
    // Reset form
    setFormState({
      name: "",
      email: "",
      message: "",
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section
      id="contato"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
      ref={sectionRef}
    >
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className={`section-title ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            Fale Conosco
          </h2>
          <p
            className={`section-subtitle max-w-3xl mx-auto ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Entre em contato para apoiar, participar ou tirar dúvidas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-2xl font-bold mb-6 text-espirito-blue">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-espirito-blue rounded-full p-3 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-600">luiz@surfguru.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-espirito-orange rounded-full p-3 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Localização</h4>
                  <p className="text-gray-600">Vila Velha, Espírito Santo</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-500 rounded-full p-3 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Instagram</h4>
                  <p className="text-gray-600">@espiritobitcoin</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6 text-espirito-blue">
                Sobre o Bitcoin
              </h3>
              <p className="text-gray-600 mb-4">
                Bitcoin é uma moeda digital descentralizada que utiliza tecnologia 
                blockchain para permitir transações seguras, rápidas e com baixas 
                taxas, sem a necessidade de intermediários.
              </p>
              <div className="flex items-center gap-2 text-espirito-blue">
                <Bitcoin className="w-6 h-6" />
                <span className="font-semibold">Junte-se à revolução financeira</span>
              </div>
            </div>
          </div>

          <div
            className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.5s" }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-espirito-blue">
                Envie uma Mensagem
              </h3>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="font-medium">Mensagem enviada com sucesso!</span>
                  </div>
                  <p className="mt-1 text-sm">
                    Agradecemos seu contato. Responderemos em breve!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-espirito-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-espirito-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-espirito-blue focus:border-transparent"
                    ></textarea>
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn-primary w-full"
                    >
                      Enviar Mensagem
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
