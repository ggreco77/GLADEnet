import React, { useState } from "react";
import DownloadLink from "./DownloadLink";
import { FaInfoCircle, FaRegStickyNote } from "react-icons/fa";

const InfoValues = (props) => {
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
        }}
      >
        <FaInfoCircle /> Info Table
      </button>
      <div
        style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}
      >
        <table
          style={{
            borderCollapse: "collapse",
            width: "90%",
            border: "1px solid white",
            padding: "10px",
            fontSize: "14px", // default font size
            '@media screen and (max-width: 768px)': {
              width: "100%", // full width for smaller screens
              fontSize: "12px" // smaller font size for smaller screens
            }
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid white",
                  padding: "10px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Params
              </th>
              <th
                style={{
                  border: "1px solid white",
                  padding: "10px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                metric: "Completeness - B band",
                value: props.coef_B !== null ? parseFloat(props.coef_B).toExponential(1).toString() : "",
              },
              {
                metric: "Apparent mag. threshold - B band",
                value: props.mth_B,
              },
              {
                metric: "Host Candidates (from B band)",
                value: props.candidates,
              },
              {
                metric: "GW sky area",
                value: props.area,
              },

              {
                metric: "GW sky area ∩ reddening map",
                value: props.intersection,
              },
              {
                metric: "Skymap Provenance",
                value: (
                  <a
                    href={props.provenance}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {props.provenance}
                  </a>
                ),
              },
            ].map((entry, index) => (
              <tr
                key={index}
                style={{
                  background: index % 2 === 0 ? "#f5f5f5" : "#ffffff",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <td
                  style={{
                    border: "1px solid white",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {entry.metric}
                </td>
                <td
                  style={{
                    border: "1px solid white",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {entry.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{
          marginTop: "10px",
          marginLeft: "5%",
          marginRight: "10%",
          justifyContent: "center",
          backgroundColor: "rgb(255 253 252 / 70%)",
          color: "black",
          width: "90%",
          textAlign: "center",
          fontStyle: "italic",
          padding: "10px",
          wordWrap: "break-word",
        }}
      >
        <FaRegStickyNote /> Note: {props.note}.{" "}
        <DownloadLink downloadUrl={props.vots} fileName={props.vots} />
      </div>

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
            <h2>Info Values</h2>
            <p>
              <ul>
                <li>
                  {" "}
                  <b>Completeness:</b> the completeness within the 90% credible
                  volume in B-band.{" "}
                </li>

                <li>
                  <b>Apparent mag. threshold:</b> apparent magnitude threshold
                  within the 90% credible volume in B-band.{" "}
                </li>

                <li>
                  <b>Host Candidates:</b> potential host galaxies of GW source.{" "}
                </li>

                <li>
                  <b>GW sky area:</b> gravitational-wave sky-localization area 
                   encoded with the MOC (Multi Order Coverage) data structure. The MOC area represents 
                   the 90% credible region and is shown in blue in the Aladin Lite display.
                </li>

                <li>
                  <b>GW sky area ∩ reddening map:</b> intersection area between
                  the extinction map and the GW sky localization area (90% credible region). They are
                  shown in red and blue in the Aladin Lite display, respectively.
                </li>

                <li>
                  <b>Event Provenance:</b> resource from where the skymap was
                  taken.
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

export default InfoValues;
