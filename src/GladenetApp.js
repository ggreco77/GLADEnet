import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NoteGladenet from "./NoteGladenet";
import EventSelection from "./EventSelection";
import LibBased from "./LibBased";
import Applications from "./Applications";
import PlotCompleteness from "./PlotCompleteness";
import CompletenessCoef from "./CompletenessCoef";

const GladenetApp = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [buttonWidth, setButtonWidth] = useState("auto");

  const handleTabClick = (tabName) => {
    if (activeTab === tabName) {
      setActiveTab(null);
    } else {
      setActiveTab(tabName);
    }
  };

  useEffect(() => {
    // Setting width button
    const calculateButtonWidth = () => {
      const buttons = document.querySelectorAll(".tab-button");
      let maxWidth = 0;

      buttons.forEach((button) => {
        const buttonWidth = button.getBoundingClientRect().width;
        maxWidth = Math.max(maxWidth, buttonWidth);
      });

      return `${maxWidth}px`;
    };

    setButtonWidth(calculateButtonWidth());

    window.addEventListener("resize", () => {
      setButtonWidth(calculateButtonWidth());
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  const buttonStyle = {
    margin: "0",
    borderRadius: "0",
    fontSize: "1rem",
    padding: "8px 8px",
    width: buttonWidth, // dynamic lenght
  };

  const activeButtonStyle = {
    ...buttonStyle,
    background: "#bc5925",
  };

  const tabVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5, // animations
        ease: "easeInOut",
      },
    },
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const tabCardStyle = {
    background: "rgba(200, 200, 200, 0.2)",
    padding: "16px",
    borderRadius: "8px",
    margin: "16px",
  };

  return (
    <div style={{ color: "#97d4ea", textAlign: "center" }}>
      <p style={{ marginBottom: "20px" }}>
        GLADEnet is a practical web application designed to facilitate the
        interactive visualization and filtering of galaxies from the{" "}
        <a
          href="https://academic.oup.com/mnras/article/514/1/1403/6595338"
          target="_blank"
          rel="noopener noreferrer"
        >
          GLADE+
        </a>{" "}
        catalogue and enables users to evaluate the corresponding galaxy-catalog
        completeness. It focuses on galaxies located within the 90% credibility
        volume of gravitational-wave sky localizations, originating from Compact
        Binary Coalescence (CBC) events reported by the collaborative efforts of {""}
        <a
          href="https://observing.docs.ligo.org/plan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LIGO, Virgo, and KAGRA collaboration
        </a> {""}
        (LVK).
      </p>
      <NoteGladenet />
      <div
        className="button-container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <motion.div
          className="tab-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className={`button tab-button ${
              activeTab === "Event Selection" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Event Selection")}
            style={
              activeTab === "Event Selection" ? activeButtonStyle : buttonStyle
            }
          >
            Event Selection
          </button>
          <button
            className={`button tab-button ${
              activeTab === "Completeness" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Completeness")}
            style={
              activeTab === "Completeness" ? activeButtonStyle : buttonStyle
            }
          >
            Completeness
          </button>
          <button
            className={`button tab-button ${
              activeTab === "Completeness Plot" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Completeness Plot")}
            style={
              activeTab === "Completeness Plot"
                ? activeButtonStyle
                : buttonStyle
            }
          >
            Completeness Plot
          </button>
          <button
            className={`button tab-button ${
              activeTab === "Applications" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Applications")}
            style={
              activeTab === "Applications" ? activeButtonStyle : buttonStyle
            }
          >
            Applications
          </button>
          <button
            className={`button tab-button ${
              activeTab === "Libraries" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Libraries")}
            style={activeTab === "Libraries" ? activeButtonStyle : buttonStyle}
          >
            Libraries
          </button>
        </motion.div>
      </div>
      <AnimatePresence>
        {activeTab && (
          <motion.div
            className="tab-content"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={tabVariants}
          >
            <div style={tabCardStyle}>
              <motion.h3
                style={{ color: "#e6763c", marginTop: "0", padding: "8px 0" }}
                variants={fadeVariants}
              >
                {activeTab}
              </motion.h3>
              {activeTab === "Event Selection" && (
                <motion.div
                  className="tab-content-inner"
                  variants={fadeVariants}
                >
                  <EventSelection />
                </motion.div>
              )}

              {activeTab === "Completeness" && (
                <motion.div>
                  <CompletenessCoef />
                </motion.div>
              )}

              {activeTab === "Completeness Plot" && (
                <motion.div>
                  <PlotCompleteness />
                </motion.div>
              )}

              {activeTab === "Applications" && (
                <motion.div>
                  <Applications />
                </motion.div>
              )}

              {activeTab === "Libraries" && (
                <motion.div
                  className="tab-content-inner"
                  variants={fadeVariants}
                >
                  <LibBased />
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GladenetApp;
