import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          here are my top 3 recent projects with live links and source code
        </p>

        {/* Replace Spin with framer-motion */}
        <motion.div
          className="row"
          id="ads"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src="ik1.jpg" alt="projects" />
              </div>

              <div className="card-image-overlay m-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Ihsan 💖 Khan</h5>
                </div>
                <a className="ad-btn" href="#">
                  view
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Mobile App</span>
                <img src="khan.jpg" alt="projects" />
              </div>

              <div className="card-image-overlay m-3">
                <span className="card-detail-badge">React Native</span>
                <span className="card-detail-badge">iOS / Android</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Ihsan 💖 Khan</h5>
                </div>
                <a className="ad-btn" href="#">
                  view
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Design</span>
                <img src="ik2.jpg" alt="projects" />
              </div>

              <div className="card-image-overlay m-3">
                <span className="card-detail-badge">Figma</span>
                <span className="card-detail-badge">Adobe XD</span>
                <span className="card-detail-badge">Photoshop</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Ihsan 💖 Khan</h5>
                </div>
                <a className="ad-btn" href="view">
                  view
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
