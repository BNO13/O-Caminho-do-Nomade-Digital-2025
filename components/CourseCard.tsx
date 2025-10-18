import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const handleScrollClick = () => {
    document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleExternalLink = () => {
    // Final attempt to resolve 403 by making the simplest possible call.
    window.open(course.link);
  };

  return (
    <div className={`bg-brand-dark rounded-lg overflow-hidden shadow-lg hover:shadow-brand-green/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col ${course.isFeatured ? 'border-2 border-brand-green' : 'border-2 border-gray-700'}`}>
      {course.isFeatured && (
        <div className="bg-brand-green text-white text-xs font-bold py-1 text-center">
          RECOMENDADO
        </div>
      )}
      <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" loading="lazy"/>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white">{course.title}</h3>
        <p className="text-gray-400 text-sm flex-grow mb-4">{course.description}</p>
        {course.link === '#' ? (
          <button 
            onClick={handleScrollClick}
            className="mt-auto block w-full text-center bg-brand-green text-white font-semibold py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors duration-300">
            Saber Mais
          </button>
        ) : (
          <button 
            onClick={handleExternalLink}
            className="mt-auto block w-full text-center bg-brand-green text-white font-semibold py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors duration-300">
            Saber Mais
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;