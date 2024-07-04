import React from "react";

const LibBased = () => {
  return (
    <div>
      <p>
        GLADENet is developed using ReactJS. You can learn more about ReactJS at{" "}
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          https://react.dev/
        </a>
      </p>
      <p>
        To obtain the galaxies within the 90% credible volume, we utilize the{" "}
        <code>crossmatch</code> function provided by the{" "}
        <code>ligo.skymap</code> library. You can find more information about
        the <code>ligo.skymap</code> library at{" "}
        <a
          href="https://lscsoft.docs.ligo.org/ligo.skymap/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://lscsoft.docs.ligo.org/ligo.skymap/
        </a>
        .
      </p>
      
      <p>
        GLADENet is powered by the Virtual Observatory (VO) standard and tools
        supported by IVOA (International Virtual Observatory Alliance). You can
        learn more about the IVOA at{" "}
        <a
          href="http://www.ivoa.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          http://www.ivoa.net/
        </a>
      </p>
    </div>
  );
};

export default LibBased;
