import React from 'react';

export default function Availability() {
  return (
    <div className="mt-6 flex items-center justify-center rounded-md border border-green-900/30 bg-green-900/10 p-2 text-sm text-green-300">
      <div className="relative mr-2 flex h-3 w-3 items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-green-500"></div>
        <div className="absolute h-3 w-3 animate-ping rounded-full bg-green-500 opacity-75"></div>
      </div>
      Currently available for new opportunities
    </div>
  );
}
