import React from "react";
import Computer from "../assets/computerdeskpink.jpg";

const Landing = () => {
  return (
    <div className="bg-seashell font-public-sans h-screen w-screen bg-cover bg-center" style={{backgroundImage: `url(${Computer})`}}>
      <div className="flex flex-col items-center justify-center h-full text-center text-white text-2xl">
        <h1 className="font-bold">Hello, I'm Laura!</h1>
        <h1>A passionate software developer.</h1>
        <h1>Let's build something together!</h1>
      </div>
    </div>
  );
};

export default Landing;
