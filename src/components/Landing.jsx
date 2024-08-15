import React from "react";
import Computer from "../assets/computerdeskpink.jpg";
import SplashImage from "../assets/splash.jpg"

const Landing = () => {
  return (
    <div className="bg-seashell font-public-sans h-screen w-screen bg-cover bg-center" style={{backgroundImage: `url(${SplashImage})`}}>
      <div className="flex flex-col items-center justify-center h-full text-center text-white text-2xl">
        <h1 className="font-bold">Nice to meet you, I'm Laura Vollmer!</h1>
        <h1>Based in the United States, a passionate software developer.</h1>
      </div>
    </div>
  );
};

export default Landing;
