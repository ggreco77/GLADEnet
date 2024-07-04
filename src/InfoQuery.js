import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

const InfoQuery = (props) => {
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
        <FaInfoCircle /> Info query GW Treasure Map
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
            <h3>Info Query GW Treasure Map </h3>
            <p>

              The function is able to query the footprints stored in the Gravitational Wave Treasure Map
              archive - https://treasuremap.space/ - . 
              The footprints are encoded usign the Multi Order Coverage methods.

            </p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoQuery;
