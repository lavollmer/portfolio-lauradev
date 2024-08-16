import React from "react";
import Bookmark from "../assets/Bookmark.png";
import Easybank from "../assets/Easybank.png";
import FAQ from "../assets/FAQ.png";
import Sneakers from "../assets/Sneakers.png";
import Card from "./ProjectsCard";

const Projects = () => {
  return (
    <div className="bg-very-light-gray text-jost p-20">
      <div className="pb-20">
        <h1 className="text-black text-5xl">Latest Projects</h1>
      </div>

      <div className="flex flex-wrap justify-center">
        <Card
          image={Bookmark}
          imageDesc="Bookmark Landing Page"
          title="Bookmark Landing Page"
          content="This project entailed creating a bookmark landing page with both mobile and web responsive designs. Key features include a side navigation bar for mobile, a footer, a newsletter signup form, a Tailwind CSS design layout, and an FAQ accordion."
          skillOne="REACTJS"
          skillTwo="TAILWIND CSS"
          skillThree="VITE"
          skillFour="CSS"
          githubCode={`https://github.com/lavollmer/bookmark-landing-page`}
          livesite={`https://bookmarklandingpagelauradev.netlify.app/`}
        />
        <Card
          image={Easybank}
          imageDesc="Easybank Landing Page"
          title="Easybank Landing Page"
          content="This project involved developing the Easybank landing page with a focus on both mobile and desktop responsiveness. Key features include a navigation bar, a side navigation bar for mobile, a responsive design, a TailwindCSS layout, a footer, interactive hover states and much more."
          skillOne="REACTJS"
          skillTwo="TAILWIND CSS"
          skillThree="VITE"
          skillFour="CSS"
          githubCode={`https://github.com/lavollmer/easybank-landing-page`}
          livesite={`https://easybank-project-lauradev.netlify.app/`}
        />
        <Card
          image={Sneakers}
          imageDesc="Sneakers Ecommerce Landing Page"
          title="Sneakers Ecommerce Landing Page"
          content="Creating an ecommerce product landing web page featuring a cart functionality that adapts to both desktop and mobile interfaces. The challenge was to implement hover states for all interactive elements, ensuring a seamless user experience across different devices. Key skills applied in this project included the use of flexbox for layout management, TailwindCSS for styling, and ReactJS for dynamic state management and useState. The project aimed to refine my understanding of responsive design, emphasizing desktop and mobile compatibility."
          skillOne="REACTJS"
          skillTwo="TAILWIND CSS"
          skillThree="VITE"
          skillFour="CSS"
          githubCode={`https://github.com/lavollmer/ecommerce-product-page`}
          livesite={`https://ecommercelandingpage-lauradev.netlify.app/`}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        <Card
          image={FAQ}
          imageDesc="FAQ Landing Page"
          title="FAQ Accordion Card"
          content="This project was aimed at learning about faq accordian structure and styling layout in ReactJS, TailwindCSS, and others."
          skillOne="REACTJS"
          skillTwo="TAILWIND CSS"
          skillThree="VITE"
          skillFour="CSS"
        />
        <Card
          image={Easybank}
          imageDesc="Easybank Landing Page"
          title="Easybank Landing Page"
          content="This project involved developing the Easybank landing page with a focus on both mobile and desktop responsiveness. Key features include a navigation bar, a side navigation bar for mobile, a responsive design, a TailwindCSS layout, a footer, interactive hover states and much more."
          skillOne="REACTJS"
          skillTwo="TAILWIND CSS"
          skillThree="VITE"
          skillFour="CSS"
          githubCode={`https://github.com/lavollmer/easybank-landing-page`}
          livesite={`https://easybank-project-lauradev.netlify.app/`}
        />
        <Card
          image={Easybank}
          imageDesc="Easybank Landing Page"
          title="Easybank Landing Page"
          content="This project involved developing the Easybank landing page with a focus on both mobile and desktop responsiveness. Key features include a navigation bar, a side navigation bar for mobile, a responsive design, a TailwindCSS layout, a footer, interactive hover states and much more."
          skillOne="REACTJS"
          skillTwo="TAILWIND CSS"
          skillThree="VITE"
          skillFour="CSS"
        />
      </div>
    </div>
  );
};

export default Projects;
