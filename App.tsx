import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FilmsSection } from './components/FilmsSection';
import { TravelSection } from './components/TravelSection';
import { WellnessSection } from './components/WellnessSection';
import { Footer } from './components/Footer';
import { SectionWrapper } from './components/SectionWrapper';
import { TimelineSection } from './components/TimelineSection';

import { 
  TIMELINE_EVENTS, 
  FILMS_DATA, 
  TRAVEL_EXPERIENCES_DATA, 
  AYA_WELLNESS_BOOKS, 
  TESTIMONIALS_DATA, 
  SOCIAL_LINKS_DATA,
  NAVIGATION_LINKS,
  PLASM_PRODUCTIONS_EMAIL,
  TRAVEL_INTEREST_EMAIL,
  INTERNSHIP_EMAIL,
  NEWSLETTER_SIGNUP_ACTION
} from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-opensans">
      <Header navLinks={NAVIGATION_LINKS} />
      <main className="flex-grow">
        <HeroSection id="about" />
        <TimelineSection id="timeline" events={TIMELINE_EVENTS} />
        
        <SectionWrapper id="films" title="Plasm Productions" subtitle="Films by Thida">
          <FilmsSection films={FILMS_DATA} contactEmail={PLASM_PRODUCTIONS_EMAIL}/>
        </SectionWrapper>

        <SectionWrapper id="travel" title="Travel With Thida" subtitle="Unique Anthropological & Film Experiences">
          <TravelSection experiences={TRAVEL_EXPERIENCES_DATA} contactEmail={TRAVEL_INTEREST_EMAIL}/>
        </SectionWrapper>

        <SectionWrapper id="wellness" title="Aya Wellness" subtitle="Self Empowerment, Healing & Health (Temporarily On Hold)">
          <WellnessSection books={AYA_WELLNESS_BOOKS} />
        </SectionWrapper>
        
        <Footer 
          id="contact" 
          testimonials={TESTIMONIALS_DATA} 
          socialLinks={SOCIAL_LINKS_DATA} 
          internshipEmail={INTERNSHIP_EMAIL}
          newsletterAction={NEWSLETTER_SIGNUP_ACTION}
        />
      </main>
    </div>
  );
};

export default App;