import React from 'react';

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = 'py-16 sm:py-24',
  titleClassName = 'font-merriweather text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4',
  subtitleClassName = 'font-opensans text-xl text-center text-teal-600 mb-12'
}) => {
  return (
    <section id={id} className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {title && <h2 className={titleClassName}>{title}</h2>}
      {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
      {children}
    </section>
  );
};