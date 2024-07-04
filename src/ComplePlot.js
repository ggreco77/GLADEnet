import React, { useState } from "react";
import { motion } from "framer-motion";

const ComplePlot = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  const plotWidth = isExpanded ? "100%" : "50%"; //Setting size expanded

  return (
    <motion.div
      onClick={toggleExpand}
      style={{
        cursor: "pointer",
        width: plotWidth,
        maxWidth: "800px", 
        margin: "0 auto", 
        backgroundColor: "white",
      }}
      initial={{ opacity: 0, width: "50%" }} 
      animate={{ opacity: 1, width: plotWidth }} 
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {isExpanded ? (
        <motion.img
          src={props.comple_plot}
          style={{ width: "100%", height: "auto", backgroundColor: "white" }}
          alt="Completeness"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      ) : (
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#888" }}>Click to expand</p>
          <img
            src={props.comple_plot}
            style={{ width: "100%", height: "auto" }}
            alt="Completeness"
          />
        </div>
      )}
    </motion.div>
  );
};

export default ComplePlot;
