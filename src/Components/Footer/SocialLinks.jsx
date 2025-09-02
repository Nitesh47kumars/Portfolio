import React from "react";
import ConnectButtons from "../../UI/ConnectButtons";

const links = [
  {
    name: "GitHub",
    href: "https://github.com/Nitesh47kumars",
    icon: (
      <svg
        fill="#0092E4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nitesh-kumar-b18348346/",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png"
        alt="LinkedIn"
      />
    ),
  },
  {
    name: "Twitter",
    href: "https://x.com/Niteshshah028",
    icon: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZpeZi0IQdFiMpt_ljY6l5hsUrqLB2Qie_Ug&s"
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
