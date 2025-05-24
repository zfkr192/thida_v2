import React from 'react';
import { TravelExperienceData } from '../types';
import { Button } from './Button';

interface TravelCardProps {
  experience: TravelExperienceData;
  contactEmail: string;
}

export const TravelCard: React.FC<TravelCardProps> = ({ experience, contactEmail }) => {
  const mailtoLink = `mailto:${contactEmail}?subject=Interest in Travel: ${encodeURIComponent(experience.title)}`;
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${experience.youtubeVideoId}`}
          title={experience.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2 font-merriweather">{experience.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow font-opensans">{experience.description}</p>
        <div className="mt-auto space-y-3">
          {experience.itineraryLink ? (
             <Button href={experience.itineraryLink} target="_blank" rel="noopener noreferrer" variant="outline" size="md" className="w-full">
              Download Itinerary (PDF)
            </Button>
          ) : (
            <Button variant="outline" size="md" className="w-full" disabled>
              Itinerary Coming Soon
            </Button>
          )}
          <Button href={mailtoLink} variant="primary" size="md" className="w-full">
            Express Interest
          </Button>
        </div>
      </div>
    </div>
  );
};