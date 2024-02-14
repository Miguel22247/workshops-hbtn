import React, { useState } from "react";
import MyButtonShared from "./Buttons/MyButtonShared";

export default function SharesDataBetweenComponents() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <MyButtonShared count={count} handleClick={handleClick} />
      <MyButtonShared count={count} handleClick={handleClick} />
    </>
  );
}
