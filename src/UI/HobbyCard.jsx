import React from 'react';

const HobbyCard = () => {
  const hobbiesData = [
    {
      playingGame: {
        description:
          "Passionate about video games, enjoying the challenge, creativity, and strategic thinking they inspire.",
        items: [
          {
            name: "GTA 5",
            image: "/Hobbies_Icon/GTA_5.jpg",
          },
          {
            name: "God of War",
            image: "/Hobbies_Icon/Kratos.jpg",
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
          "Enjoys video editing as a creative outlet to tell stories and bring ideas to life through visuals.",
        items: [
          {
            name: "Capcut",
            image: "/Hobbies_Icon/Capcut.jpg",
          },
          {
            name: "Premium pro",
            image: "/Hobbies_Icon/Editing.jpg",
          },
        ],
      },
    },
    {
      listeningToMusic: {
        description:
          "Enjoys listening to music as a way to relax and stay inspired.",
        items: [
          {
            name: "Capcut",
            image: "/Hobbies_Icon/Spotify.4ae62b85-3d44-495f-a354-de1b0c447387",
          },
          {
            name: "Premium pro",
            image: "/Hobbies_Icon/Youtube.jpg",
          },
        ],
      },
    },
  ];

  return (
    <div className="flex gap-6 flex-wrap justify-center overflow-hidden">
      {hobbiesData.map((hobbyObj, idx) => {
        const hobbyKey = Object.keys(hobbyObj)[0];
        const hobby = hobbyObj[hobbyKey];

        return (
          <div
            key={idx}
            className="flex relative w-[300px] h-[90px] rounded-md overflow-hidden bg-gradient-to-br from-yellow-500 via-pink-500 to-pink-700 transition-all duration-500 hover:shadow-lg group"
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
                  className="h-full w-full object-cover transform rotate-[6deg] scale-120 transition-all duration-500 group-hover:-translate-y-[116%] group-hover:rotate-0"
                />
              </div>
            ))}

            {/* Hover Content */}
            <div className="absolute top-[120%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full h-full opacity-0 transition-all duration-500 group-hover:top-1/2 group-hover:opacity-100 bg-black/50 backdrop-blur-md flex flex-col justify-center items-center px-2">
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
