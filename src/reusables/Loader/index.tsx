import React, { useEffect } from "react";

/** Render page loader */
const Loader = ({ text = "Loading..." }: { text?: string }): JSX.Element => {
  // Effect to make scrolling hidden
  useEffect(() => {
    const { body } = document;

    body.classList.add("overflow-hidden");
    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="fixed h-screen w-screen p-4 flex justify-center items-center bg-gray-50 bg-opacity-90 top-0 left-0 z-[2000] overflow-hidden">
      <div className="flex flex-col justify-center items-center max-w-md space-y-3">
        {/* <img src={LoaderIcon} className="max-w-full w-[80px]" /> */}
        <div className="loading-dots"></div>
        {text && <h3 className="!mt-6">{text}</h3>}
      </div>
    </div>
  );
};

export default Loader;
