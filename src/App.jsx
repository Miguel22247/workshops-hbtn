import React from "react";
import { Header, Title } from "./app-styles";
import * as S from "./app-styles";
import { BasicComponent } from "./components/basics";

function App() {
  return (
    <>
      <Header>
        <Title>Holberton x Blast workshop of Styled Components</Title>
      </Header>
      <S.Wrapper>
        <S.Subtitle>Basics of Styled Components</S.Subtitle>
        <BasicComponent />
      </S.Wrapper>
      {/* // TODO: Show how to import components from a JS file using both methods */}
    </>
  );
}

export default App;
