import React from "react";

const ContactInfo = () => (
  <section className="space-y-4">
    <h4 className="font-semibold">Get in Touch</h4>
    <div className="space-y-3">
      <a
        href="mailto:niteshshah028@gmail.com"
        className="text-gray-400 hover:text-white transition-all duration-300 ease-out text-sm flex items-center group"
      >
        <span className="transform transition-all duration-300 ease-out group-hover:translate-x-1">
          📧
        </span>
        <span className="ml-2 relative">
          niteshshah028@gmail.com
          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
        </span>
      </a>

      <div className="text-gray-400 text-sm flex items-center group">
        <span className="transform transition-all duration-300 ease-out group-hover:translate-x-1">
          📍
        </span>
        <span className="ml-2">Yamuna-nagar, Haryana, India.</span>
      </div>
    </div>
  </section>
);

export default ContactInfo;
