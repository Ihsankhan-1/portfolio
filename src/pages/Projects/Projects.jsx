import React from "react";
import "./Projects.css";
import Spin from "react-reveal/spin";

const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          here are my top 3 recent project with live links and source code
        </p>

        <Spin>
          <div className="row" id="ads">
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src="khan.jpg" alt="projects" />
                </div>

                <div className="card-image-overlay m-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>

                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Ihsan 💖 khan</h5>
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
                  <span className="card-detail-badge">IOS / ANDROID</span>
                </div>

                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Ihsan 💖 khan</h5>
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
                  <img src="khan.jpg" alt="projects" />
                </div>

                <div className="card-image-overlay m-3">
                  <span className="card-detail-badge">Figma</span>
                  <span className="card-detail-badge">Adobe XD</span>
                  <span className="card-detail-badge">Photoshop</span>
                </div>

                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Ihsan 💖 khan</h5>
                  </div>
                  <a className="ad-btn" href="view">
                    view
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Spin>
      </div>
    </>
  );
};
export default Projects;
