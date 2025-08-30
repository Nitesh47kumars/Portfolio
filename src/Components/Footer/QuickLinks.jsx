import React from "react";
import { Link } from "react-scroll";

const links = ["Home", "About", "Projects", "Contact"];

const QuickLinks = () => (
  <section className="space-y-4">
    <h4 className="font-semibold lg:text-center">Quick Links</h4>
    <ul className="space-y-3 lg:text-center">
      {links.map((link) => (
        <li key={link}>
          <Link
            smooth={true}
            duration={600}
            to={link.toLowerCase()}
            className="text-gray-400 hover:text-white transition-all duration-300 ease-out text-sm relative inline-block cursor-pointer group"
          >
            {link}
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default QuickLinks;
