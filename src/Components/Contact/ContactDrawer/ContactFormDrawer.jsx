import React, { useState } from 'react';


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


      <button
        type="submit"
        className="mt-6 rounded bg-black px-4 py-2 font-semibold text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-300"
      >
        Send Message
      </button>
    </form>
  );
}
