import React from 'react';
import { TestimonialData } from '../types';

interface TestimonialCardProps {
  testimonial: TestimonialData;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-full flex flex-col">
      <svg className="w-10 h-10 text-teal-500 mb-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M5.5 2.5a1 1 0 00-1.731.693l-.973 5.836A1 1 0 004 10h2.5V7a1 1 0 011-1h1a1 1 0 110 2H7v5a1 1 0 01-1 1H4a2 2 0 01-2-2V9a2 2 0 011.027-1.731l.973-5.836A3 3 0 015.5 0H10a1 1 0 110 2H5.5a1 1 0 00-.001.5zM14.5 0a3 3 0 012.473 4.433l-.973 5.836A1 1 0 0115 11h-2.5V8a1 1 0 00-1-1h-1a1 1 0 100 2H13v5a1 1 0 001 1h2a2 2 0 002-2V9a2 2 0 00-1.027-1.731l-.973-5.836A1 1 0 0014.5 1H10a1 1 0 100 2h4.5z" clipRule="evenodd"></path>
      </svg>
      <p className="text-gray-300 italic mb-4 flex-grow font-opensans">"{testimonial.quote}"</p>
      <p className="font-semibold text-gray-100 font-opensans">{testimonial.author}</p>
      <p className="text-sm text-amber-500 font-opensans">{testimonial.category}</p>
    </div>
  );
};