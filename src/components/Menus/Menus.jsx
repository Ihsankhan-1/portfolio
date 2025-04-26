import React from "react";
import "./Menus.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcBusinessContact,
} from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          {/* Profile Pic Animation */}
          <motion.div
            className="navbar-profile-pic"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <img src="/ik.jpg" alt="profile pic" />
          </motion.div>

          {/* Menu Links Animation */}
          <motion.div
            className="nav-items"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="nav-item">
              <div className="nav-link">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcHome /> Home
                </Link>
              </div>
              <div className="nav-link">
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcAbout /> About
                </Link>
              </div>
              <div className="nav-link">
                <Link to="eduction" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcReadingEbook /> Eduction
                </Link>
              </div>
              <div className="nav-link">
                <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBiotech /> Tech Stack
                </Link>
              </div>
              <div className="nav-link">
                <Link to="project" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector /> Projects
                </Link>
              </div>
              <div className="nav-link">
                <Link to="workexp" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcPortraitMode /> Work Experience
                </Link>
              </div>
              <div className="nav-link">
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBusinessContact /> Contact
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcHome />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcAbout />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="eduction" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcReadingEbook />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBiotech />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="project" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="workexp" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcPortraitMode />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBusinessContact />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
