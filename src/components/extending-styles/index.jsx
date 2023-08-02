import React from "react";
import styled from "styled-components";
import { NormalButton } from "../global/Button";

const WhiteButton = styled(NormalButton)`
`;

export const ExtendingStyling = () => {
  const ReversedButton = (props) => (
    <NormalButton {...props} children={props.children.split("").reverse()} />
  );
  return (
    <>
      <WhiteButton as={ReversedButton}>
        Custom Button with Normal Button styles
      </WhiteButton>
    </>
  );
};
