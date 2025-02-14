import React, { useEffect, useState } from "react";

import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import Drawer from "./Drawer";
export const linkVariant = {
  visible: { scale: 1.2, originX: 0 },
  transition: {
    type: "spring",
    stiffness: 300,
    delay: 0.2,
    duration: 0.4,
  },
};

export default function Header() {
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
    <>
      <Drawer />

      <div
        className=" opacity-90  bg-slate-300  sticky-top  "
        style={{ position: "sticky", top: 0, zIndex: 299 }}
      >
        <div className=" max-w-[80%]  mx-auto navbar  lg:px-10 xl:px-10 pr-10 py-6 items-center  text-nav-color  ">
          <div className=" ">
            <motion.label
              variants={linkVariant}
              whileHover="visible"
              transition="transition"
              htmlFor="my-drawer"
              className="btn  btn-square btn-ghost  lg:hidden xl:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </motion.label>
          </div>
          <div className=" flex justify-between w-full">
            <div className="   sm:flex md:flex sm:justify-end md:justify-end ">
              <motion.li
                variants={linkVariant}
                whileHover="visible"
                transition="transition"
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                onClick={scrollToTop}
                className="list-none font-bold text-5xl  cursor-pointer"
              >
                C
              </motion.li>
            </div>
            <div className="   flex  gap-10   justify-around  md:hidden sm:hidden ">
              <motion.li
                variants={linkVariant}
                whileHover="visible"
                transition="transition"
                className=" list-none  font-semibold text-lg  cursor-pointer"
              >
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
                  }`}
                >
                  About
                </Link>
              </motion.li>
              <motion.li
                variants={linkVariant}
                whileHover="visible"
                transition="transition"
                className=" list-none  font-semibold text-lg  cursor-pointer "
              >
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
                  }`}
                >
                  Projects
                </Link>
              </motion.li>
              <motion.li
                variants={linkVariant}
                whileHover="visible"
                transition="transition"
                className=" list-none  font-semibold text-lg  cursor-pointer "
              >
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
                  }`}
                >
                  Experience
                </Link>
              </motion.li>

              <motion.li
                variants={linkVariant}
                whileHover="visible"
                transition="transition"
                className=" list-none  font-semibold text-lg  cursor-pointer "
              >
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
                  }`}
                >
                  Contact
                </Link>
              </motion.li>

              <motion.li
                variants={linkVariant}
                whileHover="visible"
                transition="transition"
                className=" list-none  font-semibold text-lg "
              >
                <a
                  download="resume.pdf"
                  href={resume}
                  className="hover:border-b-4  border-b-slate-900 cursor-pointer  pb-2"
                >
                  Download CV
                </a>
              </motion.li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
