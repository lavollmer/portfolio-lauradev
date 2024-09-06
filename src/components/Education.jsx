import React from "react";
import Learning from "./Learning";

const Education = () => {
  return (
    <div className="flex flex-col text-jost p-10 space-y-6 lg:space-y-10 lg:p-20 lg:mt-10 lg:space-x-2 rounded-lg">
      <div className="p-10">
        <hr />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <h1 className="flex items-center justify-center text-center text-black dark:text-white text-3xl p-10 lg:text-5xl">
          Professional Education
        </h1>
      </div>
      <div className="flex flex-col items-center w-full justify-center md:justify-evenly md:space-y-10">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:flex-row flex-wrap lg:space-x-4 space-y-6 lg:space-y-0">
          <Learning
            title="Full-stack Web Development Certificate"
            content="12 full-stack intensive weeks of coding bootcamp at University of Minnesota focused on technical programming skills, group projects, and individual projects"
          />
          <Learning
            title="Masters of Business Administration(MBA)"
            content="MBA with a concentration in healthcare informatics from the New England College"
          />
          <Learning
            title="Doctorate of Pharmacy(PharmD)"
            content="PharmD from Drake University College of Pharmacy and Health Sciences"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <h1 className="flex items-center justify-center text-center text-black dark:text-white text-3xl p-10 lg:text-5xl">
            Continous Web Development and Coding Experience
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row  items-center justify-center w-full mt-4 md:mt-0 lg:flex-row  lg:space-x-4 space-y-6 lg:space-y-0">
          <Learning
            title="Frontend Mentor Challenges"
            content="Frontend Mentor offers real-world web development challenges, sharpening HTML, CSS, and JavaScript skills. The structured feedback, solutions, and vibrant community have significantly impacted my learning and growth."
          />
          <Learning
            title="CodeWars"
            content="Codewars is a platform where you can practice your coding skills by attempting various problems in the languages of your choice. You will be given prompts with varying difficulties, and the way that you “solve” them is by passing all the pre-defined tests."
          />
          <Learning
            title="Consistent Coding Practice"
            content="1 year of experience coding on Github as evidenced by my profile and contributions."
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
