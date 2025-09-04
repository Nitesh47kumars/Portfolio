import React from 'react';

const contactItems = [
  {
    label: 'Email',
    href: 'mailto:niteshshah028@gmail.com?subject=Let\'s%20catch%20up%20for%20a%20cool%20opportunity!',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
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
    ),
    title: 'Email',
    value: 'niteshshah028@gmail.com',
    description: 'Send me an email directly',
    gradientFrom: 'from-blue-900/20',
  },
  {
    label: 'Book a Call',
    href: '/contact',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
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
    ),
    title: 'Book a Call',
    value: 'Schedule a time slot',
    description: 'Book a call on my calendar',
    gradientFrom: 'from-purple-900/20',
  },
];

export default function QuickContact() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {contactItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="group block overflow-hidden rounded-lg shadow-xl bg-neutral-800/30 transition-all duration-300"
          target={item.href.startsWith('mailto:') ? '_blank' : '_self'}
          rel="noopener noreferrer"
          aria-label={item.label}
        >
          <div
            className={`flex gap-x-3 border-b p-4 border-neutral-700/30 bg-gradient-to-r to-transparent ${item.gradientFrom}`}
          >
            {item.icon}
            <h3 className="mb-1 text-base font-medium text-white">{item.title}</h3>
          </div>
          <div className="p-4">
            <div className="flex items-center text-sm font-medium text-neutral-200 transition-all duration-300 group-hover:text-white">
              {item.value}
            </div>
            <p className="mt-2 text-sm text-neutral-400">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
