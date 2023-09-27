import React from "react";
import styled from "styled-components";
import Avatar from "./global/Avatar";
import { Podium } from "../assets/svg";

//! Here will go the code of each styled component
const Container = styled.div`
  width: 205px;
  height: 300px;
  border-radius: 10px;
  background: ${(props) => props.bgColor}, #201366;
  background-size: 100% 184px;
  background-repeat: no-repeat;
  display: flex;
  transition: all 0.3s ease-in-out;
  &:hover {
    margin-top: -5px;
    cursor: pointer;
    box-shadow: 0px 12px 30px 0px rgba(26, 14, 86, 1);
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

const DataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

const TotalEarned = styled.h1`
  font-size: 36px;
  font-weight: bold;
  line-height: 43px;
  text-align: center;
  color: #ffffff;
`;

const EarningTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 9px;
`;

const AvatarContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.mainBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileName = styled.p`
  margin-top: 5px;
  font-family: Gotham;
  font-size: 16px;
  font-weight: 325;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardWithStyledComponents = ({
  topWinnerData,
  bgColor,
  mainBgColor,
}) => {
  const prize = topWinnerData?.poolsPrize;
  const getPrize = (prize) => {
    if (prize) {
      const prizeValue = prize.toString().split(".");
      const prizeValueWithComma = prizeValue[0].replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      );
      return `$${prizeValueWithComma}`;
    } else {
      return "$0";
    }
  };

  return (
    // TODO: put here your styled component
    <Container bgColor={bgColor}>
      <DataContainer>
        <ProfileContainer>
          <AvatarContainer mainBgColor={mainBgColor}>
            <Avatar src={topWinnerData.avatarURL} size="42px" />
          </AvatarContainer>
          <NameContainer>
          <ProfileName>{topWinnerData.nickname}</ProfileName>
          <TotalEarned>{getPrize(prize)}</TotalEarned>
          </NameContainer>
        </ProfileContainer>
        <EarningTop>
          <Podium width="146px" height="125px" />
        </EarningTop>
      </DataContainer>
    </Container>
  );
};
