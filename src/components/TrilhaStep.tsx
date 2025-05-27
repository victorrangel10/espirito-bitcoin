
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Play, ExternalLink } from "lucide-react";

interface StepData {
  number: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  content: string;
  fullContent: string;
}

interface TrilhaStepProps {
  step: StepData;
  isOdd: boolean;
}

const TrilhaStep = ({ step, isOdd }: TrilhaStepProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = step.icon;

  return (
    <section className={`py-16 ${isOdd ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isOdd ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          
          {/* Content Side */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-espirito-orange to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                {step.number}
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-espirito-blue mb-2">
                  {step.title}
                </h2>
                <p className="text-lg text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {step.content}
              </p>
              
              {isExpanded && (
                <div className="mt-4 p-6 bg-white/80 rounded-lg border-l-4 border-espirito-orange">
                  <p className="text-gray-700 leading-relaxed">
                    {step.fullContent}
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-espirito-blue hover:bg-espirito-blue/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-5 h-5" />
                    Ver Menos
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-5 h-5" />
                    Saber Mais
                  </>
                )}
              </button>
              
              <button className="bg-espirito-orange hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                {step.number === 8 ? (
                  <>
                    <ExternalLink className="w-5 h-5" />
                    Entrar na Comunidade
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    Acessar Conteúdo
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Icon Side */}
          <div className="flex-1 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-espirito-blue/10 to-espirito-orange/10 rounded-full flex items-center justify-center">
              <IconComponent className="w-24 h-24 md:w-32 md:h-32 text-espirito-orange" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrilhaStep;
