import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaHistory,
  FaFileAlt,
  FaGraduationCap,
  FaEnvelope,
  FaWrench,
  FaExclamationTriangle,
  FaCalendarAlt,
} from "react-icons/fa";

const Footer = () => (
  <div className="footer">
    <p>
      <FaExclamationTriangle /> The app is under testing, and the results should
      be used with caution <FaExclamationTriangle />
    </p>
    <p>
      GLADEnet v0.3.3. Last updated on April 26, 2023 <FaCalendarAlt />
      {}{" "}
    </p>
    <p>
      <a
        href="https://virgo.pg.infn.it/gladenet/catalogs/changelog.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaHistory /> Changelog
      </a>
    </p>

    <div className="footer-content" style={{ backgroundColor: "#0e5d0e" }}>
      <div className="footer-column" style={{ textAlign: "center" }}>
        <h3>
          {" "}
          <FaGithub /> Collaborative GitHub Project{" "}
        </h3>
        <p>
          This project is hosted on GitHub, and you are welcome to contribute.
          Feel free to explore the{" "}
          <a
            href="https://github.com/ggreco77/GLADEnet"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repository
          </a>{" "}
          for reporting bugs or sharing your ideas.
        </p>
      </div>
      <div className="footer-column" style={{ textAlign: "center" }}>
        <h3>
          {" "}
          <FaFileAlt /> Paper Reference
        </h3>
        <p>
          {" "}
          GLADEnet is described in the article published in A&A. 
           <a href="https://www.aanda.org/articles/aa/abs/2024/04/aa48073-23/aa48073-23.html"
            target="_blank" 
            rel="noopener noreferrer"> GLADEnet: A progressive web app for multi-messenger cosmology and 
            electromagnetic follow-ups of gravitational-wave sources.</a>
        </p>
      </div>
      <div className="footer-column" style={{ textAlign: "center" }}>
        <h3>
          {" "}
          <FaGraduationCap /> Tutorials
        </h3>
        <div>
          <p>
            GLADEnet tutorials will be published soon <FaWrench />
          </p>
        </div>{" "}
      </div>
    </div>

    {/* Add the graphics/icons within this section */}
    <div
      className="footer-graphics"
      style={{
        backgroundColor: "#ECECEC",
        padding: "10px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Add your graphics/icons here */}
      <img
        src="https://virgo.pg.infn.it/maps/ima/INFN_Perugia_logo.png"
        alt="INFN Perugia Logo"
        style={{ maxWidth: "15%", height: "auto" }}
      />
      <img
        src="https://virgo.pg.infn.it/maps/ima/Unipg_marchio.png"
        alt="University Perugia Logo"
        style={{ maxWidth: "18%", height: "auto" }}
      />
    </div>

    <div style={{ backgroundColor: "#232b2b", padding: "10px 0" }}>
      <FaEnvelope /> Contacts:{" "}
      <a href="mailto:gladenet.app@gmail.com">GLADEnet email.</a>
      <p style={{ fontSize: "smaller", color: "lightgray" }}>
        The research leading to these results has received funding from the
        European Union’s Horizon 2020 Programme under the AHEAD2020 project
        (grant agreement n. 871158).
      </p>
    </div>
  </div>
);

export default Footer;
