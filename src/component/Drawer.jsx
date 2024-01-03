import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";


import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";


export const linkVariant = {
  visible: { scale: 1.1, originX: 0, originY: 0 },
  transition: { type: "spring", stiffness: 300 },
};




export default function Drawer() {
   const [active, setActive] = useState("");
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

   const handleSetActive = (to) => {
     setActive((prev) => to);
   };
  return (
    <div className="drawer z-50" style={{ zIndex: 999 }}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 min-h-full bg-base-200 ">
          {/* Sidebar content here */}

          <motion.li
            variants={linkVariant}
            whileHover="visible"
            transition="transition"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            onClick={scrollToTop}
            className="list-none font-bold text-5xl  cursor-pointer text-center py-8">
            C
          </motion.li>
          <motion.li
            variants={linkVariant}
            whileHover="visible"
            transition="transition"
            className=" list-none  font-semibold text-lg  cursor-pointer  pb-4">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => handleSetActive("section1")}
              className={`hover:border-b-4  border-b-slate-900  pb-2 ${
                active === "section1" ? "active" : " notActive"
              }`}>
              About
            </Link>
          </motion.li>
          <motion.li
            variants={linkVariant}
            whileHover="visible"
            transition="transition"
            className=" list-none  font-semibold text-lg  cursor-pointer pb-4 ">
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-600}
              duration={500}
              onClick={() => handleSetActive("project")}
              className={`hover:border-b-4  border-b-slate-900  pb-2 ${
                active === "project" ? "active" : "notActive"
              }`}>
              Projects
            </Link>
          </motion.li>
          <motion.li
            variants={linkVariant}
            whileHover="visible"
            transition="transition"
            className=" list-none  font-semibold text-lg  cursor-pointer pb-4">
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-350}
              duration={500}
              onClick={() => handleSetActive("experience")}
              className={`hover:border-b-4  border-b-slate-900  pb-2 ${
                active === "experience" ? "active" : "notActive"
              }`}>
              Experience
            </Link>
          </motion.li>

          <motion.li
            variants={linkVariant}
            whileHover="visible"
            transition="transition"
            className=" list-none  font-semibold text-lg  cursor-pointer pb-4 ">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => handleSetActive("contact")}
              className={`hover:border-b-4  border-b-slate-900  pb-2 ${
                active === "contact" ? "active" : "notActive"
              }`}>
              Contact
            </Link>
          </motion.li>

          <motion.li
            variants={linkVariant}
            whileHover="visible"
            transition="transition"
            className=" list-none  font-semibold text-lg pb-4">
            <a
              download="resume.pdf"
              href="./src/assets/resume.pdf"
              className="hover:border-b-4  border-b-slate-900 cursor-pointer  pb-2">
              Download CV
            </a>
          </motion.li>
        </ul>
      </div>
    </div>
  );
}
