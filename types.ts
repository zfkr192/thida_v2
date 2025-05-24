export interface NavLink {
  href: string;
  label: string;
}

export interface TimelineEventData {
  year: string;
  title: string;
  description: string;
  icon: string; // Unicode character or emoji
}

export interface FilmData {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  directorNote?: string; // Example: "Won best cinematographer..."
}

export interface TravelExperienceData {
  id: string;
  title: string;
  description: string;
  youtubeVideoId: string; // YouTube video ID for embedding
  itineraryLink?: string; // Placeholder for PDF link
}

export interface BookData {
  id: string;
  title: string;
  author?: string;
}

export interface TestimonialData {
  id: string;
  quote: string;
  author: string;
  category: 'Travel Companion' | 'Film Teacher' | 'Person';
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: React.ReactNode; // For potential SVG icons later, but using text for now
}