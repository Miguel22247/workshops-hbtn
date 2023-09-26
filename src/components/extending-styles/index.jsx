import React from "react";
import styled from "styled-components";
import { NormalButton } from "../global/Button";

const TomatoButton = styled(NormalButton)``;

export const ExtendingStyling = () => {
  const ReversedButton = props => <NormalButton {...props} children={props.children.split('').reverse()} />

  return (
  <div>
    <NormalButton>Normal Button</NormalButton>
    <NormalButton as={ReversedButton}>a Reversed Button</NormalButton>
    <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
  </div>
  );
};
