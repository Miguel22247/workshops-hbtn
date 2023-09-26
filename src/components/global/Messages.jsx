import React, { useState } from "react";

export default function ErrorText () {
  const [errorMessage, setErrorMessage] = useState("Hola Holberton");
  return (
    <h3>{errorMessage}</h3>
  );
};