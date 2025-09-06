import React from 'react';

const EmailContact = () => {
  return (
    <a
      href="mailto:niteshshah028@gmail.com?subject=Let's%20catch%20up%20for%20a%20cool%20opportunity!"
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-lg shadow-xl bg-neutral-800/30 transition-all duration-300"
      aria-label="Email"
    >
      <div className="flex gap-x-3 border-b p-4 border-neutral-700/30 bg-gradient-to-r to-transparent from-blue-900/20">
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
          className="h-6 w-6 text-blue-400"
          aria-hidden="true"
        >
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
        <h3 className="mb-1 text-base font-medium text-white">Email</h3>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm font-medium text-neutral-200 transition-all duration-300 group-hover:text-white">
          niteshshah028@gmail.com
        </div>
        <p className="mt-2 text-sm text-neutral-400">Send me an email directly</p>
      </div>
    </a>
  );
};

export default EmailContact;
