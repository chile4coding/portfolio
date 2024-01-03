import { useScroll, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import {  Element,  } from "react-scroll";

import { linkVariant } from "./Drawer";

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

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["-3 1", "1.33 1"],
  });


  return (
    <div ref={scrollRef} className=" sm:pb-0 pb-10 z-0 w-full about-bg" style={{zIndex:0}}>
      <Element name="section1" className="section">
        <motion.section
          style={{
            scale: scrollYProgress,

            opacity: scrollYProgress,
          }}
          className="   grid   gap-6 sm:mt-0 md:mt-4  sm:grid-cols-1 md:grid-cols-1">
          <h2 className="  text-6xl font-semibold uppercase py-10  break-all sm:text-5xl md:text-4pxl sm:pt-0">
            About Me
          </h2>
          <div className=" grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ">
            <p className=" text-2xl font-semibold  leading-8  pb-10">
              I am passionate about leveraging JavaScript, Node.js, React.js,
              Express.js, TypeScript, Next.js, and Postgresql to craft seamless
              and innovative web solutions. Aspiring entrepreneur with a vision
              to lead and contribute to groundbreaking projects. My distinctive
              ability lies in dissecting complex problems and transforming them
              into elegant, code-driven solutions. Let's connect and explore the
              intersection of technology and entrepreneurship
            </p>
          </div>

          <motion.div
            variants={nextVariant}
            whileInView="visible"
            initial="hidden"
            className=" grid grid-cols-2  sm:grid-cols-1  md:grid-cols-1 gap-10">
            <motion.div
              variants={linkVariant1}
              whileHover="visible"
              initial="hidden"
              transition="transition"
              className="card  py-6  bg-base-100 shadow-xl rounded-md cursor-pointer">
              <figure>
                <img src="front.png" alt="Backend" />
              </figure>
              <div className="flex justify-center w-ful">
                <h2 className="card-title text-center text-2xl py-6">
                  Frontend
                </h2>
              </div>
            </motion.div>
            <motion.div
              variants={linkVariant}
              transition="transition"
              whileHover="visible"
              initial="hidden"
              className="card py-6  bg-base-100 shadow-xl rounded-md cursor-pointer">
              <figure>
                <img src="back.png" alt="Backend" />
              </figure>
              <div className="flex justify-center w-ful">
                <h2 className="card-title text-center text-2xl py-6">
                  Backend
                </h2>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </Element>
    </div>
  );
}
