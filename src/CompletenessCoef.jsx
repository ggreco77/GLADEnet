import React from "react";

const CompletenessCoef = () => {
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="tab-content-inner" variants={fadeVariants}>
      <div className="explanation">
        <p>
          The Completeness coefficient <strong>𝒞</strong> is determined as the
          ratio of the total luminosity of galaxies inside the credible volume
          of a gravitational-wave sky localization, 𝓁<sub>GW x GLADE+</sub>, to
          the total luminosity expected based on the Schechter function, 𝓁 = j
          <sub>L</sub> x V<sub>GW</sub>, where j<sub>L</sub> is the value
          obtained by integrating the Schechter function over luminosity.
        </p>
        <p>
          Here, we computed the luminosity density (with the integral bounds x
          <sub>1</sub> and <sup>∞</sup>) using the following equation:
        </p>
        <p>
          j<sub>L</sub> = ∫
          <sub>
            x<sub>1</sub>
          </sub>
          <sup>∞</sup> LΦ dL = Φ* L* Γ(α+2, x<sub>1</sub>),
        </p>
        <p>
          where Γ(α+2, x<sub>1</sub>) is the incomplete gamma function.
        </p>
        <p>The Completeness coefficient, 𝒞, is evaluated as:</p>
        <p>
          𝒞 = 𝓁<sub>GW x GLADE+</sub> / 𝓁
        </p>
      </div>
    </div>
  );
};

export default CompletenessCoef;
