import React, { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Link, Element, scroller } from "react-scroll";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["-3 1", "1.33 1"],
  });

  const openProject = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className=" pb-10  z-0 w-full about-bg  xl:px-10 px-4 lg:px-10  ">
      <h2 className=" text-6xl font-semibold uppercase py-10  break-all sm:text-5xl md:text-4pxl">
        {" "}
        Projects
      </h2>
      <div className=" grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ">
        <p className=" text-2xl font-semibold  leading-8  pb-10">
          Applications I have been building at my free time using a wide array
          of technology. Some technology included are GitHub, Postgres, Nodejs,
          Expressjs, REST API, Reactjs, Tailwindcss, Nextjs, Javascript,
          Typescript and much more.
        </p>
      </div>
      <Element
        name="project"
        className="section"
        style={{
          scale: scrollYProgress,

          opacity: scrollYProgress,
        }}>
        <div className="   grid grid-cols-4 gap-10  md:grid-cols-2 sm:grid-cols-1">
          <div className="  grow-now grow-more">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileHover={{ opacity: 0.9, y: 0 }}
              className="backdrop">
              <h2 className=" text-lg font-bold">Therapy Application</h2>
              <p className=" sm:text-xs"> A platform for booking </p>
              <p className=" sm:text-xs"> therapy session</p>
              <button
                className="btn mb-2"
                onClick={() =>
                  openProject("https://therapy-app-chile4coding.vercel.app/")
                }>
                Live Demo
              </button>
              <FaGithub className=" text-2xl" />
            </motion.div>
            <a href="" className=" ">
              <img
                src="therapy.png"
                alt="theraply"
                title="theraply"
                className="   bg-[white] p-5  w-ful  h-full object-cover"
              />
            </a>
          </div>
          <div className="  grow-now grow-more">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileHover={{ opacity: 0.9, y: 0 }}
              className="backdrop">
              <h2 className=" text-lg font-bold">Commercefy</h2>
              <p className=" sm:text-xs"> A platform that simplify small </p>
              <p className=" sm:text-xs"> business transactions</p>
              <button
                className="btn mb-2"
                onClick={() =>
                  openProject("https://commercefyhere.netlify.app/")
                }>
                Live Demo
              </button>
              <FaGithub className=" text-2xl" />
            </motion.div>
            <a href="" className=" ">
              <img
                src="commercefy.png"
                alt="commercefy"
                title="commercefy"
                className="   bg-[white] p-5  w-ful  h-full object-cover"
              />
            </a>
          </div>
          <div className="  grow-now grow-more">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileHover={{ opacity: 0.9, y: 0 }}
              className="backdrop">
              <h2 className=" text-lg font-bold">Hospital Recommender</h2>
              <p className=" sm:text-xs"> An online system that </p>
              <p className=" sm:text-xs"> recommend hospitals to patients</p>
              <button
                className="btn mb-2"
                onClick={() => openProject("https://hrs-one.vercel.app/")}>
                Live Demo
              </button>
              <FaGithub className=" text-2xl" />
            </motion.div>
            <a href="" className=" ">
              <img
                src="hrs.png"
                alt="hospital recommender system"
                title="hospital recommender system"
                className="   bg-[white] p-5  w-ful  h-full object-cover"
              />
            </a>
          </div>
          <div className="  grow-now grow-more">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileHover={{ opacity: 0.9, y: 0 }}
              className="backdrop">
              <h2 className=" text-lg font-bold">Stewart Collection</h2>
              <p className=" sm:text-xs"> An ecommerce store with </p>
              <p className=" sm:text-xs"> user and admin dashboard</p>
              <button
                className="btn mb-2"
                onClick={() =>
                  openProject(
                    "https://stewart-frontend-chile4coding.vercel.app/"
                  )
                }>
                Live Demo
              </button>
              <FaGithub className=" text-2xl" />
            </motion.div>
            <a href="" className=" ">
              <img
                src="stewart.png"
                alt="stewart"
                title="stewart"
                className="   bg-[white] p-5  w-ful  h-full object-cover"
              />
            </a>
          </div>
        </div>
      </Element>
    </div>
  );
}
