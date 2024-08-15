import React from "react";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div className="flex flex-col bg-white text-jost p-10 md:space-y-10 md:p-20 md:mt-10 rounded-lg">
      <div className="p-10">
        <hr />
      </div>
      <div className="flex flex-col items-center justify-evenly space-y-10">
        <div className="flex flex-row flex-wrap justify-evenly space-x-4">
          <SkillsCard
            title="React"
            content="1 year of experience with React. I have built multiple projects using React, including this website."
          />
          <SkillsCard
            title="Tailwind CSS"
            content="1 year of experience with Tailwind CSS. I have built multiple projects using Tailwind CSS, including this website."
          />
          <SkillsCard title="JavaScript" content="1 year of experience" />
        </div>
        <div className="flex flex-row flex-wrap justify-evenly space-x-4">
          <SkillsCard title="HTML" content="1 year of experience" />
          <SkillsCard title="CSS" content="1 year of experience" />
          <SkillsCard title="Accessibility" content="1 year of experience" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
