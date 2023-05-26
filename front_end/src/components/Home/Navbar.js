import React from "react";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection.scrollIntoView({ behavior: "smooth", offset: -50 });
  };

  // const scrollToFooter = () => {
  //   const footerSection = document.querySelector("#contact");
  //   footerSection.scrollIntoView({ behavior: "smooth", offset: -100 });
  // };

  return (
    <div className="top">
      <div className="navwidth">
        <div className="menubar">
          <div className="logoimgbox">
            <div className="bothlogo">
              <img className="logo" src={logo} alt="none" />
              <h1 className="name1">StyStudio</h1>
            </div>
          </div>
          <div className="navlinks">
            <div className="menuflex">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <Link to="/about" onClick={scrollToAbout}>
                    About
                  </Link>
                </li>
                <li>
                  <NavLink to="/gallery">Gallery</NavLink>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Register</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;