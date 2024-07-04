import React from "react";

const EventSelection = () => {
  return (
    <div>
      <p>
        GLADEnet includes a dropdown menu for event selections, which consist of
        two options.
      </p>
      <p>
        If the chosen event corresponds to one from the Gravitational-Wave
        Transient Catalogs (GWTCs), labeled as <strong>GW</strong>, you can
        further select the waveform family used. In the case of a candidate
        event sent in low latency, they are denoted as <strong>S</strong>, and
        the user can choose the sequence of LVK alerts sent for that specific
        event.
      </p>
      <p>
        The waveform banks used in the post-processing analysis are specified in
        the publications related to the Gravitational-Wave Transient Catalogs.
        You can find more information in{" "}
        <a
          href="https://gwosc.org/GWTC-1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GWTC 1
        </a>{" "}
        and{" "}
        <a
          href="https://gwosc.org/GWTC-2.1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GWTC 2.1
        </a>
        .
      </p>
      <p>
        The timeline of alerts issued for the gravitational-wave event
        candidates and the corresponding information on the source parameters
        released at different times with respect to the merger are fully
        described in the {" "}
        <a
          href="https://emfollow.docs.ligo.org/userguide/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IGWN Public Alerts User Guide
        </a>
        , specifically in the {" "}
        <a
          href="https://emfollow.docs.ligo.org/userguide/analysis/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data Analysis section
        </a>
        .
      </p>
    </div>
  );
};

export default EventSelection;
