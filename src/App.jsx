import React from "react";
import styled from "styled-components";
import { Header, Title } from "./app-styles";

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
      </Main>

      {/* // TODO: Show how to import components from a JS file using both methods */}
    </>
  );
}

export default App;
