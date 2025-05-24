import React from 'react';
import { FilmData } from '../types';
import { Button } from './Button';

interface FilmCardProps {
  film: FilmData;
  contactEmail: string;
}

export const FilmCard: React.FC<FilmCardProps> = ({ film, contactEmail }) => {
  const mailtoLink = `mailto:${contactEmail}?subject=Film Purchase Inquiry: ${encodeURIComponent(film.title)}`;
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
      <img src={film.thumbnailUrl} alt={film.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2 font-merriweather">{film.title}</h3>
        <p className="text-gray-600 text-sm mb-3 flex-grow font-opensans">{film.description}</p>
        {film.directorNote && (
          <p className="text-xs text-amber-600 italic mb-4 font-opensans">{film.directorNote}</p>
        )}
        <div className="mt-auto">
          <Button href={mailtoLink} variant="primary" size="md" className="w-full">
            Watch / Inquire
          </Button>
          <p className="text-xs text-center text-gray-500 mt-2 font-opensans">
            Contact for viewing options or to discuss licensing. We support Stripe for payments.
          </p>
        </div>
      </div>
    </div>
  );
};