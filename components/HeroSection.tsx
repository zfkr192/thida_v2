import React from 'react';
import { Button } from './Button';

interface HeroSectionProps {
  id: string;
}

interface ServiceLinkProps {
  href: string;
  title: string;
  description: string;
  icon: string;
  iconColorClass: string;
}

const ServiceLinkCard: React.FC<ServiceLinkProps> = ({ href, title, description, icon, iconColorClass }) => (
  <a href={href} className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 group">
    <div className="flex items-center mb-3">
      <span className={`text-3xl mr-3 ${iconColorClass}`}>{icon}</span>
      <h3 className="text-xl font-semibold text-teal-700 font-merriweather group-hover:text-teal-600">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm font-opensans">{description}</p>
  </a>
);

export const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  return (
    <section id={id} className="relative min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-8" style={{backgroundImage: "url('https://picsum.photos/seed/hero2/1920/1080')"}}>
      <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
      
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        <img 
          src="https://picsum.photos/seed/thida-profile/150/150" 
          alt="Thida" 
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-amber-400 shadow-xl mb-6"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 font-merriweather">
          Thida <span className="text-amber-400">K.</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl font-opensans">
          Serial manifestor, guerrilla-filmmaker, avid traveller and entrepreneur into self empowerment, healing and health.
        </p>
        <p className="text-md sm:text-lg text-gray-300 mb-10 max-w-2xl italic font-opensans">
          "Thida believes in freedom of expression, doing what one loves and loving what one does, and being the most authentic version of oneself in order to be able to inspire and support others around her."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl">
          <ServiceLinkCard 
            href="#films" 
            title="Plasm Productions" 
            icon="🎬" 
            iconColorClass="text-teal-500"
            description="Visionary filmmaking and storytelling." 
          />
          <ServiceLinkCard 
            href="#travel" 
            title="Travel With Thida" 
            icon="✈️" 
            iconColorClass="text-amber-500"
            description="Unique anthropological and film expeditions." 
          />
          <ServiceLinkCard 
            href="#wellness" 
            title="Aya Wellness" 
            icon="🌿" 
            iconColorClass="text-green-500"
            description="Insights on self-empowerment and healing." 
          />
        </div>
        
        <Button href="#timeline" variant="secondary" size="lg">
          Discover My Journey
        </Button>
      </div>
    </section>
  );
};