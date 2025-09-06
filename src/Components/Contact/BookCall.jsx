import React, { useEffect, useRef } from 'react';

const BookCall = () => {
  const calendlyRef = useRef(null);

  useEffect(() => {
    const scriptId = "calendly-widget-script";

    // Load Calendly script only once
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={calendlyRef}
      className="calendly-inline-widget"
      data-url="https://calendly.com/niteshshah028?background_color=1a1a1a&text_color=ffffff"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  );
};

export default BookCall;
