import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ContactFormDrawer from './ContactFormDrawer';
import SocialLinks from './SocialLinks';
import TabIndex from './TabIndex';
import QuickContact from './QuickContact/QuickContact';
import Avalability from './QuickContact/Avalability';

const ContactDrawer = ({ onClose }) => {
  const tabItems = ['Quick Connect', 'Fill a Form'];
  const [activeTab, setActiveTab] = useState(tabItems[0]);

  const backdropRef = useRef();

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
          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          drag="y"
          dragElastic={0.2}
          dragMomentum={false}
          dragConstraints={{ top: 0 }}
          onDragEnd={(event, info) => {
            if (info.offset.y > 120) {
              onClose();
            }
          }}
          className="w-full max-w-xl rounded-t-2xl bg-[#131314] p-6 shadow-lg touch-none"
        >


          {/* Drag handle */}
          <div className="mx-auto mb-4 h-1.5 w-24 rounded-full bg-gray-600" />

          <SocialLinks />

          <TabIndex
            tabItems={tabItems}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Tab Content */}
          {activeTab === 'Quick Connect' ? (
            <>
              <QuickContact />
              <Avalability />
              <button
                onClick={onClose}
                className="mt-4 block mx-auto text-sm text-gray-400 hover:text-white"
              >
                Close
              </button>
            </>
          ) : (
            <ContactFormDrawer onClose={onClose} />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactDrawer;
