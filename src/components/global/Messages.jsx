import React, { useState } from "react";

export const ErrorText = () => {
  const [message, setMessage] = useState("Hola Holberton");
  return <h3>{message}</h3>;
};
