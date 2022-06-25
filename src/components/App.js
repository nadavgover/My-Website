import React from "react";
import styled, {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme} from "../design-system/themes/theme";
import Hero from "./hero/Hero";
import About from "./about/About";
import Projects from "./projects/Projects";

const Container = styled.div`
  background-color: ${({theme}) => theme.palette.background};
  color: ${({theme}) => theme.palette.color};
`;

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Hero />
        <About />
        <Projects />
      </Container>
    </ThemeProvider>
  );
}

export default App;
