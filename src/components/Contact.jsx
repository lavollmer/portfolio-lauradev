import React from "react";


const Contact = () => {
  return (
    <div className="flex flex-row items-center justify-center relative rounded-lg w-full bg-burnt-sienna bg-opacity-60 font-jost p-8 md:p-20 landing-container">
      <div
        className="absolute inset-0 bg-cover bg-center z-10"
        style={{ backgroundImage: `url(/backgroundimageoverlay.svg)` }}
      ></div>
      <div className="flex flex-col relative z-20 md:p-10 space-y-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <h1 className="text-white text-2xl md:text-6xl font-bold text-center">
            Let's talk about your next project or job opportunity
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <p className="flex flex-col items-center text-center text-lg md:text-4xl">Send me a message on LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/lvollmer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send me a message on LinkedIn"
          >
            <button aria-label="Get in touch" className="hover:animate-bounce bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4 hover:from-redwood hover:to-burnt-sienna">
              <p className="font-bold text-lg md:text-2xl">Get in touch</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
