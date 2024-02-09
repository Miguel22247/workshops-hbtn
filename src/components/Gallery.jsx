import React, { useState } from "react";
import { sculptureList } from "../data/data";

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function nextPage() {
    setIndex(index + 1);
  }

  function prevPage() {
    index === 0 ? setIndex(0) : setIndex(index - 1);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={prevPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
      <h2>
        <span>{sculpture.name} </span>
        by <span>{sculpture.artist}</span>
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}
