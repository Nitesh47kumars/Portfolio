import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const socials = [
  { icon: <FaFacebookF />, url: "https://facebook.com" },
  { icon: <FaTwitter />, url: "https://twitter.com" },
  { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
  { icon: <FaInstagram />, url: "https://instagram.com" },
  { icon: <FaGithub />, url: "https://github.com" },
];

export default function ContactSocial() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="flex justify-center items-center space-x-8 bg-gray-800 py-6"
      style={{ writingMode: "horizontal-tb", textOrientation: "mixed" }}
    >
      {socials.map(({ icon, url }, idx) => (
        <a
          key={idx}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-400 text-2xl transition-colors duration-300"
          aria-label="social link"
        >
          {icon}
        </a>
      ))}
    </motion.div>
  );
}
