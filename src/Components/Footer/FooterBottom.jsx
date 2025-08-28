import React from "react";

const FooterBottom = () => (
  <div className="border-t border-gray-800 pt-8 mt-8 text-center md:flex md:justify-between md:text-left text-sm">
    <p className="text-gray-400">
      © 2025 Abhishek | Portfolio. All rights reserved.
    </p>
    <div className="mt-4 md:mt-0">
      <a
        href="/privacy-policy"
        className="text-gray-400 hover:text-white transition-all duration-300 ease-out mx-3 relative inline-block group"
      >
        Privacy Policy
        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
      </a>
      <a
        href="/terms"
        className="text-gray-400 hover:text-white transition-all duration-300 ease-out mx-3 relative inline-block group"
      >
        Terms of Service
        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
      </a>
    </div>
  </div>
);

export default FooterBottom;
