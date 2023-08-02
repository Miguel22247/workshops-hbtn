import React from "react";
import { Header, Title } from "./app-styles";
import * as S from "./app-styles";
import { BasicComponent } from "./components/basics";
import { ExtendingStyling } from "./components/extending-styles";
import { StylingAnything } from "./components/styling-any-component";
import { StylingWithPropsAndStates } from "./components/with-props";


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
      <S.Wrapper>
        <S.Subtitle>Styling Components with Props or States</S.Subtitle>
        <StylingWithPropsAndStates />
      </S.Wrapper>
      <S.Wrapper>
        <S.Subtitle>Extending and Custom Styled Components</S.Subtitle>
        <ExtendingStyling />
      </S.Wrapper>
      <S.Wrapper>
        <S.Subtitle>Styling Any Components</S.Subtitle>
        <StylingAnything />
      </S.Wrapper>

      {/* // TODO: Show how to import components from a JS file using both methods */}
    </>
  );
}

export default App;
