// Components/Projects/WhatILearned.jsx
import React from 'react';

const WhatILearned = ({ learnings }) => {
  if (!learnings || learnings.length === 0) return null;

  return (
    <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-5 shadow-sm">
      <h3 className="text-xl font-semibold text-green-400 mb-3">📚 What I Learned</h3>
      <ul className="space-y-2 list-disc list-inside text-sm text-neutral-200">
        {learnings.map((item, index) => (
          <li key={index} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhatILearned;
