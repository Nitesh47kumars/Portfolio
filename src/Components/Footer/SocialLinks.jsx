import React from "react";

const links = [
  {
    name: "GitHub",
    href: "https://github.com/The-Abhishek-Singh",
    icon: "🐱",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abhishekdata100/",
    icon: "💼",
  },
  {
    name: "Twitter",
    href: "https://x.com/Abhishek_Data_",
    icon: "🐦",
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
            <span className="text-gray-400 transition-all duration-300 ease-out group-hover:text-white group-hover:scale-105">
              {icon}
            </span>
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
