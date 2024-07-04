import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { debounce } from "./helpers";
import "./navbar.css"; // Connect CSS with Navbar

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <Router>
      <div className={`navbar ${visible ? "visible" : "hidden"}`}>
        <img
          src="https://virgo.pg.infn.it/gladenet/catalogs/logo512.png"
          height="75"
          alt="Logo Gladenet app"
          loading="lazy"
        />
        <span className="navbar-text">
          GLADEnet: Empowering Galaxy Catalogs for Multimessenger Applications
        </span>
      </div>
    </Router>
  );
};

export default Navbar;
