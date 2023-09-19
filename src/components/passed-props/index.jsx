import React from "react";
import styled from "styled-components";
import { Input } from "../global/Input";

export const CustomInput = styled(Input)``;

export const StylingWithPropsAndStates = () => {
  return (
    <div>
      <Input defaultValue="@Hello" type="text" />
      <Input defaultValue="@hbtn" type="text" inputColor="rebeccapurple" />
    </div>
  );
};
