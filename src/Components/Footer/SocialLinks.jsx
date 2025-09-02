import React from "react";
import ConnectButtons from "../../UI/ConnectButtons";

const links = [
  {
    name: "GitHub",
    href: "https://github.com/Nitesh47kumars",
    icon: (
      <img
        src="./ToolsIcon/github.svg"
        alt="LinkedIn"
      />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nitesh-kumar-b18348346/",
    icon: (
      <img
        src="./Connect/LinkedIn.png"
        alt="LinkedIn"
      />
    ),
  },
  {
    name: "Twitter",
    href: "https://x.com/Niteshshah028",
    icon: (
      <img
        src="./Connect/Twitter.svg"
        alt="Twitter"
      />
    ),
  },
];

const SocialLinks = () => (
  <section className="space-y-4">
    <h4 className="font-semibold">Connect</h4>
    <div className="flex space-x-6">
      {links.map(({ name, href, icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="relative">
            <ConnectButtons icon={icon} alt={name} />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:text-white whitespace-nowrap">
              {name}
            </span>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default SocialLinks;
