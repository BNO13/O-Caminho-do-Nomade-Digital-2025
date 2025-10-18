import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  const videoId = 'DVKFx2ptRbk';
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&autohide=1&modestbranding=1`;

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
            <iframe
                className="absolute top-1/2 left-1/2"
                style={{ width: '100vw', height: '56.25vw', minHeight: '100vh', minWidth: '177.77vh', transform: 'translate(-50%, -50%)' }}
                src={videoUrl}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Apresentação"
            ></iframe>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>
        <div className="z-20 max-w-3xl px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                Sua Carreira <span className="text-brand-green">Home Office</span> na Europa Começa Aqui
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Transforme seu sonho de trabalhar remotamente para empresas europeias em realidade. Preparamos o caminho para você, do zero à sua primeira vaga.
            </p>
            <button
                onClick={scrollToCourses}
                className="bg-brand-green text-white font-bold text-xl py-4 px-10 rounded-lg shadow-lg shadow-brand-green/30 transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
                Descubra os Cursos
            </button>
        </div>
    </section>
  );
};

export default HeroSection;
