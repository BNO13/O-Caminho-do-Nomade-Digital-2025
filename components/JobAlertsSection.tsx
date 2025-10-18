
import React, { useState } from 'react';

const JobAlertsSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted for job alerts:', email);
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000); // Reset after 5 seconds
    }
  };

  return (
    <section id="jobs" className="py-20 bg-brand-gray px-4" style={{backgroundImage: "linear-gradient(rgba(34, 34, 34, 0.9), rgba(34, 34, 34, 1)), url('https://picsum.photos/seed/map/1920/1080')"}}>
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Não Perca Nenhuma Oportunidade</h2>
        <p className="text-gray-300 mb-8">
          Cadastre-se para receber em primeira mão as melhores vagas de trabalho home office na Europa, selecionadas por nossa equipe.
        </p>
        
        {submitted ? (
          <div className="bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg" role="alert">
            <strong className="font-bold">Sucesso!</strong>
            <span className="block sm:inline"> Seu e-mail foi cadastrado. Fique de olho na sua caixa de entrada!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu melhor e-mail" 
              required
              className="flex-grow bg-gray-800 text-white placeholder-gray-500 border-2 border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
            />
            <button 
              type="submit"
              className="bg-brand-green text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-colors duration-300 shadow-lg">
              Receber Vagas
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default JobAlertsSection;
