import React,{useState} from 'react';

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

  const [activeIndex, setActiveIndex] = useState(null);

  // Mobile detection (basic, can be improved)
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const toggleCard = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };


  return (
    <div className="w-[95%] h-[350px] flex flex-col gap-1 overflow-hidden">
      {cardData.map((curr, idx) => {
        const { title, points } = curr;
        const isActive = activeIndex === idx;
        return (
          <div
            key={idx}
            onClick={() => isMobile && toggleCard(idx)}
            className={`card group flex-1 overflow-hidden cursor-pointer rounded-sm transition-all duration-600 bg-[rgba(225,225,225,0.1)]
              flex flex-col justify-center items-center ${isMobile ? (isActive ? 'flex-[4]' : '') : 'hover:flex-[4] cursor-pointer'}`}
          >
            <h1 className="text-white text-[clamp(1rem,1vw,1.3rem)] drop-shadow-[1px_1px_10px_black] text-nowrap">
              {title}
            </h1>
            <ul className={`h-0 relative top-3 transition-all duration-500 overflow-hidden
              ${isMobile ? (isActive ? 'h-[90px]' : 'h-0') : 'group-hover:h-[100px]'}`}>
              {points.map((point, i) => (
                <li
                  key={i}
                  className="py-1 text-center text-[#00ffeb] text-[12px] relative z-10"
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
