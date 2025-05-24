import React from 'react';
import { FilmData } from '../types';
import { FilmCard } from './FilmCard';

interface FilmsSectionProps {
  films: FilmData[];
  contactEmail: string;
}

export const FilmsSection: React.FC<FilmsSectionProps> = ({ films, contactEmail }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {films.map((film) => (
        <FilmCard key={film.id} film={film} contactEmail={contactEmail} />
      ))}
    </div>
  );
};