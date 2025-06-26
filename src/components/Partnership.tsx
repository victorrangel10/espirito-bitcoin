
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface PartnershipFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

const Partnership = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PartnershipFormData>();

  React.useEffect(() => {
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

  const onSubmit = async (data: PartnershipFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulating API call to /api/parcerias
      const response = await fetch('/api/parcerias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        toast({
          title: "Mensagem enviada!",
          description: "Recebemos sua mensagem! Vamos responder em até 48h.",
        });
      } else {
        throw new Error('Falha no envio');
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Erro ao enviar. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="parcerias"
      className="py-16 md:py-24 bg-espirito-blue text-white"
      ref={sectionRef}
    >
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            Seja nosso parceiro
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Tem interesse em apoiar ou se tornar parceiro do Espírito BTC? Preencha o formulário e entraremos em contato!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div
            className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mb-4">
                  <svg 
                    className="w-16 h-16 text-green-400 mx-auto" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Mensagem enviada!</h3>
                <p className="text-gray-200">
                  Recebemos sua mensagem! Vamos responder em até 48h.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 bg-espirito-orange hover:bg-espirito-orange/90"
                >
                  Enviar nova mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">
                      Nome completo *
                    </Label>
                    <Input
                      id="name"
                      {...register("name", { required: "Nome é obrigatório" })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                      placeholder="Seu nome completo"
                    />
                    {errors.name && (
                      <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">
                      E-mail profissional *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "E-mail é obrigatório",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "E-mail inválido"
                        }
                      })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company" className="text-white mb-2 block">
                      Empresa / Organização
                    </Label>
                    <Input
                      id="company"
                      {...register("company")}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                      placeholder="Nome da empresa"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white mb-2 block">
                      Telefone / WhatsApp
                    </Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                      placeholder="(27) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">
                    Mensagem *
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message", {
                      required: "Mensagem é obrigatória",
                      minLength: {
                        value: 30,
                        message: "Mensagem deve ter pelo menos 30 caracteres"
                      }
                    })}
                    rows={5}
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="Conte-nos sobre seu interesse em ser parceiro do Espírito BTC..."
                  />
                  {errors.message && (
                    <p className="text-red-300 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-espirito-orange hover:bg-espirito-orange/90 text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </form>
            )}
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

export default Partnership;
