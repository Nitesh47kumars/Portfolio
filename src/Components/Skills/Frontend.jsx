import React from 'react';

const lang = [
  { name: "HTML", icon: "/Frontend/HTML5_Badge.svg.png" },
  { name: "CSS", icon: "/Frontend/CSS3_logo.svg.png" },
  { name: "JavaScript", icon: "/Frontend/Unofficial_JavaScript_logo_2.svg.png" },
  { name: "React", icon: "/Frontend/React-icon.svg.png" },
  { name: "TailwindCSS", icon: "/Frontend/tailwind-icon-md.png" },
];

const getItemStyle = (index) => {
  const sizes = ["h-20 w-20", "h-22 w-22", "h-24 w-24"];
  const delays = ["delay-[200ms]", "delay-[100ms]", "delay-[0ms]"];

  if (index === 2) return { size: sizes[2], delay: delays[2] }; // Middle
  if (index === 1 || index === 3) return { size: sizes[1], delay: delays[1] }; // Adjacent
  return { size: sizes[0], delay: delays[0] }; // Outer
};

const Frontend = () => {
  return (
    <div
      style={{ background: "linear-gradient(145deg,#444,#000 60%)" }}
      className="relative md:col-span-3 lg:col-span-4 p-5 lg:h-[200px] max-sm:h-[260px] max-lg:h-[320px] rounded bg-black group transition-shadow duration-500 shadow-[inset_0_0_40px_rgba(180,180,180,0.1)]"
    >
      <h1 className="text-center text-white text-xl text-shadow-[1px_1px_10px_white]">
        Frontend Skills
      </h1>

      <ul className="flex justify-between items-center h-full lg:p-5 max-lg:py-3 max-lg:grid max-lg:grid-cols-3">
        {lang.map((curr, idx) => {
          const { size, delay } = getItemStyle(idx);

          return (
            <li key={idx} className="flex flex-col items-center">
              <div
                className={`${size} max-sm:h-15 max-sm:w-15 max-lg:h-20 max-lg:w-20 ${delay} rounded-[15px] max-md:rounded-[10px] border-2 border-[#A5AEB81F] p-2 max-md:p-1 transition-all duration-500 md:group-hover:-translate-y-2 md:group-hover:border-indigo-400 hover:border-blue-600`}
              >
                <div
                  className="grid h-full place-items-center rounded-[10px] max-md:rounded-[8px] border-2 border-[#A5AEB81F]/10 bg-[#1A1B1E]"
                  style={{
                    boxShadow: "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset",
                  }}
                >
                  <img
                    className="h-[60%] w-[68%] object-cover"
                    src={curr.icon}
                    alt={`${curr.name} icon`}
                  />
                </div>
              </div>

              <h1
                className={`text-white ${delay} lg:opacity-0 -translate-y-1 group-hover:opacity-100 max-sm:text-[12px] max-lg:translate-y-1.5 transition-all duration-500`}
              >
                {curr.name}
              </h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Frontend;
