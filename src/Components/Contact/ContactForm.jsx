import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    )
      errs.email = "Invalid email address";
    if (!formData.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // simulate submit
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-md"
    >
      <h2 className="text-4xl font-extrabold mb-8 tracking-tight">
        Let's Talk
      </h2>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-green-700 rounded text-white font-semibold text-center"
        >
          Thank you for your message!
        </motion.div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-transparent border-b-2 border-gray-600 placeholder-gray-500
            focus:border-indigo-400 focus:outline-none py-3 text-lg text-white
            transition-colors duration-300 ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 mt-1 text-sm">{errors.name}</p>
          )}
        </div>

        <div className="mb-6">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-transparent border-b-2 border-gray-600 placeholder-gray-500
            focus:border-indigo-400 focus:outline-none py-3 text-lg text-white
            transition-colors duration-300 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="mb-8">
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`w-full bg-transparent border-b-2 border-gray-600 placeholder-gray-500
            focus:border-indigo-400 focus:outline-none py-3 px-0 text-lg text-white resize-none
            transition-colors duration-300 ${
              errors.message ? "border-red-500" : ""
            }`}
          />
          {errors.message && (
            <p className="text-red-500 mt-1 text-sm">{errors.message}</p>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 py-4 rounded-lg font-semibold tracking-wide text-white shadow-lg transition-colors duration-300"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
}
