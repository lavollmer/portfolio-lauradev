import React from "react";
import Avatar from "../assets/Avatar.png";

const About = () => {
  return (
    <div className="flex flex-row items-center justify-center p-20 font-jost text-black">
      <div className="flex flex-col w-1/2 pr-10 space-y-10">
        <div>
          <h1 className="text-black text-5xl">About</h1>
        </div>
        <div className="flex flex-row">
          <h1 className="text-3xl font-bold">Why hello there!</h1>
        </div>
        <div className="flex flex-col space-y-10 text-xl ">
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
        </div>
      </div>
      <div>
        <img src={Avatar} className="h-64 w-64"/>
      </div>
    </div>
  );
};

export default About;
