import React from "react";
import styled from "styled-components";
import { Podium } from "../assets/svg";


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
};
