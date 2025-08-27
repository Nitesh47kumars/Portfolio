import React from "react";
import ContactForm from "./ContactForm";
import ContactSocial from "./ContactSocial";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="min-h-screen flex text-white overflow-hidden -translate-y-48 backdrop-blur-sm">
      {/* Left Side: CONTACT text + Socials */}
      <div className="hidden md:flex flex-col w-1/3 relative bg-white/10 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 0.4, x: 0 }}
          transition={{ duration: 1.5 }}
          className="flex-1 flex justify-center items-center select-none [writing-mode:vertical-rl] [text-orientation:mixed]"
        >
          <h1 className="text-9xl font-extrabold tracking-wide uppercase leading-none">
            CONTACT
          </h1>
        </motion.div>

        <ContactSocial />
      </div>

      {/* Right Side: Contact Form */}
      <div className="flex-1 flex items-center justify-center px-8 md:px-24 py-20 bg-white/10 backdrop-blur-2xl relative">
        <ContactForm />
      </div>
    </section>
  );
}
