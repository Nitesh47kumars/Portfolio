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
  { icon: FaFacebookF, url: "https://facebook.com", label: "Facebook" },
  { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
  { icon: FaLinkedinIn, url: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
  { icon: FaGithub, url: "https://github.com", label: "GitHub" },
];

export default function ContactSocial() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="flex justify-center items-center space-x-8 py-6 bg-white/20"
    >
      {socials.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-400 text-2xl transition-colors duration-300"
          aria-label={`Link to ${label}`}
        >
          <Icon />
        </a>
      ))}
    </motion.div>
  );
}
