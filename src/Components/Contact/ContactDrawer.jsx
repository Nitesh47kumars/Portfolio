import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const tabItems = ['Quick Connect', 'Fill a Form'];

const ContactDrawer = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState(tabItems[0]);
  const backdropRef = useRef();

  // Close drawer when clicking outside the content (backdrop)
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target === backdropRef.current) {
        onClose();
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        ref={backdropRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm"
      >
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="w-full max-w-xl rounded-t-2xl bg-white dark:bg-neutral-900 p-6 shadow-lg"
        >
          {/* Drag handle */}
          <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-gray-300 dark:bg-gray-600" />

          {/* Tabs */}
          <div className="mb-4 flex justify-center space-x-2">
            {tabItems.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  activeTab === tab
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'bg-gray-200 dark:bg-neutral-700 text-black dark:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'Quick Connect' ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href="mailto:hello@example.com"
                className="rounded-lg p-4 bg-blue-100 dark:bg-blue-900/30 text-center text-blue-700 dark:text-blue-300 hover:scale-105 transition"
              >
                Email
              </a>
              <a
                href="https://calendly.com/your-link"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-4 bg-purple-100 dark:bg-purple-900/30 text-center text-purple-700 dark:text-purple-300 hover:scale-105 transition"
              >
                Book a Call
              </a>
            </div>
          ) : (
            <form className="space-y-4 mt-2">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-md p-2 bg-gray-100 dark:bg-neutral-800 text-black dark:text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-md p-2 bg-gray-100 dark:bg-neutral-800 text-black dark:text-white"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full rounded-md p-2 bg-gray-100 dark:bg-neutral-800 text-black dark:text-white"
              />
              <button
                type="submit"
                className="w-full bg-black text-white dark:bg-white dark:text-black p-2 rounded-md hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          )}

          {/* Availability Note */}
          <div className="mt-6 flex items-center justify-center rounded-md border border-green-400/20 bg-green-400/10 p-2 text-sm text-green-700 dark:text-green-300 dark:border-green-900/30 dark:bg-green-900/10">
            <div className="relative mr-2 flex h-3 w-3 items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-500"></div>
              <div className="absolute h-3 w-3 animate-ping rounded-full bg-green-600 opacity-75 dark:bg-green-500"></div>
            </div>
            Currently available for new opportunities
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="mt-4 block mx-auto text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactDrawer;
