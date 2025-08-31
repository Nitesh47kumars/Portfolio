import React from "react";
import ProjectData from "./ProjectData.json";

const Project = () => {
  return (
    <div className="w-full max-md:mt-30 place-items-center">
      <div className="w-[95%] xl:w-[80%] flex justify-around gap-10 max-md:flex-col">
        <div className="md:w-[60%] lg:h-[600px] border border-white/50 rounded-3xl">
          <div className="h-full w-full bg-orange-400 border-8 border-[#292525] rounded-3xl
            flex justify-center items-end group overflow-hidden">
            <img
              alt="Snippix"
              loading="lazy"
              src="./Project/Project.jpg"
              className="h-[clamp(20rem,2vw,25rem)] w-full max-w-[85%] object-cover lg:group-hover:translsate-y-10 translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform 
              lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 shadow-[0_0_30px_#14B8A6]"
            />
          </div>
        </div>
          
        <div className="md:w-[40%]">
          {ProjectData.map((curr, idx) => {
            const { title, description, features, technologies} = curr;
            return (
              <li key={idx} className="list-none">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-white/70 my-3">{description}</p>
                <ul>
                  {features.map((curr,idx) => {
                    return (
                      <div key={idx} className="max-lg:hidden flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-1 mr-2 size-5 shrink-0 fill-teal-600 text-teal-600 dark:text-teal-400 bg-teal-600/20 lg:bg-white-1 dark:lg:bg-black"
                        >
                          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                        </svg>
                        <p
                        className="text-[16px]">
                          {curr}
                        </p>
                      </div>
                    );
                  })}
                </ul>
                <div className="w-[70%] flex flex-wrap gap-3 mt-10 place-items-start">
                  {technologies.map((curr,idx)=>{
                    return <div
                    key={idx}
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
