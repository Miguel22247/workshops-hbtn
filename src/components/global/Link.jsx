import React from "react";

// here we can use reactDom Link also
export const CustomLink = ({ url, children }) => (
  <a href={url}>{children}</a>
);
