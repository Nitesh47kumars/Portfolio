import React, { useState } from 'react';

const socialLinks = [
  {
    href: 'https://linkedin.com/in/iaayushbharti',
    label: 'LinkedIn',
    svg: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-1"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
  {
    href: 'https://github.com/aayushbharti',
    label: 'GitHub',
    svg: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-1"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
        <path d="M9 18c-4.51 2-5-2-7-2"></path>
      </svg>
    ),
  },
  {
    href: 'https://x.com/iaayushbharti',
    label: 'Twitter',
    svg: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-1"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 1.9-.4 2.6-1"></path>
      </svg>
    ),
  },
];

export default function ContactFormDrawer({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [messageCount, setMessageCount] = useState(0);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'message') {
      setMessageCount(value.length);
    }
  };

  // Simple email validation regex
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim()) {
      alert('Please enter your name.');
      return;
    }
    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      alert('Please enter a message.');
      return;
    }

    // Simulate form submission success
    alert('Form submitted! Thank you.');

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setMessageCount(0);

    // Close drawer
    onClose();
  };

  return (
    <form className="mx-auto max-w-2xl flex flex-col gap-4" onSubmit={handleSubmit}>
      
      <div className='flex max-sm:flex-col justify-between gap-4'>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="rounded border border-gray-300 px-3 py-2 text-black dark:text-white dark:bg-neutral-800"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={30}
            />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="rounded border border-gray-300 px-3 py-2 text-black dark:text-white dark:bg-neutral-800"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={50}
            />
        </div>

      </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-semibold text-gray-700 dark:text-gray-200"
            >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="rounded border border-gray-300 px-3 py-2 text-black dark:text-white dark:bg-neutral-800"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
            maxLength={500}
            />
          <p className="text-xs text-gray-500">
            {messageCount} / 500 characters
          </p>
      </div>

      {/* Social links */}
      <div className="mt-4 flex justify-center space-x-6">
        {socialLinks.map(({ href, label, svg }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            {svg}
          </a>
        ))}
      </div>

      <button
        type="submit"
        className="mt-6 rounded bg-black px-4 py-2 font-semibold text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-300"
      >
        Send Message
      </button>
    </form>
  );
}
