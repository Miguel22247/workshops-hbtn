import React from "react";
import styled from "styled-components";
import { NormalButton } from "../global/Button";
import { CustomLink } from "../global/Link";

const StyledLink = styled(CustomLink)``;

export const ExtendingStyling = () => {
  const ReversedButton = (props) => (
    <NormalButton {...props} children={props.children.split("").reverse()} />
  );
  return (
    <>
      <CustomLink url="https://styled-components.com/docs/basics#styling-any-component">Unstyled boring Link</CustomLink>
      <br />
      <StyledLink url="https://styled-components.com/docs/basics#styling-any-component">Styled Link</StyledLink>
    </>
  );
};
