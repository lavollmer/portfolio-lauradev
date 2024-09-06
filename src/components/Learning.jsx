import React from "react";

const Learning = ({ title, content }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg bg-white dark:bg-gray-800 overflow-hidden font-jost w-full h-full w-[200px] h-[200px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[300px]">
      <div className="p-6 lg:p-8 items-center justify-center">
        <h2 className="flex text-black dark:text-white lg:text-3xl md:text-xl text-lg font-semibold">
          {title}
        </h2>
        <p className="text-black dark:text-white mt-2 text-lg md:text-xl lg:text-xl">{content}</p>
      </div>
    </div>
  );
};

export default Learning;
