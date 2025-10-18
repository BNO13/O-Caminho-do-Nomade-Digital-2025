import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 px-4">
      <div className="container mx-auto text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} O caminho do Nomade Digital. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Construindo pontes para sua carreira internacional.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-brand-green transition-colors">Termos de Uso</a>
          <span>|</span>
          <a href="#" className="hover:text-brand-green transition-colors">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;