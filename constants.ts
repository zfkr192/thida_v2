import { TimelineEventData, FilmData, TravelExperienceData, BookData, TestimonialData, SocialLink, NavLink } from './types';

export const NAVIGATION_LINKS: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#films', label: 'Films' },
  { href: '#travel', label: 'Travel' },
  { href: '#wellness', label: 'Wellness' },
  { href: '#contact', label: 'Connect' },
];

export const TIMELINE_EVENTS: TimelineEventData[] = [
  { year: "1982", title: "Born in Bangkok", description: "Child birth with golden temple in background.", icon: "🇹🇭" },
  { year: "Age 8", title: "Learned Touch Typing", description: "Father taught me how to touch type.", icon: "⌨️" },
  { year: "Age 15", title: "First Job", description: "Assisting with model-making out of fibre glass in Chessington.", icon: "🏭" },
  { year: "GCSEs", title: "Academic Achievements", description: "2 A*s (Art, Eng Lit), 2 As (Bio, Eng Lang) - Holy Cross Convent.", icon: "🎓" },
  { year: "A-Levels", title: "Further Studies", description: "5 A-levels in Philosophy, Psychology, English, Sociology, Business - ESHER.", icon: "📚" },
  { year: "University", title: "Media & Cultural Studies", description: "Part finished degree at Kingston Uni.", icon: "🏛️" },
  { year: "2003 (21)", title: "Moved to LA", description: "Worked at American Apparel in Los Angeles.", icon: "✈️🇺🇸" },
  { year: "23-28 yrs", title: "Founded Boxbagz", description: "Designing and selling one-of-a-kind leather handbags in Italy-UK.", icon: "👜" },
  { year: "2008-2011", title: "Founded Create Me Workshop", description: "Motivational workshops for women and artists.", icon: "💡" },
  { year: "Discovery", title: "Health & Wellness", description: "Realised stress caused sickness; learned to manage epilepsy with meditation, food, lifestyle.", icon: "🧘‍♀️" },
  { year: "2012", title: "Outer Body Experience", description: "Learned we choose our parents, among other insights.", icon: "✨" },
  { year: "2013", title: "Founded Aya Wellness", description: "Health and wellness brand (currently on hold).", icon: "🌿" },
  { year: "2014", title: "Started Global Travels", description: "Began travelling the world with a Panasonic camera, starting in Peru.", icon: "🌍📸" },
  { year: "2015", title: "First Feature Documentary", description: "Accidentally stumbled into making 'The Empire of Good Deeds' (in post-production) in Myanmar.", icon: "🎬🇲🇲" },
  { year: "Project", title: "Ladakh Cafe", description: "Created Ladakh’s first vegan cafe, a social enterprise.", icon: "☕️🇮🇳" },
  { year: "Company", title: "Founded Plasm Productions Ltd", description: "Film production company.", icon: "🎥" },
  { year: "Award", title: "Film Recognition", description: "Won best cinematographer, best foreign film, best first time director for 'Bright Like The Sun'.", icon: "🏆" },
  { year: "Current", title: "Future Plans", description: "Planning to build her first ever bio land in Thailand.", icon: "🏡🇹🇭" },
];

export const FILMS_DATA: FilmData[] = [
  { 
    id: 'film1', 
    title: 'Bright Like The Sun', 
    description: 'Part of The InfinEights series. Explores themes of interconnectedness and enlightenment.',
    thumbnailUrl: 'https://picsum.photos/seed/film1/600/400',
    directorNote: 'Won Best Cinematographer, Best Foreign Film, and Best First Time Director.'
  },
  { 
    id: 'film2', 
    title: 'The Empire of Good Deeds', 
    description: 'A long-form observational feature documentary set in Myanmar. Currently in post-production.',
    thumbnailUrl: 'https://picsum.photos/seed/film2/600/400'
  },
  { 
    id: 'film3', 
    title: 'Future Project Alpha', 
    description: 'An upcoming conceptual piece exploring digital consciousness.',
    thumbnailUrl: 'https://picsum.photos/seed/film3/600/400'
  },
];

export const TRAVEL_EXPERIENCES_DATA: TravelExperienceData[] = [
  { 
    id: 'travel1', 
    title: 'Anthropological Journey in the Himalayas', 
    description: 'Explore ancient cultures and breathtaking landscapes. A unique film and photography focused expedition.',
    youtubeVideoId: 'dQw4w9WgXcQ', // Placeholder video ID
  },
  { 
    id: 'travel2', 
    title: 'Silk Road Storytelling Adventure', 
    description: 'Trace the historic Silk Road, capturing stories of its people and heritage through Eastern Europe and Asia.',
    youtubeVideoId: 'oHg5SJYRHA0', // Placeholder video ID
  },
  { 
    id: 'travel3', 
    title: 'Southeast Asian Archipelago Discovery', 
    description: 'Island hopping, cultural immersion, and visual storytelling in the vibrant heart of Southeast Asia.',
    youtubeVideoId: 'HPj4S__Yv2Q', // Placeholder video ID
  },
];

export const AYA_WELLNESS_BOOKS: BookData[] = [
  { id: 'book1', title: 'The Power of Now', author: 'Eckhart Tolle' },
  { id: 'book2', title: 'You Can Heal Your Life', author: 'Louise Hay' },
  { id: 'book3', title: 'Medical Medium', author: 'Anthony William' },
  { id: 'book4', title: 'Becoming Supernatural', author: 'Dr. Joe Dispenza' },
];

export const TESTIMONIALS_DATA: TestimonialData[] = [
  { id: 't1', quote: "Travelling with Thida is an adventure for the soul. Her insights and energy are infectious!", author: "Alex P.", category: 'Travel Companion' },
  { id: 't2', quote: "Thida's approach to filmmaking is intuitive and inspiring. I learned so much about storytelling.", author: "Jamie L.", category: 'Film Teacher' },
  { id: 't3', quote: "A truly authentic and compassionate individual. Thida genuinely cares about empowering others.", author: "Casey R.", category: 'Person' },
  { id: 't4', quote: "Her eye for detail and passion for capturing raw moments made our film project unforgettable.", author: "Rhiannon S.", category: 'Film Teacher' },
  { id: 't5', quote: "Every journey with Thida is a masterclass in living fully and appreciating the world around us.", author: "Noemi K.", category: 'Travel Companion' },
];

export const SOCIAL_LINKS_DATA: SocialLink[] = [
  { name: 'Instagram (The Gypsie Princess)', url: 'https://instagram.com/thegypsieprincess' },
  { name: 'YouTube (The Gypsie Princess)', url: 'https://youtube.com/thegypsieprincess' },
  // Add more if needed
];

export const PLASM_PRODUCTIONS_EMAIL = "thida.plasm@example.com"; // Replace with actual email
export const TRAVEL_INTEREST_EMAIL = "thida.travel@example.com"; // Replace with actual email
export const INTERNSHIP_EMAIL = "thida.intern@example.com"; // Replace with actual email
export const NEWSLETTER_SIGNUP_ACTION = "https://example.com/signup-newsletter"; // Placeholder action