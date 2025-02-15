import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsArrowDownCircle } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import { IoCallSharp } from "react-icons/io5";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { motion, useScroll } from "framer-motion";
const loaderVariant = {
  animationOne: {
    y: [10, -10, 10],
    transition: {
      x: {
        repeat: Infinity,
        duration: 1,
      },
      y: {
        repeat: Infinity,
        duration: 1,
        ease: "easeIn",
      },
    },
  },
};
const buttonVariants = {
  hover: {
    scale: 1.3,
    textShadow: "0px 0px 12px rgb(225, 225, 225)",
    boxShadow: "0px 0px 12px rgb(225, 225, 225)",
  },
};

const containerVariant = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1.02,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

export default function Hero() {
  const scrollRef = useRef(null);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 1", "1.33 1"],
  });

  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {});

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {});

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to) => {
    setActive((prev) => to);
  };

  return (
    <motion.div ref={scrollRef} className=" z-0 ">
      <motion.section
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className=" pb-10  grid grid-cols-2  h-full gap-6 sm:mt-4 md:mt-4  my-10 sm:px-4  md:px-10 sm:grid-cols-1 md:grid-cols-1"
      >
        <div className=" sm:order-2 md:order-2    flex flex-col justify-center  ">
          <h2 className=" text-6xl font-semibold uppercase py-5  break-all sm:text-5xl md:text-4pxl  lg:my-4 xl:my-4  ">
            <span className=" normal-case">Hey I'm, </span>
          </h2>

          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Chile",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Chile Omereji",
              1000,
              "Full Stack Developer",
              1000,
            ]}
            wrapper="strong"
            speed={50}
            style={{
              fontSize: "2em",
              display: "inline-block",
            }}
            repeat={Infinity}
          />

          <p className=" text-2xl font-semibold  leading-8 sm:font-semibold sm:text-xl     mt-4">
            I'm a full-stack web developer, breathing life into web <br />{" "}
            applications with my coding magic.
          </p>

          <div className=" flex  items-center gap-10  mt-4 mb-10">
            <motion.a
              href="https://github.com/chile4coding"
              target="_blank"
              variants={buttonVariants}
              whileHover="hover"
              className=" rounded-full"
            >
              <FaGithub
                className=" text-5xl text-midnigtblue  cursor-pointer"
                title="Github"
              />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/chileomereji/"
              target="_blank"
              variants={buttonVariants}
              whileHover="hover"
            >
              <FaLinkedin
                className=" text-5xl text-midnigtblue  cursor-pointer"
                title="LinkedIn"
              />
            </motion.a>
            <motion.a
              href="tel:+2348104274522"
              variants={buttonVariants}
              whileHover="hover"
            >
              <IoCallSharp
                className=" text-5xl text-midnigtblue  cursor-pointer"
                title="LinkedIn"
              />
            </motion.a>
          </div>
          <motion.div
            variants={loaderVariant}
            inital="animationOne"
            animate="animationOne"
            className="  flex justify-center"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              className="rounded-full"
            >
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                onClick={() => handleSetActive("section1")}
              >
                <BsArrowDownCircle className="icon-colors text-6xl  cursor-pointer font-normal " />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="    flex   items-center   sm:order-1 md:order-1">
          <motion.img
            src="/chile.jpg"
            alt="Chile"
            loading="lazy"
            className=" scale-x-[-1] sm:max-h-[200px] md:max-h-[350px]   object-cover w-full max-h-[500px] max-w-[600px]  rounded-lg h-[100%]"
          />
        </div>
      </motion.section>
    </motion.div>
  );
}
