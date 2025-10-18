
import React from 'react';
import { ChevronRightIcon, CheckCircleIcon, CursosIcon, FormIcon } from './icons';

interface StepProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const Step: React.FC<StepProps> = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-6 bg-brand-gray rounded-xl border border-gray-700">
        <div className="bg-brand-green/20 p-4 rounded-full mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const EnrollmentGuideSection: React.FC = () => {
  return (
    <section id="enroll" className="py-20 bg-brand-dark px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Sua Jornada Começa em 3 Passos Simples</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Siga o passo a passo para garantir sua vaga e iniciar a transformação da sua carreira.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
          <Step 
            icon={<CursosIcon />}
            title="1. Escolha o Curso Principal" 
            description="Selecione o curso 'Viver Digitalmente' para ter acesso ao método completo." 
          />
          <div className="text-brand-green hidden md:block mx-4">
            <ChevronRightIcon />
          </div>
          <Step 
            icon={<FormIcon />}
            title="2. Faça sua Inscrição" 
            description="Clique no botão abaixo e preencha seus dados na página de pagamento segura da Hotmart." 
          />
          <div className="text-brand-green hidden md:block mx-4">
            <ChevronRightIcon />
          </div>
          <Step 
            icon={<CheckCircleIcon />}
            title="3. Início Imediato" 
            description="Após a confirmação, você receberá acesso imediato à plataforma do curso para começar a estudar." 
          />
        </div>
        <div className="mt-16">
          <a 
            href="https://go.hotmart.com/L102484252X"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-green text-white font-bold text-xl py-4 px-10 rounded-lg shadow-lg shadow-brand-green/30 transform hover:scale-105 transition-all duration-300 ease-in-out">
            INSCREVER-SE NO CURSO PRINCIPAL
          </a>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentGuideSection;