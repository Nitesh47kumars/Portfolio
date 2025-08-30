import React from "react";
import AboutSection from "./AboutSection";
import QuickLinks from "./QuickLinks";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="mt-30 text-white font-openSans">
      <div className="md:max-w-6xl mx-auto px-6 bg-white/5 p-7 rounded-2xl backdrop-blur-[3px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-24 mb-12">
          <AboutSection />
          <QuickLinks />
          <ContactInfo />
          <SocialLinks />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
