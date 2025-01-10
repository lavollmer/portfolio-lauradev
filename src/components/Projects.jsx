import React from "react";
import Bookmark from "../assets/Bookmark.png";
import Easybank from "../assets/Easybank.png";
import FAQ from "../assets/FAQ.png";
import Sneakers from "../assets/Sneakers.png";
import Card from "./ProjectsCard";
import Sunnyside from "../assets/sunnyside.png";
import Portfolio from "../assets/website.png";
import MobileBookmark from "../assets/mobilebookmark.png";
import MobileEcommerce from "../assets/mobileecommerce.png";
import MobileEasybank from "../assets/mobileeasybank.png";
import MobileFAQ from "../assets/mobileFAQ.png";
import MobileSunny from "../assets/mobilesunnyside.png";
import MobilePortfolio from "../assets/mobileportfolio.png";
import Advice from "../assets/advicegenerator.png";
import MobileAdvice from "../assets/advicegeneratormobile.png";
import Interactive from "../assets/interactive.png";
import MobileInteractive from "../assets/interactivemobile.png";
import Puzzle from "../assets/puzzle.png";
import MobilePuzzle from "../assets/puzzlemobile.png";
import Rating from "../assets/SelectedRating.png";
import DesktopContact from "../assets/desktopcontactform.png";
import MobileContact from "../assets/mobilecontactform.png";
import Dessert from "../assets/dessert-desktop.png";
import MobileDessert from "../assets/dessert-mobile.png";

const Projects = () => {
  return (
    <div className="bg-very-light-gray text-jost p-10">
      <div className="pb-20">
        <h1 className="flex items-center justify-center text-black dark:text-white text-3xl md:text-5xl">
          Latest Projects
        </h1>
      </div>
      {/* first section and row of projects */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row flex-wrap ">
          <Card
            image={Bookmark}
            mobileImage={MobileBookmark}
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
            mobileImage={MobileEcommerce}
            imageDesc="E-Commerce Page"
            title="E-Commerce Page"
            content="A solo project creating a navigation bar, a cart section, a product section, a footer, and a carousel photo gallery. The project included cart functionality, and a responsive design."
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
            mobileImage={MobileEasybank}
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
        {/* second section and row of projects */}
        <div className="flex flex-col lg:flex-row flex-wrap">
          <Card
            image={Dessert}
            mobileImage={MobileDessert}
            imageDesc="Dessert Product List"
            title="Dessert List and Cart"
            content="This solo project was aimed at creating React-based Dessert product list website that allows the end user to order a specific quantity of a dessert and displays the total price in a cart component. "
            skillOne="REACTJS"
            skillTwo="TAILWIND CSS"
            skillThree="VITE"
            skillFour="CSS"
            githubCode={`https://github.com/lavollmer/productlist`}
            livesite={`https://dessert-cart-lauradev.netlify.app/`}
            keyfeatureOne={"Cart Functionality"}
            keyfeatureTwo={"Lighthouse Report Optimization"}
            keyfeatureThree={"Props and State Management"}
            keyfeatureFour={"Reusable Components"}
          />
          <Card
            image={Sunnyside}
            mobileImage={MobileSunny}
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
            mobileImage={MobilePortfolio}
            imageDesc="Portfolio Website"
            title="Previous Portfolio Website"
            content="A solo project that involved creating my first portfolio website to showcase my projects and skills. "
            skillOne="REACTJS"
            skillTwo="TAILWIND CSS"
            skillThree="VITE"
            skillFour="CSS"
            githubCode={`https://github.com/lavollmer/portfolio-website`}
            livesite={`https://iridescent-baklava-dec48b.netlify.app/`}
            keyfeatureOne={"EmailJS Integration"}
            keyfeatureTwo={"Domain Name Acquisition and Integration"}
            keyfeatureThree={"React-Type-Animation Integration"}
            keyfeatureFour={"Interactive Hover States"}
          />
        </div>
        {/* 3rd section row and projects */}
        <div className="flex flex-col lg:flex-row flex-wrap">
          <Card
            image={Advice}
            mobileImage={MobileAdvice}
            imageDesc="Advice Generator App"
            title="Advice Generator App"
            content="This solo project was aimed at creating React-based advice generator app that fetches and displays random advice using the Advice Slip API. "
            skillOne="REACTJS"
            skillTwo="TAILWIND CSS"
            skillThree="VITE"
            skillFour="CSS"
            githubCode={`https://github.com/lavollmer/advice-generator-app`}
            livesite={`https://chic-malabi-36e673.netlify.app/`}
            keyfeatureOne={"API Integration"}
            keyfeatureTwo={"useEffect Hooks"}
            keyfeatureThree={"Flexbox Layout"}
            keyfeatureFour={"Try Catch Block Coding"}
          />
          <Card
            image={Interactive}
            mobileImage={MobileInteractive}
            imageDesc="Interactive Pricing Tool"
            title="Interactive Pricing Tool"
            content="This project aimed to develop an interactive pricing tool, featuring a dynamic and user-friendly interface."
            skillOne="REACTJS"
            skillTwo="TAILWIND CSS"
            skillThree="VITE"
            skillFour="CSS"
            githubCode={`https://github.com/lavollmer/interactive-pricing-tool`}
            livesite={`https://pricingtool-lauradev.netlify.app/`}
            keyfeatureOne={"Slider Input"}
            keyfeatureTwo={"Hover States"}
            keyfeatureThree={"Toggle Input"}
            keyfeatureFour={"Flexbox Design"}
          />
          <Card
            image={Puzzle}
            mobileImage={MobilePuzzle}
            imageDesc="Missing Puzzle Piece"
            title="Missing Puzzle Piece"
            content="This application was developed as a personal project to address a common issue faced by puzzle enthusiasts - the loss of puzzle pieces."
            skillOne="REACTJS"
            skillTwo="TAILWIND CSS"
            skillThree="VITE"
            skillFour="CSS"
            githubCode={`https://github.com/lavollmer/missingpuzzlepiece`}
            livesite={`https://missing-puzzle-piece-b568b18a56c7.herokuapp.com/`}
            keyfeatureOne={"Solo design and concept creation"}
            keyfeatureTwo={"Feedback Form"}
            keyfeatureThree={"Side Navigation Bar"}
            keyfeatureFour={"Interactive Flow of Design"}
          />
        </div>
        {/* fourth projects line */}
        <div className="flex flex-col lg:flex-row flex-wrap">
          <Card
            image={Rating}
            mobileImage={Rating}
            imageDesc="Interactive Rating App"
            title="Interactive Rating App"
            content="This solo project was aimed at creating React-based Interactive Rating App that allows the end user to select a rating and displays the rating in a Thank You component. "
            skillOne="REACTJS"
            skillTwo="TAILWIND CSS"
            skillThree="VITE"
            skillFour="CSS"
            githubCode={`https://github.com/lavollmer/interactive-rating-component`}
            livesite={`https://interactive-rating-lauradev.netlify.app/`}
            keyfeatureOne={"useState Management"}
            keyfeatureTwo={"Rating System"}
            keyfeatureThree={"TailwindCSS Design"}
            keyfeatureFour={"props and state management"}
          />
          <Card
            image={DesktopContact}
            mobileImage={MobileContact}
            imageDesc="Contact Form"
            title="Contact Form"
            content="This solo project was aimed at creating React-based Contact Form that allows the end user to select a rating and displays the rating in a Thank You component. "
            skillOne="REACTJS"
            skillTwo="TAILWIND CSS"
            skillThree="VITE"
            skillFour="CSS"
            githubCode={`https://github.com/lavollmer/contact-form`}
            livesite={`https://contact-form-lauradev.netlify.app/`}
            keyfeatureOne={"useState Management"}
            keyfeatureTwo={"Lighthouse Report Optimization"}
            keyfeatureThree={"Form Validation"}
            keyfeatureFour={"Reusable Components"}
          />
          <Card
            image={FAQ}
            mobileImage={MobileFAQ}
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
