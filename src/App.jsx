import React from "react";
import styled from "styled-components";
import { Header, Subtitle, Title } from "./app-styles";
import { TopWinnerContainerWithoutStyledComponents } from "./components/card-without-styled/CardWithoutStyled";

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
      avatarURL: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=60",
    },
  ];

  return (
    <>
      <Header>
        <Title>Holberton x Blast workshop of Styled Components</Title>
      </Header>
      <Main>
        <Subtitle>Cards without Styled Components</Subtitle>
        <Wrapper>
          <TopWinnerContainerWithoutStyledComponents
            topWinnerData={topWinnerData[0]}
          />
          <TopWinnerContainerWithoutStyledComponents
            topWinnerData={topWinnerData[1]}
          />
        </Wrapper>
      </Main>

      {/* // TODO: Show how to import components from a JS file using both methods */}
    </>
  );
}

export default App;
