import React, { useEffect, useState } from 'react';
import BookCallLoader from '../../../UI/BookCallLoader';

const BookCall = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const scriptId = 'calendly-widget-script';
    const existingScript = document.getElementById(scriptId);

    const hideLoader = () =>
      setTimeout(() => setLoading(false), existingScript ? 2000 : 1000);

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = hideLoader;
      document.body.appendChild(script);
    } else {
      hideLoader();
    }
  }, []);

  return (
    <div className="relative w-screen h-[155vh] flex justify-center items-center">
      {/* 📸 Background Image */}
      <img
        src="https://images.unsplash.com/photo-1637775297458-7443ffd545b2?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="photo"
        className="absolute top-0 left-0 h-full w-full z-[-1] object-cover"
      />

      {/* 📸 Gradient overlay */}
      <div className="absolute top-0 left-0 h-full w-full z-[-1] bg-gradient-to-b from-black/80 via-black/50 to-black" />

      {/* ⏳ Loader */}
      {loading && (
        <div className="absolute inset-0 flex justify-center  pt-75 bg-black z-10">
          <BookCallLoader />
        </div>
      )}

      {/* 📅 Calendly Embed */}
      <div
        className="calendly-inline-widget min-w-[320px] w-full h-[75%] md:h-[80%]"
        data-url="https://calendly.com/niteshshah028/30min?background_color=1a1a1a&text_color=ffffff&back=1&month=2025-09"
        style={{
          display: loading ? 'none' : 'block',
        }}
      />
    </div>
  );
};

export default BookCall;
