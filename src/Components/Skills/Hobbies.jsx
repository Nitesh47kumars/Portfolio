import React from "react";
import HobbyCard from "../../UI/HobbyCard";

const Hobbies = () => {
  return (
    <div
      style={{ background: "linear-gradient(145deg, #333, #000 40%)" }}
      className="w-full md:col-span-3 lg:col-span-2 md:row-span-3 lg:row-span-2 max-md:row-span-1
                 rounded bg-black text-white p-5 shadow-[inset_0_0_50px_rgba(225,225,225,0.1)]"
    >
      <h1 className="text-center text-xl mb-3 text-shadow-[1px_1px_10px_white]">
        Hobbies...
      </h1>

      <div className="flex flex-col items-center justify-center">
        <HobbyCard />
      </div>
    </div>
  );
};

export default Hobbies;
