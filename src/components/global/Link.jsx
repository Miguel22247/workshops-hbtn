import React from "react";

// here we can use ReactRouter Link also
export const CustomLink = ({ url, children }) => {
  return <a href={url}>{children}</a>;
};
