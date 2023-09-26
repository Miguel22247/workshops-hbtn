import React from "react";
import styled from "styled-components";
import { Header, Title } from "./app-styles";
import * as S from "./app-styles";
import { BasicComponent } from "./components/basics";
import { ExtendingStyling } from "./components/extending-styles";
import { StylingAnything } from "./components/styling-any-component";
import { StylingWithPropsAndStates } from "./components/passed-props";
import { AnimationsShow } from "./components/animations/Rotation";
import { ErrorText } from "./components/global/Messages";
import { PropsExample } from "./components/global/PropsExample";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

function App() {
  return (
    <>
      <Header>
        <Title>Holberton x Blast workshop of Styled Components</Title>
      </Header>
      <Main>
        <S.Wrapper>
          <S.Subtitle>Basics of Styled Components</S.Subtitle>
          <BasicComponent />
        </S.Wrapper>
        <S.Wrapper>
          <S.Subtitle>Styling Components with Props or States</S.Subtitle>
        </S.Wrapper>
        <StylingWithPropsAndStates />
        <S.Wrapper>
          <S.Subtitle>Extending and Custom Styled Components</S.Subtitle>
          <ExtendingStyling />
        </S.Wrapper>
        <S.Wrapper>
          <S.Subtitle>Styling Any Components</S.Subtitle>
          <StylingAnything />
        </S.Wrapper>
        <S.Wrapper>
          <S.Subtitle>Passed Props</S.Subtitle>
          <StylingWithPropsAndStates />
        </S.Wrapper>
        <S.Wrapper>
          <S.Subtitle>Animations</S.Subtitle>
          <AnimationsShow />
        </S.Wrapper>
        <S.Wrapper>
          <ErrorText />
          <PropsExample />
        </S.Wrapper>
      </Main>

      {/* // TODO: Show how to import components from a JS file using both methods */}
    </>
  );
}

export default App;
