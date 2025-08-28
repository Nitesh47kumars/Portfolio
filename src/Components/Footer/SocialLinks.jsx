import React from "react";

const links = [
  {
    name: "GitHub",
    href: "https://github.com/Nitesh47kumars",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nitesh-kumar-b18348346/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png",
  },
  {
    name: "Twitter",
    href: "https://x.com/Niteshshah028",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZpeZi0IQdFiMpt_ljY6l5hsUrqLB2Qie_Ug&s",
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
            <div className="w-8 h-8 object-cover rounded-full overflow-hidden">
              <img className="w-full h-full" src={icon} alt={name} />
            </div>
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
