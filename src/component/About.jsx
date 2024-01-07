import { useScroll, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {  Element,  } from "react-scroll";

import { linkVariant } from "./Drawer";
import AOS from "aos";
import "aos/dist/aos.css";

const nextVariant = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 0.1,
    },
  },
};

const linkVariant1 = {
  visible: {
    scale: 1.1,
    originX: 1,
    originY: 0,
    textShadow: "0px 0px 12px rgb(225, 225, 225)",
    boxShadow: "0px 0px 12px rgb(225, 225, 225)",
  },
  transition: {
    type: "spring",
    stiffness: 300,
    delay: 0.2,
    duration: 0.4,
  },
};

export default function About() {
useEffect(() => {
  AOS.init({
    duration:6000
  });
}, []);




  return (
    <div
      data-aos="fade-zoom-in"
      className="  z-0 w-full about-bg p-10 sm:p-4"
      style={{ zIndex: 0 }}>
      <Element name="section1" className="section">
        <section className="   grid   gap-6 sm:mt-0 md:mt-4  sm:grid-cols-1 md:grid-cols-1  sm:px-0 sm:mx-0">
          <h2 className="  text-6xl font-semibold uppercase   break-all sm:text-4xl md:text-4pxl sm:pt-0">
            About Me
          </h2>
          <div
            className=" grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ">
            <p className=" text-2xl font-semibold sm:font-normal sm:text-lg  leading-8  pb-10">
              I am passionate about leveraging JavaScript, Node.js, React.js,
              Express.js, TypeScript, Next.js, and Postgresql to craft seamless
              and innovative web solutions. Aspiring entrepreneur with a vision
              to lead and contribute to groundbreaking projects. My distinctive
              ability lies in dissecting complex problems and transforming them
              into elegant, code-driven solutions. Let's connect and explore the
              intersection of technology and entrepreneurship
            </p>
          </div>

          <div className=" grid grid-cols-2    md:grid-cols-1 gap-10">
            <div className="card  py-6  bg-base-100 shadow-xl rounded-md cursor-pointer">
              <figure>
                <img src="front.png" alt="Backend" />
              </figure>
              <div className="flex justify-center w-ful">
                <h2 className="card-title text-center text-2xl py-6">
                  Frontend
                </h2>
              </div>
            </div>
            <div className="card py-6  bg-base-100 shadow-xl rounded-md cursor-pointer">
              <figure>
                <img src="back.png" alt="Backend" />
              </figure>
              <div className="flex justify-center w-ful">
                <h2 className="card-title text-center text-2xl py-6">
                  Backend
                </h2>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </div>
  );
}
