'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Camera } from 'lucide-react';

const MessiasLandingPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Frases do grupo (mais sutil)
  const quotes = [
    '"Agora vai!"; - Marlos',
    '"Messias Forever!" - Chico',
    '"A lenda finalmente vai acontecer!"',
    '"Old War!" - Chico & Marlos'
  ];
  const [currentQuote, setCurrentQuote] = useState(0);

  // Countdown para 26/07/2025
  useEffect(() => {
    const targetDate = new Date('2025-07-26T12:00:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Rotação suave das frases
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  // Membros com personalidade (mais clean)
  const turmaMembers = [
    { name: 'Andressa Borges', nick: 'A Organizadora', emoji: '📅' },
    { name: 'Francisco Palazzo', nick: 'Chico - Engenheiro', emoji: '✈️' },
    { name: 'Marlos Vinicius', nick: 'Marlão - Old War', emoji: '🏆' },
    { name: 'Alexandre Naves', nick: 'Gavião', emoji: '🦅' },
    { name: 'Glenio', nick: 'NY Resident', emoji: '🗽' },
    { name: 'Mariana Cintra', nick: 'Nossa Global', emoji: '🌎' },
    { name: 'Maira Selva', nick: 'A Escritora', emoji: '📚' },
    { name: 'Ana Tereza', nick: 'Tetê de Brasília', emoji: '🏛️' },
    { name: 'Guilherme Melazo', nick: 'Gui', emoji: '🎵' },
    { name: 'Daniel Abrahão', nick: 'O Galã', emoji: '⭐' },
    { name: 'Otavio', nick: 'O Viajante', emoji: '🌍' },
    { name: 'Luis Thelez', nick: 'Thelez', emoji: '🎭' },
    { name: 'Daniela Pontes', nick: 'Sueca do Frio', emoji: '❄️' },
    { name: 'Rodrigo Silva', nick: 'Parisiense', emoji: '🇫🇷' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">MP</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Messias Pedreiro</h1>
                <p className="text-purple-600 font-semibold">Turma 1999 - 3º Colegial</p>
              </div>
            </div>
            <div className="text-right bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-xl">
              <p className="text-xl font-bold text-purple-600">26 Anos! 🎉</p>
              <p className="text-gray-600">1999 → 2025</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Frase rotativa sutil */}
            <div className="mb-8">
              <p className="text-lg text-purple-600 font-medium italic transition-all duration-500">
                {quotes[currentQuote]}
              </p>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Messias Forever!
              </span>
            </h2>

            <div className="text-2xl md:text-3xl mb-8 font-semibold text-gray-700">
              A lenda finalmente vai acontecer! ✨
            </div>

            <p className="text-lg mb-12 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Depois de 26 anos, infinitas enquetes de datas e milhares de mensagens no grupo... 
              <strong className="text-purple-600"> 2025 é o nosso ano!</strong>
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                <h3 className="font-bold text-xl mb-3">Data</h3>
                <p className="text-lg font-semibold">26 de Julho, 2025</p>
                <p className="text-gray-600">Sábado às 12h00</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-pink-500">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-pink-500" />
                <h3 className="font-bold text-xl mb-3">Local</h3>
                <p className="text-lg font-semibold">Uberlândia - MG</p>
                <p className="text-gray-600">Casa da Andressa 🏠</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                <Users className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h3 className="font-bold text-xl mb-3">Confirmados</h3>
                <p className="text-lg font-semibold">9+ pessoas</p>
                <p className="text-gray-600">Famílias incluídas!</p>
              </div>
            </div>

            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl px-8 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Confirmar Presença 🎊
            </button>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">Contagem Regressiva</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">{value}</div>
                <div className="text-sm uppercase tracking-wide text-gray-600 font-medium">
                  {unit === 'days' ? 'Dias' : unit === 'hours' ? 'Horas' : unit === 'minutes' ? 'Minutos' : 'Segundos'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Nossa Jornada</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">🏫</div>
                <h4 className="text-xl font-bold mb-4 text-purple-600">1999 - A Formatura</h4>
                <p className="text-gray-600 leading-relaxed">
                  Nos formamos no Messias Pedreiro com a lendária camiseta &quot;Alunos da Rosilene&quot;. 
                  London, Poison e Public eram nossos points favoritos.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="text-xl font-bold mb-4 text-pink-600">2023 - O Grupo</h4>
                <p className="text-gray-600 leading-relaxed">
                  Criamos o &quot;Messias Forever&quot; no WhatsApp. Milhões de enquetes sobre datas, 
                  galera espalhada pelo mundo, e sempre o famoso &quot;agora vai!&quot;
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h4 className="text-xl font-bold mb-4 text-blue-600">2025 - A Realização</h4>
                <p className="text-gray-600 leading-relaxed">
                  Data definida, local confirmado, churrasqueiro contratado. 
                  A lenda finalmente vai se tornar realidade!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
              <Camera className="w-8 h-8 inline-block mr-3 text-purple-600" />
              Galeria de Memórias
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
              {Array.from({ length: 24 }).map((_, photoIndex) => (
                <div key={photoIndex} className="aspect-square bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group cursor-pointer">
                  <div className="text-center text-gray-400 group-hover:text-purple-500 transition-colors">
                    <Camera className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-xs font-medium">Foto {photoIndex + 1}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-center text-gray-600">
              Em breve: fotos da formatura, encontros e muito mais!
            </p>
          </div>
        </div>
      </section>

      {/* Nossa Turma */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Nossa Turma</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {turmaMembers.map((member, memberIndex) => (
                <div key={memberIndex} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center group">
                  <div className="text-3xl mb-3">{member.emoji}</div>
                  <h4 className="font-bold text-gray-800 mb-2">{member.name}</h4>
                  <p className="text-sm text-purple-600 font-medium">{member.nick}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Confirmados */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8 text-gray-800">Lista de Confirmados</h3>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold mb-6 text-purple-600">
                🎉 Festa Messias Forever - 26/07/2025 às 12:00
              </h4>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <p className="flex items-center"><span className="font-semibold mr-2">1.</span> Marlão (2 adultos + 2 crianças)</p>
                  <p className="flex items-center"><span className="font-semibold mr-2">2.</span> Chico (1 adulto)</p>
                  <p className="flex items-center"><span className="font-semibold mr-2">3.</span> Andressa (1 adulto + 1 criança)</p>
                  <p className="flex items-center"><span className="font-semibold mr-2">4.</span> Daniel Abrahão</p>
                  <p className="flex items-center"><span className="font-semibold mr-2">5.</span> Alexandre Gavião</p>
                </div>
                <div className="space-y-3">
                  <p className="flex items-center"><span className="font-semibold mr-2">6.</span> Maíra</p>
                  <p className="flex items-center"><span className="font-semibold mr-2">7.</span> Guilherme</p>
                  <p className="flex items-center"><span className="font-semibold mr-2">8.</span> Otávio</p>
                  <p className="flex items-center"><span className="font-semibold mr-2">9.</span> Cristina (3 adultos + 2 crianças)</p>
                  <p className="text-purple-600 font-semibold">+ Mais confirmações chegando!</p>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-600 mt-6 font-medium">
              &quot;Meta: atingir a meta e depois dobrar a meta!&quot; 📈
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-4">Messias Pedreiro - Turma 1999</h4>
            <p className="mb-6 text-gray-300">
              &quot;Uma vez Messias, sempre Messias!&quot; ❤️
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>Uberlândia - MG</span>
              <span>•</span>
              <span>26 Anos de Amizade</span>
              <span>•</span>
              <span>Memórias Eternas</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MessiasLandingPage;