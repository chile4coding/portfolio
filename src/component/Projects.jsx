import React, { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Link, Element, scroller } from "react-scroll";
import { FaGithub } from "react-icons/fa";

// export default function Projects() {
//   const scrollRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["-3 1", "1.33 1"],
//   });

//   const openProject = (link) => {
//     window.open(link, "_blank");
//   };

//   return (
//     <div className=" pb-10  z-0 w-full about-bg  xl:px-10 px-4 lg:px-10  ">
//       <h2 className=" text-6xl font-semibold uppercase py-10  break-all sm:text-3xl md:text-4pxl">
//         {" "}
//         Projects
//       </h2>
//       <div className=" grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ">
//         <p className=" text-2xl font-semibold  sm:font-normal sm:text-lg leading-8  pb-10">
//           Applications I have been building at my free time using a wide array
//           of technology. Some technology included are GitHub, Postgres, Nodejs,
//           Expressjs, REST API, Reactjs, Tailwindcss, Nextjs, Javascript,
//           Typescript and much more.
//         </p>
//       </div>
//       <Element
//         name="project"
//         className="section"
//         style={{
//           scale: scrollYProgress,

//           opacity: scrollYProgress,
//         }}>
//         <div className="   grid grid-cols-4 gap-10  md:grid-cols-2 sm:grid-cols-1">
//           <div className="  grow-now grow-more">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               whileHover={{ opacity: 0.9, y: 0 }}
//               className="backdrop">
//               <h2 className=" text-lg font-bold">Therapy Application</h2>
//               <p className=" sm:text-xs"> A platform for booking </p>
//               <p className=" sm:text-xs"> therapy session</p>
//               <button
//                 className="btn mb-2"
//                 onClick={() =>
//                   openProject("https://therapy-app-chile4coding.vercel.app/")
//                 }>
//                 Live Demo
//               </button>
//               <FaGithub
//                 className=" text-2xl"
//                 onClick={() =>
//                   openProject(
//                     "https://github.com/Visionvoice2023/therapy-app.git"
//                   )
//                 }
//               />
//             </motion.div>
//             <a href="" className=" ">
//               <img
//                 src="therapy.png"
//                 alt="theraply"
//                 title="theraply"
//                 className="   bg-[white] p-5  w-ful  h-full object-cover"
//               />
//             </a>
//           </div>
//           <div className="  grow-now grow-more">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               whileHover={{ opacity: 0.9, y: 0 }}
//               className="backdrop">
//               <h2 className=" text-lg font-bold">Commercefy</h2>
//               <p className=" sm:text-xs"> A platform that simplify small </p>
//               <p className=" sm:text-xs"> business transactions</p>
//               <button
//                 className="btn mb-2"
//                 onClick={() =>
//                   openProject("https://commercefyhere.netlify.app/")
//                 }>
//                 Live Demo
//               </button>
//               <FaGithub
//                 className=" text-2xl"
//                 onClick={() =>
//                   openProject("https://github.com/chile4coding/commercefy.git")
//                 }
//               />
//             </motion.div>
//             <a href="" className=" ">
//               <img
//                 src="commercefy.png"
//                 alt="commercefy"
//                 title="commercefy"
//                 className="   bg-[white] p-5  w-ful  h-full object-cover"
//               />
//             </a>
//           </div>
//           <div className="  grow-now grow-more">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               whileHover={{ opacity: 0.9, y: 0 }}
//               className="backdrop">
//               <h2 className=" text-lg font-bold">Hospital Recommender</h2>
//               <p className=" sm:text-xs"> An online system that </p>
//               <p className=" sm:text-xs"> recommend hospitals to patients</p>
//               <button
//                 className="btn mb-2"
//                 onClick={() => openProject("https://hrs-one.vercel.app/")}>
//                 Live Demo
//               </button>
//               <FaGithub
//                 className=" text-2xl"
//                 onClick={() =>
//                   openProject("https://github.com/chile4coding/hrs.git")
//                 }
//               />
//             </motion.div>
//             <a href="" className=" ">
//               <img
//                 src="hrs.png"
//                 alt="hospital recommender system"
//                 title="hospital recommender system"
//                 className="   bg-[white] p-5  w-ful  h-full object-cover"
//               />
//             </a>
//           </div>
//           <div className="  grow-now grow-more">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               whileHover={{ opacity: 0.9, y: 0 }}
//               className="backdrop">
//               <h2 className=" text-lg font-bold">Stewart Collection</h2>
//               <p className=" sm:text-xs"> An ecommerce store with </p>
//               <p className=" sm:text-xs"> user and admin dashboard</p>
//               <button
//                 className="btn mb-2"
//                 onClick={() =>
//                   openProject(
//                     "https://stewart-frontend-chile4coding.vercel.app/"
//                   )
//                 }>
//                 Live Demo
//               </button>
//               <FaGithub
//                 className=" text-2xl"
//                 onClick={() =>
//                   openProject(
//                     "https://github.com/chile4coding/stewart_backend.git"
//                   )
//                 }
//               />
//             </motion.div>
//             <a href="" className=" ">
//               <img
//                 src="stewart.png"
//                 alt="stewart"
//                 title="stewart"
//                 className="   bg-[white] p-5  w-ful  h-full object-cover"
//               />
//             </a>
//           </div>
//         </div>
//       </Element>
//     </div>
//   );
// }

const projectData = [
  {
    title: "Therapy Application",
    description: "A platform for booking therapy sessions",
    liveLink: "https://therapy-app-chile4coding.vercel.app/",
    repoLink: "https://github.com/Visionvoice2023/therapy-app.git",
    image: "therapy.png",
    alt: "therapy",
  },
  {
    title: "Commercefy",
    description: "A platform that simplifies small business transactions",
    liveLink: "https://commercefyhere.netlify.app/",
    repoLink: "https://github.com/chile4coding/commercefy.git",
    image: "commercefy.png",
    alt: "commercefy",
  },
  {
    title: "Hospital Recommender",
    description: "An online system that recommends hospitals to patients",
    liveLink: "https://hrs-one.vercel.app/",
    repoLink: "https://github.com/chile4coding/hrs.git",
    image: "hrs.png",
    alt: "hospital recommender",
  },
  // {
  //   title: "Stewart Collection",
  //   description: "An ecommerce store with user and admin dashboard",
  //   liveLink: "https://stewart-frontend-chile4coding.vercel.app/",
  //   repoLink: "https://github.com/chile4coding/stewart_backend.git",
  //   image: "stewart.png",
  //   alt: "stewart",
  // },
];

// Motion Variants
const cardVariants = {
  hidden: (direction) => {
    switch (direction) {
      case "left":
        return { x: -100, opacity: 0 };
      case "right":
        return { x: 100, opacity: 0 };
      case "top":
        return { y: -100, opacity: 0 };
      case "bottom":
        return { y: 100, opacity: 0 };
      default:
        return { opacity: 0 };
    }
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Projects() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["-3 1", "1.33 1"],
  });

  const directions = ["left", "right", "top", "bottom"]; // Different fly-in directions

  return (
    <div className="pb-10 z-0 w-full xl:px-10 px-4 lg:px-10 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2 }}
        className="text-6xl font-semibold uppercase py-10 break-all sm:text-3xl md:text-4xl"
      >
        Projects
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
      >
        <p className="font-semibold sm:font-normal sm:text-lg leading-8 pb-10">
          Applications I have been building at my free time using a wide array
          of technology. Some technology included are GitHub, Postgres, Nodejs,
          Expressjs, REST API, Reactjs, Tailwindcss, Nextjs, Javascript,
          Typescript and much more.
        </p>
      </motion.div>

      {/* Project Cards */}

      <Element
        name="project"
        classNameName="section"
        style={{
          scale: scrollYProgress,

          opacity: scrollYProgress,
        }}
      >
        <div className="grid grid-cols-3 gap-10 md:grid-cols-2 sm:grid-cols-1">
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              className="grow-now grow-more"
              custom={directions[index % directions.length]} // Assign different directions
              variants={cardVariants}
              initial="hidden"
              whileInView="visible" // Triggers animation every time it enters viewport
            >
              <motion.div
                whileHover={{ opacity: 0.9, y: -5 }}
                className="backdrop p-4 bg-white shadow-lg rounded-lg"
              >
                <h2 className="text-lg font-bold">{project.title}</h2>
                <p className="sm:text-xs">{project.description}</p>
                <button
                  className="btn mb-2 bg-blue-500 text-white px-4 py-2 rounded mt-2"
                  onClick={() => window.open(project.liveLink, "_blank")}
                >
                  Live Demo
                </button>
                <FaGithub
                  className="text-2xl cursor-pointer ml-2"
                  onClick={() => window.open(project.repoLink, "_blank")}
                />
              </motion.div>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  title={project.alt}
                  className="bg-white p-5 w-full h-full object-cover"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </Element>
    </div>
  );
}
