import React, { useState, useCallback } from "react";
import { Copy } from "../../UI/Copy";
import { Check } from "../../UI/Check";

const EMAIL = "niteshshah028@gmail.com";

const Email = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    setCopied(true);
    navigator.clipboard.writeText(EMAIL);
    setTimeout(() => setCopied(false), 1000);
  }, []);

  return (
    <div
      className="md:col-span-3 lg:col-span-2 md:row-span-2 lg:row-span-1 min-h-[200px] w-full rounded relative transition-shadow duration-500 shadow-[inset_0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_0px_80px_rgba(0,0,0,0.6)] overflow-hidden"
    >
      <div className="absolute top-0 left-0 z-[-1]">
        <img
          src="/Email-bg.avif"
          alt=""
          className="h-full w-full object-cover blur-[1px]"
        />
      </div>

      <div className="h-full flex flex-col items-center justify-around text-center">
        <h1
          className="text-white w-[90%] max-md:text-[14px] md:text-xl"
          style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.8)" }}
        >
          Feel free to reach out for collaborations, freelance work, or just to
          say hello!
        </h1>

        <button
          onClick={handleCopy}
          type="button"
          style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.8)" }}
          className="flex items-center justify-center w-[80%] gap-2 py-3 text-[clamp(0.75rem,1vw,1rem)] font-bold tracking-wide text-black cursor-pointer rounded-md bg-white/10 shadow-[inset_0_3px_10px_#ffffff3f] backdrop-blur-[1px] transition-all duration-500 hover:text-black/60"
        >
          {copied ? <Check /> : <Copy />}
          {EMAIL}
        </button>
      </div>
    </div>
  );
};

export default Email;
