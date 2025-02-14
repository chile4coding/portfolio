import { useScroll, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";

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
      duration: 6000,
    });
  }, []);

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["-3 1", "1.33 1"],
  });

  return (
    <Element
      name="section1"
      classNameName="section"
      style={{
        scale: scrollYProgress,

        opacity: scrollYProgress,
      }}
    >
      <div className="z-0 w-full p-10 sm:p-4" style={{ zIndex: 0 }}>
        {/* About Me Section */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }} // Triggers when 20% of element is visible
          className="grid gap-6 sm:mt-0 md:mt-4 sm:grid-cols-1 md:grid-cols-1 sm:px-0 sm:mx-0"
        >
          <h2 className="text-6xl font-semibold uppercase break-all sm:text-4xl md:text-4pxl sm:pt-0">
            About Me
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className="font-semibold sm:font-normal sm:text-lg leading-8 pb-10"
          >
            I am passionate about leveraging JavaScript, Node.js, React.js,
            Express.js, TypeScript, Next.js, and PostgreSQL to craft seamless
            and innovative web solutions. Aspiring entrepreneur with a vision to
            lead and contribute to groundbreaking projects. My distinctive
            ability lies in dissecting complex problems and transforming them
            into elegant, code-driven solutions. Let's connect and explore the
            intersection of technology and entrepreneurship.
          </motion.p>
        </motion.section>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-10">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="card py-6 bg-white shadow-xl rounded-md cursor-pointer"
          >
            <figure className=" max-h-[20rem]">
              <img src="front.jpg" alt="Frontend" className=" object-cover" />
            </figure>
            <div className="flex justify-center w-full">
              <h2 className="card-title text-center text-2xl py-6 text-nav-color">
                Frontend
              </h2>
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="card py-6 bg-white shadow-xl rounded-md cursor-pointer"
          >
            <figure className=" max-h-[20rem]">
              <img src="back.jpg" alt="Backend" className=" object-cover" />
            </figure>
            <div className="flex justify-center w-full">
              <h2 className="card-title text-center text-2xl py-6 text-nav-color">
                Backend
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
}
