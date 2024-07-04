import React from "react";

const PlotCompleteness = () => {
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className="tab-content-inner" variants={fadeVariants}>
      <p>
        For enhanced data visualization, we create a plot that highlights the
        completeness within the credible localization volumes of a
        gravitational-wave event. This completeness plot is presented within a
        dedicated resizable box upon selection from the dropdown menu.
      </p>
      <h4>Plot Details:</h4>
      <ul>
        <li>
          Black dots represent the distribution of GLADE+ galaxies in the
          B-photometric band within the 90% credible volume.
        </li>
        <li>
          The expected Schechter function, calculated in Brozzetti et al. (A&A
          submitted), is displayed as a green dashed-dotted line.
        </li>
        <li>
          Parameters from the literature in{" "}
          <a
            href="https://iopscience.iop.org/article/10.3847/0004-637X/820/2/136"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gehrels et al. 2016
          </a>
          , are represented by blue dots.
        </li>
      </ul>

      <h4>Optimal Histogram Bin Width:</h4>
      <p>
        To ensure accurate representation, we determine the optimal histogram
        bin width using{" "}
        <a
          href="https://arxiv.org/abs/physics/0605197"
          target="_blank"
          rel="noopener noreferrer"
        >
          Knuth's rule
        </a>
        .
      </p>
      <p>
        Knuth's rule is a Bayesian method implemented in the{" "}
        <a
          href="https://docs.astropy.org/en/stable/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Astropy {""}
        </a>
        library (
        <a
          href="https://docs.astropy.org/en/stable/api/astropy.stats.knuth_bin_width.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          knuth_bin_width
        </a>
        ), which helps in choosing the most suitable bin width for the histogram
        by considering a fixed-width approach.
      </p>
    </div>
  );
};

export default PlotCompleteness;
