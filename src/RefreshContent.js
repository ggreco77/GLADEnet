import React from "react";
import { IoMdRefresh } from "react-icons/io";

function RefreshContent() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <button className="button-refresh" onClick={refreshPage}>
        <IoMdRefresh /> Refresh
      </button>
      <p style={{ color: "rgb(121 185 224)" }}>
        Refresh for Updates (Recommended after making multiple selections).{" "}
      </p>
    </div>
  );
}

export default RefreshContent;
