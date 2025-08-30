import React from "react";

const FooterBottom = () => (
  <div className="border-t border-white/30 pt-8 mt-8 text-center md:flex md:justify-between md:text-left text-sm">
    <p className="text-gray-400">
      © 2025 Nitesh Kumar | Portfolio. All rights reserved.
    </p>
    <div className="mt-4 md:mt-0">
      <a
        href="#"
        className="text-gray-400 mx-3 inline-block opacity-50"
      >
        Privacy Policy
      </a>
      <a
        href="#"
        className="text-gray-400 mx-3 inline-block opacity-50"
      >
        Terms of Service
      </a>
    </div>
  </div>
);

export default FooterBottom;
