import React from 'react';

const HobbyCard = () => {
  const hobbiesData = [
    {
      playingGame: {
        description:
          "I enjoy playing video games as a way to relax and challenge my strategic thinking. It helps improve my problem-solving skills, teamwork, and quick decision-making under pressure.",
        items: [
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
        ],
      },
    },
    {
      videoEditing: {
        description:
          "Video editing allows me to express creativity and tell compelling stories through visuals. I enjoy learning new transitions and techniques to improve my skills.",
        items: [
          {
            name: "Capcut",
            image: "/Hobbies_Icon/capcut.png",
          },
          {
            name: "Premium pro",
            image: "/Hobbies_Icon/Adobe_Premiere_Pro_CC_icon.svg.png",
          },
        ],
      },
    },
  ];

  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {hobbiesData.map((hobbyObj, idx) => {
        const hobbyKey = Object.keys(hobbyObj)[0];
        const hobby = hobbyObj[hobbyKey];

        return (
          <div
            key={idx}
            className="flex relative w-[300px] h-[108px] rounded-md overflow-hidden bg-gradient-to-br from-yellow-500 via-pink-500 to-pink-700 transition-all duration-500 hover:shadow-lg group"
          >
            {/* Images */}
            {hobby.items.map((img, i) => (
              <div
                key={i}
                className="w-full h-full flex justify-center items-center"
              >
                <img
                  src={img.image}
                  alt={img.name}
                  style={{zIndex: 5 - i }}
                  className="h-full w-full object-cover transform rotate-[6deg] scale-120 transition-all duration-500 group-hover:-translate-y-[110%] group-hover:rotate-0"
                />
              </div>
            ))}

            {/* Hover Content */}
            <div className="absolute top-[120%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full px-3 py-2 opacity-0 transition-all duration-500 group-hover:top-1/2 group-hover:opacity-100 bg-black/60 backdrop-blur-md">
              <h1 className="text-white text-center font-bold text-lg m-0 capitalize">
                {hobbyKey.replace(/([A-Z])/g, " $1")}
              </h1>
              <p className="text-[14px] leading-4 text-white/80 text-center">
                {hobby.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HobbyCard;
