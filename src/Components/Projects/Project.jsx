import React from "react";
import ProjectData from "./ProjectData.json";

const Project = () => {
  return (
    <div className="w-full place-items-center">
      <div className="w-[80%] flex justify-around gap-10">
        <div className="w-[60%] min-h-[500px] border border-white rounded-3xl">
          <div className="h-full w-full bg-orange-400 border-8 border-[#3d3737] rounded-3xl">
            <img />
          </div>
        </div>
          
        <div className="w-[40%]">
          {ProjectData.map((curr, idx) => {
            const { title, description, features, technologies} = curr;
            return (
              <li key={idx} className="list-none">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-white/50 my-3">{description}</p>
                <ul>
                  {features.map((curr) => {
                    return (
                      <div className="flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          class="mt-1 mr-2 size-5 shrink-0 fill-teal-600 text-teal-600 dark:text-teal-400 bg-teal-600/20 lg:bg-white-1 dark:lg:bg-black"
                        >
                          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                        </svg>
                        {curr}
                      </div>
                    );
                  })}
                </ul>
                <div className="w-[70%] flex flex-wrap gap-3 mt-10 place-items-start">
                  {technologies.map((curr)=>{
                    return <div
                    className="h-8 min-w-22 border px-3 rounded-xl text-nowrap bg-neutral-900 flex items-center justify-center">
                      {curr}
                    </div>
                  })}
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
