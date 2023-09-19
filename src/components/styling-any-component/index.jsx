import React from "react";
import styled from "styled-components";
import { CustomLink } from "../global/Link";

const StyledLink = styled(CustomLink)``;

export const StylingAnything = () => {
  return (
    <div>
      <CustomLink>Unstyled, boring Link</CustomLink>
      <br />
      <StyledLink>Styled, exciting Link</StyledLink>
    </div>
  );
};
