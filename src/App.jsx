import React, { useState, useEffect, useRef, useCallback } from "react";
import CookieConsent from "react-cookie-consent";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ComplePlot from "./ComplePlot";
import InfoValues from "./InfoValues";
import useDimensions from "react-cool-dimensions";
import Select from "react-select";
import { FaTable, FaBolt } from "react-icons/fa";
import AladinHips from "./AladinHips";
import RefreshContent from "./RefreshContent";
import GladenetApp from "./GladenetApp";

// Dichiarazione di appVersion
const appVersion = '0.3.3';

const dataUrl = "https://virgo.pg.infn.it/gladenet/catalogs/data/json/gladenet.json";


function App() {
  // Loading data
  const [jsonData, setJsonData] = useState([]);
  const [isDataUpdated, setIsDataUpdated] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(dataUrl);
      const newData = await response.json();

      // Verifica se il JSON è stato aggiornato confrontando la data di modifica
      const lastModified = response.headers.get("last-modified");
      const storedLastModified = localStorage.getItem("lastModified");

      if (lastModified !== storedLastModified) {
        setIsDataUpdated(true);
        localStorage.setItem("lastModified", lastModified);
      }

      setJsonData(newData);
    } catch (error) {
      console.error("Error fetching JSON:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const ref = useRef();
  const { width, height } = useDimensions(ref, {
    onResize: ({ width, height }) => {
      // Triggered whenever the size of the target is changed
    },
  });

  const [isClearable] = useState(true);
  const [isSearchable] = useState(true);
  const [captureMenuScroll] = useState(false);

  const [event, setEvent] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [analysisList, setAnalysisList] = useState([]);
  const [hips_prob, setHips_prob] = useState("");
  const [hips_bmag, setHips_bmag] = useState("");
  const [candidates, setCandidates] = useState("");
  const [coef_B, setCoef_B] = useState(null);
  const [provenance, setProvenance] = useState("");
  const [intersection, setIntersection] = useState("");
  const [area, setArea] = useState("");
  const [mth_B, setMth_B] = useState("");
  const [note, setNote] = useState("");
  const [vots, setVots] = useState(0);

  const [aladin, setAladin] = useState(null);
  const [comple, setComple] = useState(null);

  const [minbar_prob, setMinbar_prob] = useState(null);
  const [maxbar_prob, setMaxbar_prob] = useState(null);
  const [stepbar_prob, setStepbar_prob] = useState(null);

  const [minbar_bmag, setMinbar_bmag] = useState(null);
  const [maxbar_bmag, setMaxbar_bmag] = useState(null);
  const [stepbar_bmag, setStepbar_bmag] = useState(null);

  const [mocarea, setMocarea] = useState(null);
  const [mocext, setMocext] = useState(null);

  const handleEventChange = (obj) => {
    setEvent(obj);
    setAnalysisList(obj.analyses);
    setAnalysis(null);
    setAladin(null);
    setComple(null);

    setMinbar_prob(null);
    setMaxbar_prob(null);
    setStepbar_prob(null);
    setMinbar_bmag(null);
    setMaxbar_bmag(null);
    setStepbar_bmag(null);

    setMocarea(null);
    setMocext(null);
  };

  const handleAnalysisChange = (obj) => {
    setAnalysis(obj);
    setAladin(null);
    setComple(null);
  };

  useEffect(() => {
    if (event && analysis) {
      setHips_prob(`${analysis.hips_prob}`);
      setHips_bmag(`${analysis.hips_bmag}`);
      setComple(`${analysis.comple}`);
      setCandidates(`${analysis.candidates}`);
      setProvenance(`${analysis.provenance}`);
      setIntersection(`${analysis.intersection}`);
      setArea(`${analysis.area}`);

      setCoef_B(`${analysis.coef_B}`);

      setMth_B(`${analysis.mth_B}`);
      setNote(`${analysis.note}`);
      setVots(`${analysis.vots}`);

      setMinbar_prob(`${analysis.minbar_prob}`);
      setMaxbar_prob(`${analysis.maxbar_prob}`);
      setStepbar_prob(`${analysis.stepbar_prob}`);
      setMinbar_bmag(`${analysis.minbar_bmag}`);
      setMaxbar_bmag(`${analysis.maxbar_bmag}`);
      setStepbar_bmag(`${analysis.stepbar_bmag}`);

      setMocarea(`${analysis.mocarea}`);
      setMocext(`${analysis.mocext}`);

      setAladin(
        <AladinHips
          hips_catalog_prob={analysis.hips_prob}
          hips_catalog_bmag={analysis.hips_bmag}
          min_bar_prob={analysis.minbar_prob}
          max_bar_prob={analysis.maxbar_prob}
          step_bar_prob={analysis.stepbar_prob}
          min_bar_bmag={analysis.minbar_bmag}
          max_bar_bmag={analysis.maxbar_bmag}
          step_bar_bmag={analysis.stepbar_bmag}
          moc_area={analysis.mocarea}
          moc_ext={analysis.mocext}
        />
      );

      setComple(<ComplePlot comple_plot={analysis.comple} />);
    }
  }, [
    event,
    analysis,
    minbar_prob,
    maxbar_prob,
    stepbar_prob,
    hips_prob,
    hips_bmag,
    minbar_bmag,
    maxbar_bmag,
    stepbar_bmag,
    mocarea,
    mocext,
  ]);

  const [isNewVersionAvailable, setIsNewVersionAvailable] = useState(false);

  useEffect(() => {
    // Recupera la versione memorizzata localmente
    const localVersion = localStorage.getItem('appVersion');

    // Controlla se la versione memorizzata localmente è diversa dalla versione corrente
    if (localVersion !== appVersion) {
      setIsNewVersionAvailable(true);
    }
  }, []);

  const handleRefresh = () => {
    // Aggiorna la versione memorizzata localmente
    localStorage.setItem('appVersion', appVersion);

    // Ricarica la pagina per applicare le modifiche
    window.location.reload(true);
  };

  return (
    <>
 {isDataUpdated && (
  <div style={{ backgroundColor: 'yellow', padding: '10px', textAlign: 'center' }}>
    Data has been updated. &nbsp;
    {/* Last modified: {new Date(localStorage.getItem("lastModified")).toUTCString()}.*/}
    To view the latest changes, please refresh the page.&nbsp;&nbsp;
    <button onClick={() => window.location.reload(true)}> Refresh </button>
  </div>
)}

{isNewVersionAvailable && (
  <div style={{ backgroundColor: 'yellow', padding: '10px', textAlign: 'center' }}>
    A new version of the app is available. To apply the changes, please refresh the page.&nbsp;&nbsp;
    <button onClick={handleRefresh}> Refresh </button>
  </div>
)}

      <CookieConsent
        location="top"
        buttonText="I understand!!"
        cookieName="CookieConsentInfo"
        style={{ background: "#ff8c00" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={350}
        visible="byCookieValue"
      >
        This website uses strictly necessary cookies allow core website functionality. By using our site you consent to the placement of this type of cookie on your device. <br></br>{" "}
        <span style={{ fontSize: "12px" }}>
          <a href="https://home.infn.it/en/privacy">View our Privacy Policy</a>
        </span>
      </CookieConsent>

      <Navbar />

      <div
        ref={ref}
        style={{
          width: { width },
          height: { height },
          display: "center",
          justifyContent: "center",
          alignItems: "center",
          padding: "11rem 0.7rem 1rem 0.5rem",
          marginLeft: "5%",
          marginRight: "5%",
          backgroundColor: "#282c34",
          position: "flexed",
        }}
      >
        <br></br>
        <GladenetApp />

        <br></br>
        <h3 style={{ color: "white" }}>
          <FaTable /> Select catalog (GW) or candidate event (S):
        </h3>

        <Select
          placeholder="GW or S event"
          value={event}
          options={jsonData}
          onChange={handleEventChange}
          getOptionLabel={(x) => x.gw_event}
          getOptionValue={(x) => x.gw_event}
          isSearchable={isSearchable}
          captureMenuScroll={captureMenuScroll}
        />

        <h3 style={{ color: "white" }}>
          <FaBolt /> Select waveform analysis or alert type:{" "}
        </h3>

        <Select
          placeholder="Analysis or Alert"
          value={analysis}
          options={analysisList}
          onChange={handleAnalysisChange}
          getOptionLabel={(x) => x.analysis}
          getOptionValue={(x) => x.analysis}
          isClearable={isClearable}
          isSearchable={isSearchable}
          captureMenuScroll={captureMenuScroll}
          menuPlacement={"top"}
        />
        <br></br>

        <div>{comple}</div>

        <br></br>
        <div>
          <InfoValues
            coef_B={coef_B}
            mth_B={mth_B}
            candidates={candidates}
            provenance={provenance}
            intersection={intersection}
            area={area}
            note={note}
            vots={vots}
          />
        </div>

        <br></br>
        <div>{aladin}</div>

        <br></br>
        <RefreshContent />
      </div>

      <Footer />
    </>
  );
}

export default App;
