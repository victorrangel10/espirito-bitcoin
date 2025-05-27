
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrilhaStep from "../components/TrilhaStep";
import { Lightbulb, Users, BookOpen, Shield, History, Building, MapPin, Heart, Calendar } from "lucide-react";

const Trilha = () => {
  const steps = [
    {
      number: 1,
      title: "Bitcoin além do dinheiro",
      description: "Introdução à filosofia do Bitcoin como movimento descentralizador",
      icon: Lightbulb,
      content: "Descubra como o Bitcoin representa muito mais que uma moeda digital - é uma revolução na forma como pensamos sobre dinheiro, liberdade e descentralização. Explore os princípios fundamentais que fazem do Bitcoin uma tecnologia transformadora para a sociedade.",
      fullContent: "O Bitcoin nasceu como uma resposta à necessidade de um sistema monetário verdadeiramente descentralizado. Mais do que apenas uma moeda digital, ele representa uma filosofia de liberdade financeira e autonomia individual. Nesta seção, você entenderá como o Bitcoin desafia o sistema bancário tradicional e oferece uma alternativa peer-to-peer que coloca o poder de volta nas mãos das pessoas."
    },
    {
      number: 2,
      title: "Liberdade financeira e comunidades locais",
      description: "Como Bitcoin e stablecoins podem fortalecer economias locais",
      icon: Users,
      content: "Explore casos reais de como o Bitcoin está transformando comunidades no Brasil e no mundo, criando oportunidades econômicas locais e promovendo a inclusão financeira em áreas tradicionalmente marginalizadas pelos bancos.",
      fullContent: "Comunidades ao redor do mundo estão descobrindo como as criptomoedas podem resolver problemas locais reais. Desde El Salvador até pequenas cidades brasileiras, vemos exemplos de como Bitcoin e stablecoins estão criando oportunidades de trabalho, facilitando remessas internacionais e oferecendo serviços financeiros para populações não bancarizadas. Aprenda sobre esses casos de sucesso e como implementar soluções similares."
    },
    {
      number: 3,
      title: "Como funciona o blockchain",
      description: "Linguagem simples + analogias visuais",
      icon: BookOpen,
      content: "Entenda a tecnologia por trás do Bitcoin de forma simples e visual, sem complicações técnicas desnecessárias. Usamos analogias do dia a dia para explicar conceitos como hash, blocos e consenso.",
      fullContent: "O blockchain pode parecer complexo, mas na verdade é um conceito bem simples quando explicado corretamente. Imagine um livro de registros que nunca pode ser alterado e que milhares de pessoas verificam simultaneamente. Cada 'página' deste livro é um bloco, e todas as páginas estão conectadas em uma corrente (chain). Vamos explorar como essa tecnologia garante segurança, transparência e descentralização."
    },
    {
      number: 4,
      title: "Wallets e custódia pessoal",
      description: "Tipos de carteiras, seed phrase e segurança",
      icon: Shield,
      content: "Aprenda a proteger seus bitcoins com segurança, entendendo carteiras quentes, frias e a importância da custódia pessoal. 'Not your keys, not your coins' - entenda por que isso é fundamental.",
      fullContent: "A segurança dos seus bitcoins depende completamente de como você os armazena. Existem diferentes tipos de carteiras, cada uma com suas vantagens e desvantagens. Carteiras quentes são convenientes para uso diário, enquanto carteiras frias oferecem máxima segurança para grandes quantias. Aprenda sobre seed phrases, chaves privadas e públicas, e as melhores práticas para manter seus bitcoins seguros."
    },
    {
      number: 5,
      title: "História do dinheiro e moedas digitais",
      description: "Linha do tempo do surgimento das criptomoedas",
      icon: History,
      content: "Uma jornada através da evolução do dinheiro, desde o escambo até as moedas digitais e o nascimento do Bitcoin. Entenda o contexto histórico que levou à criação das criptomoedas.",
      fullContent: "Para entender verdadeiramente o Bitcoin, precisamos conhecer a história do dinheiro. Desde as primeiras formas de escambo, passando por moedas de metal precioso, papel-moeda e sistemas bancários centralizados, cada evolução trouxe benefícios e problemas. O Bitcoin surgiu como uma solução para os problemas do sistema monetário atual, especialmente após a crise financeira de 2008."
    },
    {
      number: 6,
      title: "Moedas sociais no Brasil",
      description: "Banco Palmas, Muda e moedas comunitárias",
      icon: Building,
      content: "Conheça iniciativas brasileiras de moedas sociais e como o blockchain pode potencializar essas comunidades, criando sistemas econômicos mais justos e inclusivos.",
      fullContent: "O Brasil é pioneiro em moedas sociais e comunitárias. O Banco Palmas, no Ceará, criou a primeira moeda social do país, fortalecendo a economia local. Outras iniciativas como a Muda e diversas moedas comunitárias mostram como é possível criar sistemas econômicos alternativos. Com a tecnologia blockchain, essas iniciativas podem ganhar ainda mais transparência, eficiência e alcance."
    },
    {
      number: 7,
      title: "Web3 no Espírito Santo",
      description: "Entrevistas e projetos regionais",
      icon: MapPin,
      content: "Histórias inspiradoras de empreendedores e projetos Web3 que estão nascendo aqui no Espírito Santo. Conheça quem está construindo o futuro digital no nosso estado.",
      fullContent: "O Espírito Santo está se tornando um hub de inovação em Web3 e blockchain. Conheca empreendedores locais que estão criando projetos inovadores, desde startups de DeFi até iniciativas de tokenização de ativos. Veja entrevistas exclusivas, cases de sucesso e oportunidades de networking com a comunidade tech capixaba."
    },
    {
      number: 8,
      title: "Junte-se à Comunidade",
      description: "Faça parte do movimento Bitcoin no ES",
      icon: Heart,
      content: "Conecte-se com outros entusiastas, participe dos nossos meetups e ajude a construir o futuro financeiro do Espírito Santo. A revolução financeira acontece através da comunidade.",
      fullContent: "A jornada de aprendizado sobre Bitcoin é muito mais rica quando compartilhada. Nossa comunidade no Espírito Santo está crescendo e sempre buscando novos membros. Participe dos nossos meetups, workshops e eventos. Conecte-se com outros entusiastas, tire dúvidas, compartilhe conhecimento e faça parte da construção de um futuro financeiro mais descentralizado no nosso estado."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-espirito-blue via-[#1a2332] to-espirito-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Trilha de Aprendizagem
          </h1>
          <p className="text-xl md:text-2xl text-espirito-orange max-w-4xl mx-auto mb-4">
            Transforme seu negócio: aceite Bitcoin e abra as portas para o futuro dos pagamentos
          </p>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Sua jornada completa para entender Bitcoin, blockchain e como implementar pagamentos descentralizados no seu empreendimento
          </p>
        </div>
      </section>

      {/* Steps */}
      {steps.map((step, index) => (
        <TrilhaStep 
          key={step.number}
          step={step}
          isOdd={index % 2 === 1}
        />
      ))}

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-espirito-blue via-[#1a2332] to-espirito-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Essa trilha é apenas o começo!
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Conecte-se com a comunidade e participe do nosso próximo evento presencial no Espírito Santo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#evento"
              className="bg-espirito-orange hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Participar do Próximo Evento
            </a>
            <a
              href="/"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
            >
              Voltar ao Início
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Trilha;
