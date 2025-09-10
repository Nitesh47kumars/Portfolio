import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const links = [
  { label: "Home", section: "home" },
  { label: "About", section: "about" },
  { label: "Projects", section: "projects" },
  { label: "Contact", section: "contact" },
];

const QuickLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (section) => {
    if (location.pathname === "/") {
      // Already on home, just scroll
      scroller.scrollTo(section, {
        smooth: true,
        duration: 600,
        offset: -100,
      });
    } else {
      // Navigate to home and scroll
      navigate("/", { state: { scrollTo: section } });
    }
  };

  return (
    <section className="space-y-4">
      <h4 className="font-semibold lg:text-center">Quick Links</h4>
      <ul className="space-y-3 lg:text-center">
        {links.map((link) => (
          <li key={link.section}>
            <button
              onClick={() => handleClick(link.section)}
              className="text-gray-400 hover:text-white transition-all duration-300 ease-out text-sm relative inline-block cursor-pointer group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default QuickLinks;
