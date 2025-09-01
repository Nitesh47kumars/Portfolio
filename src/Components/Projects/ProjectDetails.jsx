import React from "react";

const ProjectDetails = ({ title, description, features, technologies }) => {
  return (
    <div className="list-none">
      <h1 className="text-3xl max-sm:text-2xl font-bold tracking-wider leading-4">
        {title}
      </h1>
      <p className="text-white/70 max-lg:text-[clamp(10px,2vw,13px)] my-4">
        {description}
      </p>

      {/* Features */}
      <div className="hidden lg:flex flex-col gap-3 my-6">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="mr-2 size-5 fill-teal-600 bg-teal-600/20 dark:text-teal-400 dark:lg:bg-black"
            >
              <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
            </svg>
            <p className="text-[14px]">{feature}</p>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="w-full sm:w-[80%] md:w-[70%] flex flex-wrap gap-3 items-start">
        {technologies.map((tech, i) => (
          <div
            key={i}
            className="h-7 px-2 rounded-xl bg-neutral-900 border text-[10px] sm:text-xs flex items-center justify-center"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
