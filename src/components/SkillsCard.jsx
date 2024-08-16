import React from "react";

const SkillsCard = ({ title, content }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg bg-white overflow-hidden font-jost w-full h-full w-[200px] h-[200px] md:w-[300px] md:h-[200px] lg:w-[400px] lg:h-[200px]">
      <div className="p-6 md:p-8">
        <h2 className="text-black md:text-3xl text-lg font-semibold">
          {title}
        </h2>
        <p className="text-black mt-2 text-sm md:text-md">{content}</p>
      </div>
    </div>
  );
};

export default SkillsCard;
