import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Educations/Education";
import WorkExp from "./pages/workExp/WorkExp";
import Contact from "./pages/Contact/Contact";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./components/context/ThemeContext";
import { motion } from "framer-motion"; // ✅ framer-motion import
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [theme] = useTheme();

  return (
    <>
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>

        <div className="footer mb-3 ms-3">
          <motion.h4
            className="text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            Made With 😍 Ihsankhan &copy; 2024
          </motion.h4>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
