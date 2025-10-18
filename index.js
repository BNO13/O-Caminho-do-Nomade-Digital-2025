// --- Simulating imports from CDNs via importmap ---
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// --- Start of components/icons.tsx ---
const ChevronRightIcon = () => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" })
    )
);

const CheckCircleIcon = () => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 text-brand-green", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
    )
);

const CursosIcon = () => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 text-brand-green", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.253v11.494m-9-5.747h18M5.45 7.45l13.1 9.1M5.45 16.55l13.1-9.1" }),
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.253v11.494m-9-5.747h18" }),
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.55 7.45c-1.386-.96-3.23-1.55-5.55-1.55-4.2 0-8 1.7-8 4s3.8 4 8 4c2.32 0 4.164-.59 5.55-1.55" })
    )
);

const FormIcon = () => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 text-brand-green", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" })
    )
);
// --- End of components/icons.tsx ---


// --- Start of components/CourseCard.tsx ---
const CourseCard = ({ course }) => {
  const handleSaberMaisClick = (e) => {
    if (course.link === '#') {
      e.preventDefault();
      document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    React.createElement('div', { className: `bg-brand-dark rounded-lg overflow-hidden shadow-lg hover:shadow-brand-green/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col ${course.isFeatured ? 'border-2 border-brand-green' : 'border-2 border-gray-700'}` },
      course.isFeatured && (
        React.createElement('div', { className: "bg-brand-green text-white text-xs font-bold py-1 text-center" }, "RECOMENDADO")
      ),
      React.createElement('img', { src: course.imageUrl, alt: course.title, className: "w-full h-48 object-cover" }),
      React.createElement('div', { className: "p-6 flex flex-col flex-grow" },
        React.createElement('h3', { className: "text-xl font-bold mb-2 text-white" }, course.title),
        React.createElement('p', { className: "text-gray-400 text-sm flex-grow mb-4" }, course.description),
        React.createElement('a', {
          href: course.link,
          onClick: handleSaberMaisClick,
          target: course.link !== '#' ? '_blank' : undefined,
          rel: course.link !== '#' ? 'noopener noreferrer' : undefined,
          className: "mt-auto block w-full text-center bg-brand-green text-white font-semibold py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors duration-300"
        }, 'Saber Mais')
      )
    )
  );
};
// --- End of components/CourseCard.tsx ---


// --- Start of components/CoursesSection.tsx ---
const coursesData = [
  { id: 1, title: 'Viver Digitalmente: O Passaporte Europeu', description: 'O guia completo para construir sua carreira home office na Europa, do zero à primeira vaga. Aprenda a se destacar e conquistar as melhores oportunidades.', imageUrl: 'https://picsum.photos/seed/digitalnomad/400/300', link: 'https://go.hotmart.com/L102484252X', isFeatured: true },
  { id: 2, title: 'Inglês para Entrevistas de Emprego', description: 'Domine o vocabulário e a confiança necessários para se destacar em entrevistas de emprego internacionais e garantir sua vaga.', imageUrl: 'https://picsum.photos/seed/interview/400/300', link: '#' },
  { id: 3, title: 'Produtividade e Gestão de Tempo Remoto', description: 'Aprenda técnicas e ferramentas para maximizar sua produtividade, manter o foco e equilibrar vida profissional e pessoal no home office.', imageUrl: 'https://picsum.photos/seed/productivity/400/300', link: '#' },
  { id: 4, title: 'LinkedIn Estratégico para Vagas Internacionais', description: 'Transforme seu perfil no LinkedIn em uma máquina de atrair recrutadores europeus. Aprenda a otimizar e construir uma rede de contatos poderosa.', imageUrl: 'https://picsum.photos/seed/linkedin/400/300', link: '#' }
];

const CoursesSection = () => {
  return (
    React.createElement('section', { id: "courses", className: "py-20 bg-brand-gray px-4" },
      React.createElement('div', { className: "container mx-auto text-center" },
        React.createElement('h2', { className: "text-3xl md:text-4xl font-bold mb-4 text-white" }, "Nossos Cursos de Formação"),
        React.createElement('p', { className: "text-gray-400 max-w-2xl mx-auto mb-12" }, "Prepare-se para o mercado de trabalho europeu com cursos focados nas habilidades que as empresas realmente procuram."),
        React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" },
          coursesData.map(course => React.createElement(CourseCard, { key: course.id, course: course }))
        )
      )
    )
  );
};
// --- End of components/CoursesSection.tsx ---

// --- Start of components/EnrollmentGuideSection.tsx ---
const Step = ({ icon, title, description }) => (
    React.createElement('div', { className: "flex flex-col items-center text-center p-6 bg-brand-gray rounded-xl border border-gray-700" },
        React.createElement('div', { className: "bg-brand-green/20 p-4 rounded-full mb-4" }, icon),
        React.createElement('h3', { className: "text-xl font-bold text-white mb-2" }, title),
        React.createElement('p', { className: "text-gray-400" }, description)
    )
);

const EnrollmentGuideSection = () => {
  return (
    React.createElement('section', { id: "enroll", className: "py-20 bg-brand-dark px-4" },
      React.createElement('div', { className: "container mx-auto text-center" },
        React.createElement('h2', { className: "text-3xl md:text-4xl font-bold mb-4 text-white" }, "Sua Jornada Começa em 3 Passos Simples"),
        React.createElement('p', { className: "text-gray-400 max-w-2xl mx-auto mb-12" }, "Siga o passo a passo para garantir sua vaga e iniciar a transformação da sua carreira."),
        React.createElement('div', { className: "flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4" },
          React.createElement(Step, { icon: React.createElement(CursosIcon), title: "1. Escolha o Curso Principal", description: "Selecione o curso 'Viver Digitalmente' para ter acesso ao método completo." }),
          React.createElement('div', { className: "text-brand-green hidden md:block mx-4" }, React.createElement(ChevronRightIcon)),
          React.createElement(Step, { icon: React.createElement(FormIcon), title: "2. Faça sua Inscrição", description: "Clique no botão abaixo e preencha seus dados na página de pagamento segura da Hotmart." }),
          React.createElement('div', { className: "text-brand-green hidden md:block mx-4" }, React.createElement(ChevronRightIcon)),
          React.createElement(Step, { icon: React.createElement(CheckCircleIcon), title: "3. Início Imediato", description: "Após a confirmação, você receberá acesso imediato à plataforma do curso para começar a estudar." })
        ),
        React.createElement('div', { className: "mt-16" },
          React.createElement('a', {
            href: "https://go.hotmart.com/L102484252X",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "bg-brand-green text-white font-bold text-xl py-4 px-10 rounded-lg shadow-lg shadow-brand-green/30 transform hover:scale-105 transition-all duration-300 ease-in-out"
          }, "INSCREVER-SE NO CURSO PRINCIPAL")
        )
      )
    )
  );
};
// --- End of components/EnrollmentGuideSection.tsx ---


// --- Start of components/Footer.tsx ---
const Footer = () => {
  return (
    React.createElement('footer', { className: "bg-black py-8 px-4" },
      React.createElement('div', { className: "container mx-auto text-center text-gray-500" },
        React.createElement('p', null, `© ${new Date().getFullYear()} O caminho do Nomade Digital. Todos os direitos reservados.`),
        React.createElement('p', { className: "text-sm mt-2" }, "Construindo pontes para sua carreira internacional."),
        React.createElement('div', { className: "mt-4 flex justify-center space-x-4" },
          React.createElement('a', { href: "#", className: "hover:text-brand-green transition-colors" }, "Termos de Uso"),
          React.createElement('span', null, "|"),
          React.createElement('a', { href: "#", className: "hover:text-brand-green transition-colors" }, "Política de Privacidade")
        )
      )
    )
  );
};
// --- End of components/Footer.tsx ---


// --- Start of components/Header.tsx ---
const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    React.createElement('header', { className: "bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50 py-4 px-6 md:px-10 shadow-lg shadow-black/20" },
      React.createElement('div', { className: "container mx-auto flex justify-between items-center" },
        React.createElement('h1', { className: "text-xl font-bold text-white tracking-wider" },
          "O caminho do Nomade ", React.createElement('span', { className: "text-brand-green" }, "Digital")
        ),
        React.createElement('nav', { className: "hidden md:flex items-center space-x-6" },
          React.createElement('button', { onClick: () => scrollToSection('courses'), className: "text-gray-300 hover:text-brand-green transition-colors duration-300" }, "Cursos"),
          React.createElement('button', { onClick: () => scrollToSection('enroll'), className: "text-gray-300 hover:text-brand-green transition-colors duration-300" }, "Como Funciona"),
          React.createElement('button', { onClick: () => scrollToSection('jobs'), className: "text-gray-300 hover:text-brand-green transition-colors duration-300" }, "Vagas")
        )
      )
    )
  );
};
// --- End of components/Header.tsx ---


// --- Start of components/HeroSection.tsx ---
const HeroSection = () => {
  const scrollToEnroll = () => {
    document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    React.createElement('section', { className: "min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat px-4 py-20", style: { backgroundImage: "linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 1)), url('https://picsum.photos/seed/office/1920/1080')" } },
      React.createElement('div', { className: "container mx-auto" },
        React.createElement('h2', { className: "text-4xl md:text-6xl font-black text-white uppercase tracking-widest mb-4" },
          "Conquiste sua Carreira ", React.createElement('span', { className: "text-brand-green" }, "Home Office"), " na Europa"
        ),
        React.createElement('p', { className: "text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8" }, "Descubra o método para encontrar trabalhos remotos, se qualificar e viver o sonho europeu."),
        React.createElement('div', { className: "bg-black/50 p-2 md:p-4 rounded-xl shadow-2xl max-w-4xl mx-auto mb-10 border border-gray-700" },
          React.createElement('div', { className: "aspect-video bg-gray-900 rounded-lg flex items-center justify-center" },
            React.createElement('iframe', {
              className: "w-full h-full rounded-lg",
              src: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0",
              title: "Vídeo de Apresentação",
              frameBorder: "0",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true
            })
          )
        ),
        React.createElement('button', {
          onClick: scrollToEnroll,
          className: "bg-brand-green text-white font-bold text-xl py-4 px-10 rounded-lg shadow-lg shadow-brand-green/30 transform hover:scale-105 transition-all duration-300 ease-in-out animate-pulse"
        }, "QUERO GARANTIR MINHA VAGA AGORA!"),
        React.createElement('p', { className: "text-sm text-gray-400 mt-4" }, "Vagas limitadas. Inscrições se encerram em breve.")
      )
    )
  );
};
// --- End of components/HeroSection.tsx ---


// --- Start of components/JobAlertsSection.tsx ---
const JobAlertsSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted for job alerts:', email);
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    React.createElement('section', { id: "jobs", className: "py-20 bg-brand-gray px-4", style: { backgroundImage: "linear-gradient(rgba(34, 34, 34, 0.9), rgba(34, 34, 34, 1)), url('https://picsum.photos/seed/map/1920/1080')" } },
      React.createElement('div', { className: "container mx-auto text-center max-w-3xl" },
        React.createElement('h2', { className: "text-3xl md:text-4xl font-bold mb-4 text-white" }, "Não Perca Nenhuma Oportunidade"),
        React.createElement('p', { className: "text-gray-300 mb-8" }, "Cadastre-se para receber em primeira mão as melhores vagas de trabalho home office na Europa, selecionadas por nossa equipe."),
        submitted ? (
          React.createElement('div', { className: "bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg", role: "alert" },
            React.createElement('strong', { className: "font-bold" }, "Sucesso!"),
            React.createElement('span', { className: "block sm:inline" }, " Seu e-mail foi cadastrado. Fique de olho na sua caixa de entrada!")
          )
        ) : (
          React.createElement('form', { onSubmit: handleSubmit, className: "flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" },
            React.createElement('input', {
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: "Digite seu melhor e-mail",
              required: true,
              className: "flex-grow bg-gray-800 text-white placeholder-gray-500 border-2 border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
            }),
            React.createElement('button', {
              type: "submit",
              className: "bg-brand-green text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-colors duration-300 shadow-lg"
            }, "Receber Vagas")
          )
        )
      )
    )
  );
};
// --- End of components/JobAlertsSection.tsx ---


// --- Start of App.tsx ---
const App = () => {
  return (
    React.createElement('div', { className: "bg-brand-dark text-gray-200 font-sans" },
      React.createElement(Header),
      React.createElement('main', null,
        React.createElement(HeroSection),
        React.createElement(CoursesSection),
        React.createElement(EnrollmentGuideSection),
        React.createElement(JobAlertsSection)
      ),
      React.createElement(Footer)
    )
  );
};
// --- End of App.tsx ---


// --- Start of index.tsx ---
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  React.createElement(React.StrictMode, null,
    React.createElement(App)
  )
);
// --- End of index.tsx ---
