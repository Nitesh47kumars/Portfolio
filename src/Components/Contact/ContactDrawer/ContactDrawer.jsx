import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ContactFormDrawer from './ContactFormDrawer';
import SocialLinks from './SocialLink/SocialLinks';
import TabIndex from './SocialLink/TabIndex';
import QuickContact from './QuickContact';


const ContactDrawer = ({ onClose }) => {
  // Tab Items
  const tabItems = ['Quick Connect', 'Fill a Form'];
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
          <div className="mx-auto mb-4 h-1.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />

          <SocialLinks/>

          <TabIndex
            tabItems={tabItems}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Tab Content */}
          {activeTab === 'Quick Connect' ? (
              <QuickContact/>
            ) : (
              <ContactFormDrawer onClose={onClose} />
            )
          }

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
