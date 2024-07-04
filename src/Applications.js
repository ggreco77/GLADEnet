import React from "react";

const Applications = () => {
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="tab-content-inner" variants={fadeVariants}>
      <ol>
        <li>
          <p>
            <strong>Choice of the Observational Strategy:</strong>
          </p>
          <p>
            GLADEnet will assist in selecting the observational strategy based
            on galaxy completeness. For instance, it may recommend covering the
            entire sky region with wide-field telescopes when the completeness
            coefficient is low or targeting galaxies with smaller fields of view
            telescopes when the completeness coefficient is high.
          </p>
        </li>
        <li>
          <p>
            <strong>
              Promotion of Punctual Surveys and Maximization of Follow-up
              Campaigns:
            </strong>
          </p>
          <p>
            GLADEnet can identify sky regions that are currently less observed
            or incomplete and suggest them as targets for survey observations to
            increase catalogue completeness.
          </p>
        </li>
        <li>
          <p>
            <strong>Uploading New Data:</strong>
          </p>
          <p>
            After observation campaigns to increase catalogue completeness, the
            new data can be uploaded directly to the VizieR data server. The
            VizieR catalogue upload service{" "}
            <a
              href="https://cdsarc.cds.unistra.fr/vizier.submit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VizieR catalogue upload service
            </a>{" "}
            is dedicated to this purpose. The Centre de Données astronomiques de
            Strasbourg (CDS) provides a full description of the standard
            conventions used, available at{" "}
            <a
              href="http://cds.u-strasbg.fr/doc/catstd.htx"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://cds.u-strasbg.fr/doc/catstd.htx
            </a>
            .
          </p>
        </li>

        <li>
          <p>
            <strong>Search Efficiency Estimates:</strong>
          </p>
          <p>
            The completeness evaluation by GLADEnet can be used to correctly
            estimate the probability that observed galaxies are the actual hosts
            of the GW source.
          </p>
        </li>
        <li>
          <p>
            <strong>Support the Hubble Constant Estimate:</strong>
          </p>
          <p>
            GLADEnet provides an appropriate evaluation of completeness, crucial
            for accurately evaluating the Hubble constant using dark-syrens.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Applications;
