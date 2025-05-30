import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <>
      {/* Replaced Jump with framer-motion's animation */}
      <motion.div
        className="about"
        id="about"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src="/ik.jpg" alt="profile_pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              similique sequi velit aperiam totam quis iusto? Deleniti,
              similique id, sunt porro eos neque ab sit nihil culpa labore
              perferendis autem rem nostrum asperiores laudantium corrupti
              atque voluptatibus voluptatum officiis. Soluta alias autem,
              commodi quos suscipit modi maiores possimus! Placeat maiores
              assumenda inventore vel doloribus, sunt non. Sequi, corporis
              harum dolorem numquam, quis nesciunt atque tempore quae?
              Quibusdam consequatur quidem pariatur hic, ipsam eum beatae
              labore tempora quis fugit? Vitae, aperiam velit.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
