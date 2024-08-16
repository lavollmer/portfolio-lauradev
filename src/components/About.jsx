import React from "react";
import Avatar from "../assets/Avatar.png";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-10 md:p-40 font-jost text-black">
      <div className="flex flex-col w-full md:w-1/2 md:pr-10 space-y-10">
        <div>
          <h1 className="text-black text-3xl md:text-5xl">About</h1>
        </div>
        <div className="flex flex-row">
          <h1 className="text-xl md:text-3xl font-bold">Why hello there!</h1>
        </div>
        <div className="flex flex-col space-y-10 text-lg md:text-xl ">
          <p>
            I enjoy learning and solving complex problems. Previously, I
            worked in healthcare at large academic medical centers and
            hospitals. I have also worked for health technology companies and
            online healthcare websites.
          </p>
          <p>
            Outside of work, I love to paint, draw and any type of craft. I love using
            my creativity to make something beautiful and meaningful. I also love exploring new areas and learning about different cultures.
          </p>
          <p>Let's build something together!</p>
          <p>Laura Vollmer</p>
        </div>
      </div>
      <div>
        <img src={Avatar} alt="avatar image of laura" className="h-64 w-64"/>
      </div>
    </div>
  );
};

export default About;
