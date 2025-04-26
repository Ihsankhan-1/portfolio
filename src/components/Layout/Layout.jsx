import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import "./Layout.css";
import Menus from "../Menus/Menus";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
const Layout = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  //change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>

          <Menus toggle={toggle} />
        </div>

        <div className="container">
          <Home />
          {children}
        </div>
      </div>
    </>
  );
};
export default Layout;
