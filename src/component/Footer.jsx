import React, { useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";
import { motion } from "framer-motion";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
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
export default function Footer() {
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

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className=" about-bg py-6   relative ">
      <p className=" text-center  mx-auto">
        All Right Reserved Chile© {new Date().getFullYear().toString()}
      </p>

      <motion.div
        variants={loaderVariant}
        inital="animationOne"
        animate="animationOne"
        className="text-midnigtblue  icon-colors text-6xl   cursor-pointer ml-auto absolute right-6 bottom-4">
        <BsArrowUp
          className="text-midnigtblue  icon-colors text-6xl   "
          onClick={scrollToTop}
        />
      </motion.div>
    </div>
  );
}
