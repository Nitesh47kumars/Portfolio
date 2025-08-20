import React from 'react';

const Card = () => {
  const cardData = [
    {
      title: 'Creativity',
      points: ['Visual storytelling', 'Thinking outside the box', 'Generating innovative ideas'],
    },
    {
      title: 'Adaptability',
      points: ['Quick learner', 'Open to feedback', 'Comfortable with change'],
    },
    {
      title: 'Time Management',
      points: ['Prioritizing tasks', 'Meeting deadlines', 'Staying organized under pressure'],
    },
    {
      title: 'Teamwork & Collaboration',
      points: [
        'Working effectively in teams',
        'Cross-functional collaboration',
        'Respect for diverse perspectives',
      ],
    },
  ];

  return (
    <div className="w-[350px] h-[350px] flex flex-col gap-1 overflow-hidden">
      {cardData.map((curr, idx) => {
        const { title, points } = curr;
        return (
          <div
            key={idx}
            className="card group flex-1 overflow-hidden cursor-pointer rounded-sm transition-all duration-600 bg-[rgba(225,225,225,0.1)] flex flex-col justify-center items-center hover:flex-[4]"
          >
            <h1 className="text-white text-[1.3rem] drop-shadow-[1px_1px_10px_black]">
              {title}
            </h1>
            <ul className="h-0 relative top-3 transition-all duration-500 overflow-hidden group-hover:h-[100px]">
              {points.map((point, i) => (
                <li
                  key={i}
                  className="py-1 text-center text-[#00ffeb] text-sm relative z-10"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
