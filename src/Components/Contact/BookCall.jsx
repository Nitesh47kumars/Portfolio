import React, { useEffect, useRef, useState } from 'react';

const BookCall = () => {
  const calendlyRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scriptId = "calendly-widget-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        // Wait additional 2 seconds for the widget to fully initialize
        setTimeout(() => setLoading(false), 2000);
      };
      document.body.appendChild(script);
    } else {
      // Script already loaded - wait a bit anyway to cover widget loading
      setTimeout(() => setLoading(false), 2000);
    }
  }, []);

  return (
    <div
    className='relative pt-15'
    style={{ minWidth: "320px", height: "700px", position: 'relative' }}
    >
    <img
    src='https://images.unsplash.com/photo-1637775297458-7443ffd545b2?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    alt='photo'
    className='absolute top-0 left-0 h-full w-full z-[-1]'
    />
    <div className='absolute top-0 left-0 h-full w-full z-[-1] bg-gradient-to-b from-black/50 via-black/30 to-black/80' />
      {loading && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1a1a1a', // same as your Calendly bg
            color: 'white',
            fontSize: '1.2rem',
            zIndex: 10,
          }}
        >
          Loading calendar...
        </div>
      )}
      <div
        ref={calendlyRef}
        className="calendly-inline-widget"
        data-url="https://calendly.com/niteshshah028/30min?background_color=1a1a1a&text_color=ffffff&back=1&month=2025-09"
        style={{ minWidth: "320px", height: "700px", display: loading ? 'none' : 'block' }}
      ></div>
    </div>
  );
};

export default BookCall;
