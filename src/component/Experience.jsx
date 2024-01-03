import React, { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Link, Element, scroller } from "react-scroll";
import { MdOutlineComputer } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";


import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaStar } from "react-icons/fa";
import { BsPersonBadgeFill } from "react-icons/bs";

export default function Experience() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["-3 1", "1.33 1"],
  });

  return (
    <div classNameName=" pb-10  z-0 w-full about-bg  xl:px-10 px-4 lg:px-10  ">
      <h2 className="  text-6xl font-semibold uppercase py-10  break-all sm:text-5xl md:text-4pxl">
        {" "}
        Experience
      </h2>
      <Element
        name="experience"
        classNameName="section"
        style={{
          scale: scrollYProgress,

          opacity: scrollYProgress,
        }}>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background:
                "radial-gradient( circle farthest-corner at 10% 20%,  rgba(171,102,255,1) 0%, rgba(116,182,247,1) 90% )",
              color: "#000",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2023-12-14 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdOutlineComputer />}>
            <h3 className="vertical-timeline-element-title text-2xl font-bold">
              Full Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Excellent Bridge, Nigeria
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background:
                "radial-gradient( circle farthest-corner at 10% 20%,  rgba(171,102,255,1) 0%, rgba(116,182,247,1) 90% )",
              color: "#000",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2023-03-01 - 2023-08-01 "
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdOutlineComputer />}>
            <h3 className="vertical-timeline-element-title text-2xl font-bold">
              Frontend Web Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Asted Group, Nigeria
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background:
                "radial-gradient( circle farthest-corner at 10% 20%,  rgba(171,102,255,1) 0%, rgba(116,182,247,1) 90% )",
              color: "#000",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2023-08-24 - 2023-10-08 "
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdOutlineComputer />}>
            <h3 className="vertical-timeline-element-title text-2xl font-bold">
              Backend Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              ABS TEchnology, Nigeria
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background:
                "radial-gradient( circle farthest-corner at 10% 20%,  rgba(171,102,255,1) 0%, rgba(116,182,247,1) 90% )",
              color: "#000",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2022-12-01 - 2023-03-01"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BsPersonWorkspace />}>
            <h3 className="vertical-timeline-element-title text-2xl font-bold">
              Reactjs Contractor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Code Acorn, NY, USA.
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Element>
    </div>
  );
}
