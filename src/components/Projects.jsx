import React from "react";
import Bookmark from "../assets/Bookmark.png";
import Easybank from "../assets/Easybank.png";
import FAQ from "../assets/FAQ.png";
import Sneakers from "../assets/Sneakers.png";
import Card from "./ProjectsCard";

const Projects = () => {
  return (
    <div className="bg-very-light-gray text-jost p-20">
      <div className="pb-14">
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
          image={Sneakers}
          imageDesc="Sneakers Ecommerce Landing Page"
          title="Sneakers Ecommerce Landing Page"
          content="his project was aimed at learning about ecommerce product landing pages, functionality and styling based on design."
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
        />
      </div>
    </div>
  );
};

export default Projects;
