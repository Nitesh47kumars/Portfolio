import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const ErrorPage = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="max-w-xl text-center">
        <motion.h1
          className="text-9xl font-extrabold tracking-wide mb-6 select-none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        >
          404
        </motion.h1>

        <motion.p
          className="text-2xl sm:text-3xl font-semibold mb-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
        >
          Oops! Page Not Found
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl mb-8 text-gray-300"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8, ease: 'easeOut' }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          className="inline-flex space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Link
            to="/"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold shadow-lg shadow-indigo-500/50 transition"
          >
            Go Home
          </Link>

          <a
            href="mailto:support@example.com"
            className="px-6 py-3 border border-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg font-semibold transition"
          >
            Contact Support
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 opacity-20 select-none"
        initial={{ scale: 0.5, rotate: 10, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 0.2 }}
        transition={{ delay: 2, duration: 1 }}
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-72 h-72"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m3-6a9 9 0 110 18 9 9 0 010-18z"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ErrorPage;
