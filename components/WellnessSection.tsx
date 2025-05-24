import React from 'react';
import { BookData } from '../types';

interface WellnessSectionProps {
  books: BookData[];
}

const BookListItem: React.FC<{ book: BookData }> = ({ book }) => (
  <li className="py-3 px-4 bg-white rounded-md shadow hover:shadow-md transition-shadow">
    <h4 className="font-semibold text-gray-700 font-opensans">{book.title}</h4>
    {book.author && <p className="text-sm text-gray-500 font-opensans">by {book.author}</p>}
  </li>
);

export const WellnessSection: React.FC<WellnessSectionProps> = ({ books }) => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <p className="text-lg text-gray-700 mb-8 font-opensans">
        Aya Wellness is currently on hold as Thida focuses on other creative endeavors. 
        Below are some recommended books for your self-healing journey.
      </p>
      <div className="bg-neutral-100 p-8 rounded-lg shadow-xl">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 font-merriweather">Recommended Reading for Self-Healing</h3>
        {books.length > 0 ? (
          <ul className="space-y-4 text-left">
            {books.map((book) => (
              <BookListItem key={book.id} book={book} />
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 font-opensans">Book recommendations coming soon.</p>
        )}
      </div>
    </div>
  );
};