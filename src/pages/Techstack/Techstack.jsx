import React from "react";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechstackList";
import { motion } from "framer-motion";

const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        {/* RubberBand animation replaced with framer-motion */}
        <motion.h2
          className="col-12 mt-3 mb-1 text-center text-uppercase"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          Technologies Stack
        </motion.h2>
        <hr />
        <motion.p
          className=" pb-3 center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          👉 including programming Language, Framework, Database, Front-end,
          Back-end Tools, And APIs
        </motion.p>

        <div className="row">
          {TechstackList.map((tech) => (
            // Fade animation replaced with framer-motion
            <motion.div
              key={tech._id}
              className="col-md-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
