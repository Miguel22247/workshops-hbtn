import React from "react";
import styled from "styled-components";
import Avatar from "./global/Avatar";
import { Podium } from "../assets/svg";

//! Here will go the code of each styled component

const Container = styled.div`
  outline: 1px solid red;
  width: 205px;
  height: 300px;
`



export const CardWithStyledComponents = ({topWinnersData, bgColor, mainBgColor}) => {
  const getPrize = prize => {
    if (prize) {
      const prizeValue = prize.toString().split(".");
      const prizeValueWithComma = prizeValue[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return `$${prizeValueWithComma}`;
    } else {
      return "$0";
    }
  };

  return (
    // TODO: put here your styled component
    <Container />
  );
};
