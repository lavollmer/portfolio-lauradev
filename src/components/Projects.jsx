import React from "react";
import Bookmark from "../assets/Bookmark.png";
import Easybank from "../assets/Easybank.png";
import FAQ from "../assets/FAQ.png";
import Sneakers from "../assets/Sneakers.png";
import Card from "./ProjectsCard";
import Sunnyside from "../assets/sunnyside.png";
import Portfolio from "../assets/website.png";

const Projects = () => {
  return (
    <div className="bg-very-light-gray text-jost p-10 md:p-20">
      <div className="md:pl-20 pb-20">
        <h1 className="flex items-center justify-center text-black text-3xl md:text-5xl">Latest Projects</h1>
      </div>

      <div className="flex flex-wrap justify-center">
        <Card
          image={Bookmark}
          imageDesc="Bookmark Landing Page"
          title="Bookmark Landing Page"
          content="A solo project to create a navigation bar, a hero section, a feature section, a call-to-action section, a footer, and a newsletter signup form."
          skillOne="REACTJS"
          skillTwo="TAILWIND CSS"
          skillThree="VITE"
          skillFour="CSS"
          githubCode={`https://github.com/lavollmer/bookmark-landing-page`}
          livesite={`https://bookmarklandingpagelauradev.netlify.app/`}
          keyfeatureOne={"FAQ Accordion"}
          keyfeatureTwo={"Newsletter Signup Form"}
          keyfeatureThree={
            "Receive an error message if the email is not valid or empty"
          }
          keyfeatureFour={"Mobile and Desktop Compatibility"}
        />
        <Card
          image={Sneakers}
          imageDesc="E-Commerce Product Page"
          title="E-Commerce Product Page"
          content="A solo project creating a navigation bar, a cart section, a product section, a footer, and a carousel photo gallery."
          skillOne="REACTJS"
          skillTwo="TAILWIND CSS"
          skillThree="VITE"
          skillFour="CSS"
          githubCode={`https://github.com/lavollmer/ecommerce-product-page`}
          livesite={`https://ecommercelandingpage-lauradev.netlify.app/`}
          keyfeatureOne={"Cart Functionality"}
          keyfeatureTwo={"Carousel Photo Gallery"}
          keyfeatureThree={"Flexbox Layout"}
          keyfeatureFour={"Mobile and Desktop Compatibility"}
        />
        <Card
          image={Easybank}
          imageDesc="Easybank Landing Page"
          title="Easybank Landing Page"
          content="A solo project that involved a navigation bar, a side navigation bar for mobile, a responsive design, a TailwindCSS layout, a footer, interactive hover states and much more."
          skillOne="REACTJS"
          skillTwo="TAILWIND CSS"
          skillThree="VITE"
          skillFour="CSS"
          githubCode={`https://github.com/lavollmer/easybank-landing-page`}
          livesite={`https://easybank-project-lauradev.netlify.app/`}
          keyfeatureOne={"Interactive Navigation Bar"}
          keyfeatureTwo={"Side Navigation Bar for Mobile"}
          keyfeatureThree={"Gradient Color Backgrounds"}
          keyfeatureFour={"Interactive Hover States"}
        />
        
      </div>
      <div className="flex flex-wrap justify-center">
        <Card
          image={FAQ}
          imageDesc="FAQ Accordion Card"
          title="FAQ Accordion Card"
          content="This solo project was aimed at learning about FAQ accordion structure and styling layout in ReactJS, TailwindCSS, and Vite."
          skillOne="REACTJS"
          skillTwo="TAILWIND CSS"
          skillThree="VITE"
          skillFour="CSS"
          githubCode={`https://github.com/lavollmer/faq-accordian`}
          livesite={`https://faq-lavol.netlify.app/`}
          keyfeatureOne={"FAQ Accordion"}
          keyfeatureTwo={"Mobile and Desktop Compatibility"}
          keyfeatureThree={"Flexbox Layout"}
          keyfeatureFour={"Interactive Hover States"}
        />
        <Card
          image={Sunnyside}
          imageDesc="Sunnyside Landing Page"
          title="Sunnyside Landing Page"
          content="This solo project involved creating a replica of a agency landing page, adhering strictly to a provided design. "
          skillOne="REACTJS"
          skillTwo="TAILWIND CSS"
          skillThree="VITE"
          skillFour="CSS"
          githubCode={`https://github.com/lavollmer/sunnyside-agency-landingpage`}
          livesite={`https://sunnyside-landing-page-lauradev.netlify.app/`}
          keyfeatureOne={"Custom Design"}
          keyfeatureTwo={"Mobile and Desktop Compatibility"}
          keyfeatureThree={"Flexbox Layout"}
          keyfeatureFour={"Google Fonts Integration"}
        />
        <Card
          image={Portfolio}
          imageDesc="Portfolio Website"
          title="Previous Portfolio Website"
          content="A solo project that involved creating my first portfolio website to showcase my projects and skills. "
          skillOne="REACTJS"
          skillTwo="TAILWIND CSS"
          skillThree="VITE"
          skillFour="CSS"
          githubCode={`https://github.com/lavollmer/portfolio-website`}
          livesite={`https://lauradeveloper.com/`}
          keyfeatureOne={"EmailJS Integration"}
          keyfeatureTwo={"Domain Name Acquisition and Integration"}
          keyfeatureThree={"React-Type-Animation Integration"}
          keyfeatureFour={"Interactive Hover States"}
        />
      </div>
    </div>
  );
};

export default Projects;
