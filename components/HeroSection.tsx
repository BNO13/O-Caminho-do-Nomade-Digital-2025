
import React from 'react';

const HeroSection: React.FC = () => {
  
  const scrollToEnroll = () => {
    document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat px-4 py-20" style={{backgroundImage: "linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 1)), url('https://picsum.photos/seed/office/1920/1080')"}}>
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest mb-4">
          Conquiste sua Carreira <span className="text-brand-green">Home Office</span> na Europa
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Descubra o método para encontrar trabalhos remotos, se qualificar e viver o sonho europeu.
        </p>
        
        <div className="bg-black/50 p-2 md:p-4 rounded-xl shadow-2xl max-w-4xl mx-auto mb-10 border border-gray-700">
           {/* Placeholder for YouTube video iframe */}
           <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
             <iframe 
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0" 
                title="Vídeo de Apresentação" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
             </iframe>
           </div>
        </div>

        <button 
          onClick={scrollToEnroll}
          className="bg-brand-green text-white font-bold text-xl py-4 px-10 rounded-lg shadow-lg shadow-brand-green/30 transform hover:scale-105 transition-all duration-300 ease-in-out animate-pulse">
          QUERO GARANTIR MINHA VAGA AGORA!
        </button>
        <p className="text-sm text-gray-400 mt-4">Vagas limitadas. Inscrições se encerram em breve.</p>
      </div>
    </section>
  );
};

export default HeroSection;
