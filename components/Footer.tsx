import React from 'react';
import { TestimonialData, SocialLink } from '../types';
import { SectionWrapper } from './SectionWrapper';
import { TestimonialCard } from './TestimonialCard';
import { Button } from './Button';

interface FooterProps {
  id: string;
  testimonials: TestimonialData[];
  socialLinks: SocialLink[];
  internshipEmail: string;
  newsletterAction: string;
}

export const Footer: React.FC<FooterProps> = ({ id, testimonials, socialLinks, internshipEmail, newsletterAction }) => {
  return (
    <footer id={id} className="bg-gray-900 text-gray-200 pt-16 pb-8 font-opensans">
      <SectionWrapper 
        id="footer-testimonials" 
        title="Kind Words" 
        subtitle="Testimonials from collaborators and friends" 
        className="!py-0" 
        titleClassName="font-merriweather text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-4" 
        subtitleClassName="font-opensans text-xl text-center text-amber-500 mb-12"
      >
        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 mb-16">Testimonials coming soon.</p>
        )}
      </SectionWrapper>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Internship Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-3 font-merriweather">Intern with Thida</h3>
            <p className="text-sm text-gray-300 mb-4">
              Passionate about film, travel, or wellness? Opportunities for pro bono training and internships may be available. 
              Testimonials from past interns like Rhiannon, Liam, and Noemi highlight transformative experiences.
            </p>
            <Button href={`mailto:${internshipEmail}?subject=Internship Inquiry`} variant="secondary" size="md">
              Inquire About Internships
            </Button>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-3 font-merriweather">Stay Updated</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to the newsletter for the latest on film projects, travel plans, and wellness insights. Past updates are also shared.
            </p>
            <form action={newsletterAction} method="POST" className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input 
                type="email" 
                id="newsletter-email"
                name="email" 
                placeholder="Your email address" 
                required 
                className="flex-grow px-3 py-2 rounded-md text-gray-800 bg-gray-100 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 border-gray-300 placeholder-gray-500"
                aria-label="Email address for newsletter"
              />
              <Button type="submit" variant="primary" size="md">
                Subscribe
              </Button>
            </form>
          </div>
          
          {/* Social Media Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-3 font-merriweather">Connect Online</h3>
            <p className="text-sm text-gray-300 mb-4">
              Follow "The Gypsie Princess" on social media for more adventures and inspiration.
            </p>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-amber-400 hover:text-amber-300 transition-colors group"
                >
                  {link.icon ? <span className="mr-2">{link.icon}</span> : (
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  )}
                  {link.name}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 group-hover:text-amber-300 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-8">
          <p>&copy; {new Date().getFullYear()} Thida. All rights reserved.</p>
          <p>Website by a Friendly AI Assistant & You.</p>
        </div>
      </div>
    </footer>
  );
};