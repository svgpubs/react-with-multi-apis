import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [externalResponse, setExternalResponse] = useState("no response");
  const [api1Response, setApi1Response] = useState("no response");
  const [api2Response, setApi2Response] = useState("no response");

  const getExternalAPI = async () => {
    const result = await fetch("/api_to_external_website");
    const data = await result.json();
    setExternalResponse(JSON.stringify(data[0]));
  };

  const getLocalHostAPI1 = async () => {
    const result = await fetch("/api1");
    const data = await result.json();
    setApi1Response(JSON.stringify(data));
  };

  const getLocalHostAPI2 = async () => {
    const result = await fetch("/api2");
    const data = await result.json();
    setApi2Response(JSON.stringify(data));
  };

  useEffect(() => {
    getExternalAPI();
    getLocalHostAPI1();
    getLocalHostAPI2();
  }, []);

  return (
    <div className="App">
      <div style={{ marginTop: "3em", marginBottom: "1em" }}>
        <h2>
          Response from{" "}
          <code>
            <i>www.api.coingecko.com/api</i>
          </code>
          :
        </h2>
      </div>
      <div>{externalResponse}</div>
      <div style={{ marginTop: "3em", marginBottom: "1em" }}>
        Response from API 1: {api1Response}
      </div>
      <div style={{ marginTop: "3em", marginBottom: "1em" }}>
        Response from API 2: {api2Response}
      </div>
    </div>
  );
}

export default App;
