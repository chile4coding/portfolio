import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
const nextVariant = {
  hidden: {
    x: "100vw",
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
export default function Tools() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["-3 1", "1.33 1"],
  });

  return (
    <div ref={scrollRef} className=" my-10">
      <motion.div
        style={{
          scale: scrollYProgress,

          opacity: scrollYProgress,
        }}>
        <motion.div
          className=" py-10"
          variants={nextVariant}
          whileInView="visible"
          initial="hidden">
          <h2 className="  text-6xl font-semibold uppercase py-10  break-all sm:text-5xl md:text-4pxl">
            {" "}
            Tools & Tech
          </h2>

          <div className=" grid grid-cols-5 sm:grid-cols-2 gap-10 max-w-[600px]  mx-auto">
            <div className="rounded-full max-w-[100px] max-h-[100px]   ">
              <img
                src="html.png"
                alt="html"
                title="HTML"
                className="  rounded-full w-full   bg-[white] p-5 max-w-[100px] max-h-[100px]  w-ful  h-full object-cover"
              />
            </div>
            <div className="rounded-full max-w-[100px] max-h-[100px]   ">
              <img
                src="css.png"
                alt="css"
                title="CSS"
                className="  rounded-full w-full   bg-[white] p-5 max-w-[100px] max-h-[100px]  w-ful  h-full object-cover"
              />
            </div>
            <div className="rounded-full max-w-[100px] max-h-[100px]   ">
              <img
                src="js.png"
                alt="js"
                title="JS"
                className="  rounded-full w-full   bg-[white] p-5 max-w-[100px] max-h-[100px]  w-ful  h-full object-cover"
              />
            </div>
            <div className="rounded-full max-w-[100px] max-h-[100px]   ">
              <img
                src="react.png"
                alt="react"
                title="Reactjs"
                className="  rounded-full w-full   bg-[white] p-5 max-w-[100px] max-h-[100px]  w-ful  h-full object-cover"
              />
            </div>
            <div className="rounded-full max-w-[100px] max-h-[100px]   ">
              <img
                src="next.png"
                alt="next"
                title="Nextjs"
                className="  rounded-full w-full   bg-[white] p-5 max-w-[100px] max-h-[100px]  w-ful  h-full object-cover"
              />
            </div>
            <div className="rounded-full max-w-[100px] max-h-[100px]   ">
              <img
                src="node.png"
                alt="nodejs"
                title="Nodejs"
                className="  rounded-full w-full   bg-[white] p-5 max-w-[100px] max-h-[100px]  w-ful  h-full object-cover"
              />
            </div>
            <div className="rounded-full max-w-[100px] max-h-[100px]   ">
              <img
                src="express.png"
                alt="express"
                title="Expressjs"
                className="  rounded-full w-full   bg-[white] p-5 max-w-[100px] max-h-[100px]  w-ful  h-full object-cover"
              />
            </div>
            <div className="rounded-full max-w-[100px] max-h-[100px]   ">
              <img
                src="mongo.png"
                alt="mongodb"
                title="MongoDB"
                className="  rounded-full w-full   bg-[white] p-5 max-w-[100px] max-h-[100px]  w-ful  h-full object-cover"
              />
            </div>
            <div className="rounded-full max-w-[100px] max-h-[100px]   ">
              <img
                src="postgresql.png"
                alt="postgresql"
                title="Postgresql"
                className="  rounded-full w-full   bg-[white] p-5 max-w-[100px] max-h-[100px]  w-ful  h-full object-cover"
              />
            </div>
            <div className="rounded-full max-w-[100px] max-h-[100px]   ">
              <img
                src="git.png"
                alt="git"
                title="Git"
                className="  rounded-full w-full   bg-[white] p-5 max-w-[100px] max-h-[100px]  w-ful  h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
