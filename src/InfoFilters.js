import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

const InfoFilters = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  return (
    <div>
      <button
        className="button"
        onClick={toggleModal}
        style={{
          marginRight: "10px",
          border: "none",
          borderRadius: "4px",
          padding: "8px 16px 8px 16px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        <FaInfoCircle /> Info Filters
      </button>

      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{ background: "white", padding: "20px", maxWidth: "400px" }}
          >
            <h3>Info Filters </h3>
            <p>
              <ul>
                <li>
                  <strong>dPdV:</strong> 3D probability density per cubic
                  Megaparsec at the positions of each target.
                </li>
                <li>
                  <strong>BMAG: </strong> absolute Magnitude in B band.
                </li>
              </ul>
            </p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoFilters;
