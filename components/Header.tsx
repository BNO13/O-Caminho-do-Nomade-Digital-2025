import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50 py-4 px-6 md:px-10 shadow-lg shadow-black/20">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-white tracking-wider">
          O caminho do Nomade <span className="text-brand-green">Digital</span>
        </h1>
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('courses')} className="text-gray-300 hover:text-brand-green transition-colors duration-300">Cursos</button>
          <button onClick={() => scrollToSection('enroll')} className="text-gray-300 hover:text-brand-green transition-colors duration-300">Como Funciona</button>
          <button onClick={() => scrollToSection('jobs')} className="text-gray-300 hover:text-brand-green transition-colors duration-300">Vagas</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;