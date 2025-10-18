
import React from 'react';
import { Course } from '../types';
import CourseCard from './CourseCard';

const coursesData: Course[] = [
  {
    id: 1,
    title: 'Viver Digitalmente: O Passaporte Europeu',
    description: 'O guia completo para construir sua carreira home office na Europa, do zero à primeira vaga. Aprenda a se destacar e conquistar as melhores oportunidades.',
    imageUrl: 'https://picsum.photos/seed/digitalnomad/400/300',
    link: 'https://p.eduzz.com/2091517?a=34958045',
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Inglês para Entrevistas de Emprego',
    description: 'Domine o vocabulário e a confiança necessários para se destacar em entrevistas de emprego internacionais e garantir sua vaga.',
    imageUrl: 'https://picsum.photos/seed/interview/400/300',
    link: '#',
  },
  {
    id: 3,
    title: 'Produtividade e Gestão de Tempo Remoto',
    description: 'Aprenda técnicas e ferramentas para maximizar sua produtividade, manter o foco e equilibrar vida profissional e pessoal no home office.',
    imageUrl: 'https://picsum.photos/seed/productivity/400/300',
    link: '#',
  },
  {
    id: 4,
    title: 'LinkedIn Estratégico para Vagas Internacionais',
    description: 'Transforme seu perfil no LinkedIn em uma máquina de atrair recrutadores europeus. Aprenda a otimizar e construir uma rede de contatos poderosa.',
    imageUrl: 'https://picsum.photos/seed/linkedin/400/300',
    link: '#',
  }
];

const CoursesSection: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-brand-gray px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nossos Cursos de Formação</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Prepare-se para o mercado de trabalho europeu com cursos focados nas habilidades que as empresas realmente procuram.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coursesData.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;