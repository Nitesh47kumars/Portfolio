import React from "react";
import ContactForm from "./ContactForm";
import ContactSocial from "./ContactSocial";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="min-h-screen flex  text-white overflow-hidden">
      {/* Left Side: CONTACT text + Social vertically stacked */}
      <div
      className="hidden md:flex flex-col w-1/3 relative"
      style={{background:"rgba(225,225,225,0.1)"}}
      >
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="flex-1 flex justify-center items-center select-none"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <h1 className="text-9xl font-extrabold tracking-wide uppercase leading-none">
            CONTACT
          </h1>
        </motion.div>

        <ContactSocial />
      </div>

      {/* Right side - Contact Form */}
      <div
      style={{background:"rgba(225,225,225,0.1)"}}
      className="flex-1 flex items-center justify-center px-8 md:px-24 py-20 relative">
        <ContactForm />
      </div>
    </section>
  );
}
