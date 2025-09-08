import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // <--- Make sure it's installed
import SendButton from '../../../UI/Icons/SendButton';

export default function ContactFormDrawer({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [messageCount, setMessageCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'message') {
      setMessageCount(value.length);
    }
  };

  // Simple email validation
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        'service_lva338b',
        'template_fms7ieo',
        templateParams,
        'J5ku1hshDeMfW0foO'
      )
      .then(
        (response) => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
          setMessageCount(0);
          onClose();
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <form className="mx-auto max-w-2xl flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className='flex max-sm:flex-col justify-between gap-4'>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="name" className="text-sm font-semibold pl-0.5 text-gray-200">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="rounded-lg px-3 py-1 max-sm:py-2 text-white bg-[#1b1b1b] shadow-[inset_0_0_5px_rgba(225,225,225,.2)]
            focus:outline-none focus:shadow-[inset_0_0_10px_rgba(225,225,225,.2)]"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={30}
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="email" className="text-sm font-semibold pl-0.5 text-gray-200">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="rounded-lg px-3 py-1 max-sm:py-2 text-white bg-[#1b1b1b] shadow-[inset_0_0_5px_rgba(225,225,225,.2)]
            focus:outline-none focus:shadow-[inset_0_0_10px_rgba(225,225,225,.2)]"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={50}
          />
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm font-semibold pl-0.5 text-gray-200">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            style={{ resize: 'none' }}
            id="message"
            name="message"
            rows={5}
            className="rounded-lg px-3 py-2 text-white bg-[#1b1b1b] shadow-[inset_0_0_5px_rgba(225,225,225,.2)]
            focus:outline-none focus:shadow-[inset_0_0_10px_rgba(225,225,225,.2)]"
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

        <SendButton />
      </div>
    </form>
  );
}
