import React, { useState, useEffect, useCallback } from "react";

function Update() {
  const [jsonData, setJsonData] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://virgo.pg.infn.it/gladenet/catalogs/gladenet.json"
      );
      const newData = await response.json();

      const jsonChanged = JSON.stringify(newData) !== JSON.stringify(jsonData);

      if (jsonChanged && !initialLoad) {
        setJsonData(newData);
        alert("Nuovi dati JSON ricevuti!");
      }

      if (initialLoad) {
        setInitialLoad(false);
      }
    } catch (error) {
      console.error("Errore durante la richiesta JSON:", error);
    }
  }, [jsonData, initialLoad]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {jsonData.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </div>
  );
}

export default Update;
