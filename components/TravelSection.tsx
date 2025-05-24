import React from 'react';
import { TravelExperienceData } from '../types';
import { TravelCard } from './TravelCard';

interface TravelSectionProps {
  experiences: TravelExperienceData[];
  contactEmail: string;
}

export const TravelSection: React.FC<TravelSectionProps> = ({ experiences, contactEmail }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {experiences.map((exp) => (
        <TravelCard key={exp.id} experience={exp} contactEmail={contactEmail} />
      ))}
    </div>
  );
};