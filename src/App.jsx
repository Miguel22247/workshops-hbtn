import React from "react";
import styled from "styled-components";
import { Header, Subtitle, Title } from "./app-styles";
import { TopWinnerContainerWithoutStyledComponents } from "./components/card-without-styled/CardWithoutStyled";
import { CardWithStyledComponents } from "./components/CardWithStyled";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

function App() {
  const topWinnerData = [
    {
      nickname: "Holberton",
      poolsPrize: "1337",
      avatarURL: "",
    },
    {
      nickname: "Blast.gg",
      poolsPrize: "1000.1822189892",
      avatarURL:
        "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=60",
    },
  ];

  const setTopWinnerBgColor = (index) => {
    const firstGradient =
      "linear-gradient(180deg, #2FAA94 0%, rgba(63, 47, 170, 0) 100%)";
    const secondGradient =
      "linear-gradient(180deg, #8C54FD 0%, rgba(63, 47, 170, 0) 100%)";
    const thirdGradient =
      "linear-gradient(180deg, #5487F4 0%, rgba(63, 47, 170, 0) 100%)";
    const fourthGradient =
      "linear-gradient(180deg, #3F2FAA 0%, rgba(63, 47, 170, 0) 100%)";
    const fifthGradient =
      "linear-gradient(180deg, #CB49B5 0%, rgba(63, 47, 170, 0) 100%)";
    const gradientArray = [
      firstGradient,
      secondGradient,
      thirdGradient,
      fourthGradient,
      fifthGradient,
    ];
    // now repeat for each item of TopWinnersList component the gradient color set above it must work for N top winners since can be more than just five topWinners
    switch (index) {
      case 0:
        return firstGradient;
      case 1:
        return secondGradient;
      case 2:
        return thirdGradient;
      case 3:
        return fourthGradient;
      case 4:
        return fifthGradient;
      default:
        return gradientArray[index % 5];
    }
  };

  const setTopWinnerMainColor = (index) => {
    const firstMainColor =
      "linear-gradient(to bottom, rgba(63, 47, 170, 0.8) 0%, rgba(63, 47, 170, 0.8) 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)";
    const secondMainColor =
      "linear-gradient(to bottom, rgba(63, 47, 170, 0.8) 0%, rgba(63, 47, 170, 0.8) 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)";
    const thirdMainColor =
      "linear-gradient(to bottom, rgba(63, 47, 170, 0.8) 0%, rgba(63, 47, 170, 0.8) 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)";
    const fourthMainColor =
      "linear-gradient(to bottom, rgba(63, 47, 170, 0.8) 0%, rgba(63, 47, 170, 0.8) 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)";
    const fifthMainColor =
      "linear-gradient(to bottom, rgba(63, 47, 170, 0.8) 0%, rgba(63, 47, 170, 0.8) 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)";
    const mainColorArray = [
      firstMainColor,
      secondMainColor,
      thirdMainColor,
      fourthMainColor,
      fifthMainColor,
    ];
    switch (index) {
      case 0:
        return firstMainColor;
      case 1:
        return secondMainColor;
      case 2:
        return thirdMainColor;
      case 3:
        return fourthMainColor;
      case 4:
        return fifthMainColor;
      default:
        return mainColorArray[index % 5];
    }
  };

  return (
    <>
      <Header>
        <Title>Holberton x Blast workshop of Styled Components</Title>
      </Header>
      <Main>
        <Subtitle>Cards without Styled Components</Subtitle>
        <Wrapper>
          {topWinnerData.map((topWinner, index) => {
            return (
              <TopWinnerContainerWithoutStyledComponents
                topWinnerData={topWinner}
                bgColor={setTopWinnerBgColor(index)}
                mainBgColor={setTopWinnerMainColor(index)}
              />
            );
          })}
        </Wrapper>
        <Wrapper>
          {topWinnerData.map((topWinner, index) => {
            return (
              <CardWithStyledComponents
                topWinnerData={topWinner}
                bgColor={setTopWinnerBgColor(index)}
                mainBgColor={setTopWinnerMainColor(index)}
              />
            );
          })}
        </Wrapper>
      </Main>

      {/* // TODO: Show how to import components from a JS file using both methods */}
    </>
  );
}

export default App;
