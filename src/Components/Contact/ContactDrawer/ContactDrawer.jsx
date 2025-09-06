import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ContactFormDrawer from './ContactFormDrawer';
import SocialLinks from './SocialLinks';
import TabIndex from './TabIndex';
import QuickContact from './QuickContact/QuickContact';
import Avalability from './Avalability';


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
        className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm"
      >
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="w-full max-w-xl rounded-t-2xl bg-white dark:bg-[#131314] p-6 shadow-lg"
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
            <>
              <QuickContact/>
              <Avalability/>
              <button
                onClick={onClose}
                className="mt-4 block mx-auto text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                Close
              </button>
            </>
            ) : (
              <ContactFormDrawer onClose={onClose} />
            )
          }
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactDrawer;
