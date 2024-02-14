import React from "react";

export default function MyButtonShared({ count, handleClick }) {
  return <button onClick={handleClick}>Clicked {count} times</button>;
}
