import React from "react";
import Gallery from "./components/Gallery";
import SharesDataBetweenComponents from "./components/SharesData";
import CountsSeparately from "./components/CountsSeparately";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <h2>Counters that updates separately</h2>
        <CountsSeparately />
      </div>
      <div>
        <h2>Counters that update together</h2>
        <SharesDataBetweenComponents />
      </div>
      <div>
        <h2>Final example</h2>
        <Gallery />
      </div>
    </div>
  );
}

export default App;
