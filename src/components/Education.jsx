import React from "react";
import SkillsCard from "./SkillsCard";

const Education = () => {
  return (
    <div className="flex flex-col bg-white text-jost p-10 space-y-6 md:space-y-10 md:p-20 md:mt-10 md:space-x-2 rounded-lg">
      <div className="p-10">
        <hr />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center ">
        <h1 className="text-black text-3xl p-10 md:text-5xl">
          Formal Education
        </h1>
      </div>
      <div className="flex flex-col items-center w-full justify-center md:justify-evenly md:space-y-10">
        <div className="flex flex-row items-center justify-center w-full lg:flex-row flex-wrap lg:space-x-4 space-y-6 lg:space-y-0">
          <SkillsCard
            title="Full-stack Web Development Certificate"
            content="12 full-stack intensive weeks of coding bootcamp at University of Minnesota focused on technical programming skills, group projects, and individual projects"
          />
          <SkillsCard
            title="Masters of Business Administration(MBA)"
            content="MBA with a concentration in healthcare informatics from the New England College"
          />
          <SkillsCard
            title="Doctorate of Pharmacy(PharmD)"
            content="PharmD from Drake University College of Pharmacy and Health Sciences"
          />
        </div>
        {/* <div className="flex flex-col md:flex-row items-center justify-center w-full mt-4 md:mt-0 lg:flex-row  lg:space-x-4 space-y-6 lg:space-y-0">
          <SkillsCard title="HTML" content="1 year of experience" />
          <SkillsCard title="CSS" content="1 year of experience" />
          <SkillsCard
            title="Web Accessibility"
            content="1 year of experience"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Education;
