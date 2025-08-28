import React from "react";

const links = ["Home", "About", "Projects", "Contact"];

const QuickLinks = () => (
  <section className="space-y-4">
    <h4 className="font-semibold">Quick Links</h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link}>
          <a
            href={`/${link.toLowerCase()}`}
            className="text-gray-400 hover:text-white transition-all duration-300 ease-out text-sm relative inline-block group"
          >
            {link}
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default QuickLinks;
