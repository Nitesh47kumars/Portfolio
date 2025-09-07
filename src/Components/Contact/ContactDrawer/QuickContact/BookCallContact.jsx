import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calender } from "../../../../UI/Icons/Calender";

const BookCallContact = () => {
  const [isHovering,setIsHovering] = useState(false);
  return (
    <Link
      to="/bookcall"
      className="group block overflow-hidden rounded-lg shadow-xl bg-neutral-800/30 transition-all duration-300"
      aria-label="Book a Call"
      onMouseEnter={()=>setIsHovering(true)}
      onMouseLeave={()=>setIsHovering(false)}
    >
      <div className="flex gap-x-3 border-b p-4 border-neutral-700/30 bg-gradient-to-r to-transparent from-purple-900/20">
        <Calender isHovering={isHovering} />
        <h3 className="mb-1 text-base font-medium text-white">Book a Call</h3>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm font-medium text-neutral-200 transition-all duration-300 group-hover:text-white">
          Schedule a time slot
        </div>
        <p className="mt-2 text-sm text-neutral-400">Book a call on my calendar</p>
      </div>
    </Link>
  );
};

export default BookCallContact;
