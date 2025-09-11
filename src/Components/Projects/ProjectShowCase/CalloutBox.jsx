import React from 'react';

const CalloutBox = ({ project }) => {
  return (
    <div className="flex gap-3 my-6 rounded-xl border border-blue-500/20 bg-blue-50/10 p-4 ps-2 text-sm text-blue-900 dark:text-blue-100 dark:bg-blue-900/10 shadow-lg backdrop-blur-md transition-all">
      {/* Vertical Accent Bar */}
      <div
        role="none"
        className="w-1 rounded-sm bg-blue-500/60"
      ></div>

      {/* Icon */}
      <div className="flex items-start pt-0.5">
        <div className="p-1 rounded-full bg-blue-100 dark:bg-blue-800/30 text-blue-600 dark:text-blue-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-1 min-w-0 flex-1">
        <p className="font-semibold text-sm leading-snug">
          🔗 Want to explore it live?
        </p>
        <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
          👉{' '}
          <a
            href={project.Link}
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium underline underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Visit the live app
          </a>
          <span className='px-2'>
            or
          </span>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium underline underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            view the source code
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default CalloutBox;
