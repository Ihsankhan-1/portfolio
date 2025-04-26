import React from "react";
import { useTheme } from "../../components/context/ThemeContext";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Home = () => {
  const [theme, setTheme] = useTheme();
  // Handle theme toggle
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div>
        <div className="container-fluid home-container" id="home">
          <div className="theme-btn" onClick={handleTheme}>
            {theme === "light" ? (
              <BsFillMoonStarsFill size={30} />
            ) : (
              <BsFillSunFill size={30} />
            )}
          </div>
          <div className="container home-content">
            {/* Replacing Fade with framer-motion */}
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Hi 👋 I'm a{" "}
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer!",
                    "Mern Stack Developer!",
                    "React Native Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.h1>

            <motion.div
              className="home-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=03089093675"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a
                className="btn btn-resume"
                href={Resume}
                download="Resume.pdf"
              >
                My Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
