import React from 'react';
import { TimelineEventData } from '../types';
import { SectionWrapper } from './SectionWrapper';

interface TimelineEventProps {
  event: TimelineEventData;
  isLeft: boolean;
}

const TimelineEventCard: React.FC<TimelineEventProps> = ({ event, isLeft }) => {
  return (
    <div className={`mb-8 flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse' : ''}`}>
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-teal-600 shadow-xl w-12 h-12 rounded-full justify-center">
        <span className="text-white text-xl" title={event.title}>{event.icon}</span>
      </div>
      <div className={`order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4 ${isLeft ? 'text-right' : 'text-left'}`}>
        <p className="mb-1 text-sm font-semibold text-amber-600 font-opensans">{event.year}</p>
        <h3 className="mb-2 font-bold text-gray-800 text-lg font-merriweather">{event.title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-600 font-opensans">{event.description}</p>
      </div>
    </div>
  );
};

interface TimelineSectionProps {
  id: string;
  events: TimelineEventData[];
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ id, events }) => {
  return (
    <SectionWrapper id={id} title="My Journey" subtitle="A Timeline of Milestones & Manifestations" className="bg-neutral-100 py-16 sm:py-24">
      <div className="relative wrap overflow-hidden">
        <div className="border-2-2 absolute border-opacity-20 border-gray-300 h-full border left-1/2 transform -translate-x-1/2"></div>
        {events.map((event, index) => (
          <TimelineEventCard key={event.year + event.title} event={event} isLeft={index % 2 !== 0} />
        ))}
      </div>
    </SectionWrapper>
  );
};