import React from 'react';
import { Link } from 'react-router-dom';

const BookCallContact = () => {
  return (
    <Link
      to="/bookcall"
      className="group block overflow-hidden rounded-lg shadow-xl bg-neutral-800/30 transition-all duration-300"
      aria-label="Book a Call"
    >
      <div className="flex gap-x-3 border-b p-4 border-neutral-700/30 bg-gradient-to-r to-transparent from-purple-900/20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-purple-400"
          aria-hidden="true"
        >
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M3 10h18" />
        </svg>
        <h3 className="mb-1 text-base font-medium text-white">Book a Call</h3>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm font-medium text-neutral-200 transition-all duration-300 group-hover:text-white">
          Schedule a time slot
        </div>
        <p className="mt-2 text-sm text-neutral-400">Book a call on my calendar</p>
      </div>
    </Link>
  );
};

export default BookCallContact;
