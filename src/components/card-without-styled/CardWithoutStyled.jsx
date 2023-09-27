import React from "react";
import Avatar from "../global/Avatar";
import "./styles.css";
import { Podium } from "../../assets/svg";

export const TopWinnerContainerWithoutStyledComponents = ({ topWinnerData }) => {
  const prize = topWinnerData.poolsPrize
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
    <div className="container">
      <div className="data-container">
        <div className="profile-container">
          <div className="avatar-container">
            <Avatar size="42px" src={topWinnerData.avatarURL}/>
          </div>
          <div className="name-container">
            <p className="profile-name">{topWinnerData.nickname}</p>
            <span className="total-earned">{getPrize(prize)}</span>
          </div>
        </div>
        <div className="earning-top">
          <Podium style={{ width: "146px", height: "185px" }}/>
        </div>
      </div>
    </div>
  );
}
