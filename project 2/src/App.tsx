import React from 'react';
import { Phone, Mail, Music, Star, Clock, MessageSquare } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      {/* Hero Section */}
      <header className="bg-amber-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Matheus Augusto Silva</h1>
          <p className="text-xl md:text-2xl">Professor de Violão</p>
        </div>
      </header>

      {/* Biografia */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-amber-900">Sobre Mim</h2>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Com mais de 10 anos de experiência dedicados ao violão, compartilho minha paixão pela música através do ensino. 
              Minha jornada musical me permitiu desenvolver uma metodologia única que se adapta às necessidades de cada aluno, 
              seja iniciante ou avançado.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Acredito que a música tem o poder de transformar vidas, e é por isso que me dedico a criar um ambiente de 
              aprendizado acolhedor e estimulante para todos os meus alunos.
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-amber-900">Por que me escolher?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Music className="w-12 h-12 mx-auto mb-4 text-amber-700" />
              <h3 className="text-xl font-semibold mb-2">Experiência</h3>
              <p className="text-gray-600">Mais de uma década de prática e ensino</p>
            </div>
            <div className="text-center p-6">
              <Star className="w-12 h-12 mx-auto mb-4 text-amber-700" />
              <h3 className="text-xl font-semibold mb-2">Metodologia</h3>
              <p className="text-gray-600">Aulas personalizadas para cada aluno</p>
            </div>
            <div className="text-center p-6">
              <Clock className="w-12 h-12 mx-auto mb-4 text-amber-700" />
              <h3 className="text-xl font-semibold mb-2">Flexibilidade</h3>
              <p className="text-gray-600">Horários adaptáveis à sua rotina</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-amber-900">Entre em Contato</h2>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="flex flex-col gap-6">
              <a 
                href="tel:+5527995896629" 
                className="flex items-center gap-4 text-lg hover:text-amber-700 transition-colors"
              >
                <Phone className="w-6 h-6" />
                <span>(27) 99589-6629</span>
              </a>
              <a 
                href="mailto:contato@matheusaugusto.com" 
                className="flex items-center gap-4 text-lg hover:text-amber-700 transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>contato@matheusaugusto.com</span>
              </a>
              <a 
                href="https://wa.me/5527995896629" 
                className="flex items-center gap-4 text-lg hover:text-amber-700 transition-colors"
              >
                <MessageSquare className="w-6 h-6" />
                <span>Enviar mensagem no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Matheus Augusto Silva - Professor de Violão</p>
        </div>
      </footer>
    </div>
  );
}

export default App;