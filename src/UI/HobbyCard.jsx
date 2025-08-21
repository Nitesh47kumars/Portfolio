import React from 'react';

const HobbyCard = () => {
  const hobbiesData = [
    {
      playingGame: [
        {
          name: "GTA 5",
          image: "/Hobbies_Icon/GTA_5.jpg",
        },
        {
          name: "God of War",
          image: "/Hobbies_Icon/God_of_War.jpg",
        },
        {
          name: "Pubg",
          image: "/Hobbies_Icon/Pubg.jpg",
        },
      ]
    }
  ];

  return (
    <div className="flex gap-6 flex-wrap">
      {hobbiesData.map((curr, idx) => {
        const { playingGame } = curr;
        return (
          <div
            key={idx}
            className="flex relative w-[300px] h-[108px] rounded-md overflow-hidden bg-gradient-to-br from-yellow-500 via-pink-500 to-pink-700 transition-all duration-500 hover:shadow-lg group"
          >
            {/* Only use one image per card (change this logic if you want to rotate them) */}
            {playingGame.map((img,i)=>{
              return <div className="w-full h-full flex justify-center">
              <img
                src={img.image}
                alt={img.name}
                style={{width:'95px',zIndex: 5-i}}
                className="h-full object-cover transform rotate-[10deg] scale-120 transition-all duration-500 group-hover:-translate-y-[110%] group-hover:rotate-0"
              />
            </div>
            })}

            {/* Card content that appears on hover */}
            <div className="absolute top-[120%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full px-3 py-2 opacity-0 transition-all duration-500 group-hover:top-1/2 group-hover:opacity-100">
              <h1 className="text-black text-center font-bold text-lg m-0">Playing Game</h1>
              <p className="text-sm text-gray-800 mt-1 text-center">
                I enjoy playing video games as a way to relax and challenge my strategic thinking. It helps improve my problem-solving skills, teamwork, and quick decision-making under pressure.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HobbyCard;
