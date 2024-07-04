import React from "react";
import { FaDownload } from "react-icons/fa";

function DownloadLink({ downloadUrl, fileName }) {
  const handleDownloadClick = () => {
    if (!downloadUrl) {
      // The download link is not available, show an alert
      alert("No data available for download.");
      return;
    }

    // Extract the file name from the downloadUrl
    const urlSegments = downloadUrl.split("/");
    const extractedFileName = urlSegments[urlSegments.length - 1];

    fetch(downloadUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = extractedFileName; // Set the extracted file name
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error downloading the file:", error);
      });
  };

  return (
    <div>
      <button className="button" onClick={handleDownloadClick}>
        <FaDownload />
      </button>
    </div>
  );
}

export default DownloadLink;
