import React from 'react';

const ConnectButton = ({ icon, alt }) => {
  const isImage = icon?.type === 'img';

  const styledIcon = React.cloneElement(icon, {
    className: `
      w-[80%] h-[80%] object-contain
      transition-transform duration-300 ease-in-out
      ${isImage ? 'group-hover:scale-110' : 'group-hover:scale-90 fill-[#333]'}
    `
  });

  return (
    <button
      aria-label={alt}
      className={`
        group
        flex items-center justify-center
        bg-[#e3edf7]
        w-[45px] h-[45px]
        rounded-[10px] p-2
        border border-transparent
        shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),0px_0px_10px_-1px_rgba(255,255,255,0.7)]
        transition-transform duration-300
        hover:shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),-0.5px_-0.5px_0px_rgba(255,255,255,1),0.5px_0.5px_0px_rgba(0,0,0,0.15),0px_12px_10px_-10px_rgba(0,0,0,0.05)]
        hover:border-[rgba(0,0,0,0.1)]
        hover:translate-y-[0.2em]
      `}
    >
      {styledIcon}
    </button>
  );
};

export default ConnectButton;
