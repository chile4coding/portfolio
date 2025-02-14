import { motion } from "framer-motion";

const ToolsAndTech = () => {
  return (
    <div className="my-10">
      <div>
        <div className="py-10">
          {/* Title Animation */}
          <motion.h2
            className="text-6xl font-semibold uppercase py-10 break-all sm:text-4xl md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            Tools & Tech
          </motion.h2>

          {/* Grid Container Animation */}
          <motion.div
            className="grid grid-cols-5 sm:grid-cols-5 gap-10 max-w-[600px] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
          >
            {[
              { src: "html.png", alt: "html", title: "HTML" },
              { src: "css.png", alt: "css", title: "CSS" },
              { src: "js.png", alt: "js", title: "JS" },
              { src: "react.png", alt: "react", title: "Reactjs" },
              { src: "next.png", alt: "next", title: "Nextjs" },
              { src: "node.png", alt: "nodejs", title: "Nodejs" },
              { src: "express.png", alt: "express", title: "Expressjs" },
              { src: "mongo.png", alt: "mongodb", title: "MongoDB" },
              { src: "postgresql.png", alt: "postgresql", title: "PostgreSQL" },
              { src: "git.png", alt: "git", title: "Git" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="rounded-full max-w-[100px] max-h-[100px]"
                whileInView={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: false }}
              >
                <img
                  src={tech.src}
                  alt={tech.alt}
                  title={tech.title}
                  className="rounded-full w-full bg-[white] p-5 sm:p-2 max-w-[100px] max-h-[100px] w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ToolsAndTech;
