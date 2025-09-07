import React, { useEffect, useRef, useState } from 'react';
import BookCallLoader from '../../../UI/BookCallLoader';

const BookCall = () => {
  const calendlyRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const scriptId = 'calendly-widget-script';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        setTimeout(() => setLoading(false), 1000);
      };
      document.body.appendChild(script);
    } else {
      setTimeout(() => setLoading(false), 2000);
    }
  }, []);

  return (
    <div
      className="relative pt-15 max-md:pt-30"
      style={{ minWidth: '320px', height: '925px', position: 'relative' }}
    >

      {/* 📸 Background Image */}
      <img
        src="https://images.unsplash.com/photo-1637775297458-7443ffd545b2?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="photo"
        className="absolute top-0 left-0 h-full w-full z-[-1] object-cover"
      />
      {/* 📸 Gradient overlay */}
      <div className="absolute top-0 left-0 h-full w-full z-[-1] bg-gradient-to-b from-black/50 via-black/30 to-black/80" />


      {/* ⏳ Loader */}
      {loading && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '5rem',
            backgroundColor: '#000000',
            zIndex: 10,
          }}
        >
          <BookCallLoader />
        </div>
      )}

      {/* 📅 Calendly Embed */}
      <div
        ref={calendlyRef}
        className="calendly-inline-widget"
        data-url="https://calendly.com/niteshshah028/30min?background_color=1a1a1a&text_color=ffffff&back=1&month=2025-09"
        style={{
          minWidth: '320px',
          height: '1000px',
          display: loading ? 'none' : 'block',
        }}
      />
    </div>
  );
};

export default BookCall;
