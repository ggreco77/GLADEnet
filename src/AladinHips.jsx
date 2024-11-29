import React, { useEffect, useRef, useState } from "react";
import useDimensions from "react-cool-dimensions";
import Select from "react-select";
import InfoFilters from "./InfoFilters";
{/* import InfoQuery from "./InfoQuery"; */}

// Funzione per formattare il valore dpdv
function formatDpdvValue(value) {
  return parseFloat(value).toExponential(4);
}

const AladinHips = (props) => {
  const ref = useRef();
  const [filterType, setFilterType] = useState("dPdV");
  const { observe, width } = useDimensions({
    useBorderBoxSize: true,
    //polyfill: ResizeObserver,
  });
  let height = width / 2 + 100;
  let dvdpThreshold = props.min_bar_prob; // init with min value

  useEffect(() => {
    let aladin;
    let bmagThreshold = props.min_bar_bmag; // init with min value
    let hips_catalog_prob = props.hips_catalog_prob;

    let myFilterFunction = function (source) {
      if (filterType === "dPdV") {
        let probVol = parseFloat(source.data["dPdV"]);
        return probVol > dvdpThreshold;
      } else if (filterType === "BMAG") {
        let bmag = parseFloat(source.data["BMAG"]);
        return bmag < bmagThreshold;
      }
    };

    window.A.init.then(() => {
      aladin = window.A.aladin("#aladin-lite-div", {
        survey: "P/DSS2/color",
        target: "180.00 0.00",
        imgFormat: "webp",
        fov: 360,
        fullScreen: false,
        cooFrame: "ICRS",
        showReticle: true,
        showCooGridControl: true,
        showSimbadPointerControl: true,
        showContextMenu: true,
        showShareControl:true,
        projection:"MOL"
      });
      // aladin.setProjection("MOL");

         // Rimuovi i cataloghi esistenti prima di aggiungere il nuovo
    aladin.removeLayers("GLADE+ in 90% volume");

      let hips = window.A.catalogFromURL(hips_catalog_prob, {
        onClick: "showTable",
        color: "orange",
        name: "GLADE+ in 90% volume",
        sourceSize: 8,
        filter: myFilterFunction,
      });
      aladin.addCatalog(hips);

      let slider = document.getElementById("slider");
      let output = document.getElementById("dvdp");

      // Initialize the initial value when the page loads
      function initializeSlider() {
        slider.value = dvdpThreshold;
        output.innerHTML = formatDpdvValue(dvdpThreshold);
      }

      initializeSlider();

      // Slider input handler
      slider.oninput = function () {
        let value = slider.value;
        if (filterType === "dPdV") {
          output.innerHTML = formatDpdvValue(value);
          dvdpThreshold = value;
        } else if (filterType === "BMAG") {
          output.innerHTML = parseFloat(value);
          bmagThreshold = value;
        }
        hips.reportChange();
      };

      if (filterType === "BMAG") {
        slider.value = props.max_bar_bmag;
        bmagThreshold = props.max_bar_bmag;
        output.innerHTML = props.max_bar_bmag;
        hips.reportChange();
        let bmag_catalog = props.hips_catalog_bmag;
        let bmagHips = window.A.catalogFromURL(bmag_catalog, {
          onClick: "showTable",
          color: "orange",
          name: "GLADE+ in 90% volume",
          sourceSize: 8,
          filter: myFilterFunction,
        });
        aladin.removeLayers()
        aladin.removeLayers("GLADE+ in 90% volume");
        aladin.addCatalog(bmagHips);
      }

      let moc = window.A.MOCFromURL(props.moc_area, {
        opacity: 0.6,
        lineWidth: 1,
        perimeter: true,
        fill: true,
        fillColor: "#87ceeb",
        color: "#87ceeb",
        adaptativeDisplay: true,
        name: "MOC 90% area",
      });
      aladin.addMOC(moc);

      let moc_red = window.A.MOCFromURL(props.moc_ext, {
        opacity: 0.5,
        lineWidth: 1,
        perimeter: true,
        fill: true,
        fillColor: "#F4364C",
        color: "#F4364C",
        adaptativeDisplay: true,
        name: "GLADE Galactic Reddening",
      });
      aladin.addMOC(moc_red);
    });
  }, [ filterType]);

  const opzioniFiltro = [
    { value: "dPdV", label: "dPdV" },
    { value: "BMAG", label: "BMAG" },
  ];

  return (
    <>
      <div
        style={{
          width: { width },
          height: { height },
          padding: "0rem 0rem 0rem 0rem",
          marginLeft: "0%",
          backgroundColor: "#282c34",
        }}
        ref={observe}
      >
        <div
          ref={ref}
          id="aladin-lite-div"
          style={{ width: width, height: height }}
        />
        <br></br>
        <div
          style={{
            width: width,
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <InfoFilters />

          <div
            style={{
              border: "1px solid white",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            <Select
              options={opzioniFiltro}
              value={opzioniFiltro.find(
                (opzione) => opzione.value === filterType
              )}
              onChange={(opzioneSelezionata) =>
                setFilterType(opzioneSelezionata.value)
              }
            />

            <input
              id="slider"
              step={
                filterType === "dPdV"
                  ? props.step_bar_prob
                  : props.step_bar_bmag
              }
              min={
                filterType === "dPdV" ? props.min_bar_prob : props.min_bar_bmag
              }
              max={
                filterType === "dPdV" ? props.max_bar_prob : props.max_bar_bmag
              }
              defaultValue={dvdpThreshold}
              type="range"
              style={{
                width: "97%",
                marginTop: "20px",
                direction: filterType === "dPdV" ? "ltr" : "rtl",
                WebkitAppearance: "none",
                background: "linear-gradient(to right, #fff, #fff) no-repeat",
                backgroundSize: "calc(100% - 12px) 100%",
                border: "none",
                outline: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            />

            <p style={{ color: "#97d4ea" }}>
              Filter galaxies with{" "}
              {filterType === "dPdV"
                ? "3D probability density per cubic Megaparsec greater than:"
                : " absolute B Magnitude brighter than:"}{" "}
              <span id="dvdp">{formatDpdvValue(dvdpThreshold)}</span>
            </p>
          </div>
        </div>
      </div>

      {/* <InfoQuery /> */}
    </>
  );
};

export default AladinHips;
