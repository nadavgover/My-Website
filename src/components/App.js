import React from "react";
import styled, {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme} from "../design-system/themes/theme";
import Hero from "./hero/Hero";
import About from "./about/About";
import Projects from "./projects/Projects";
import Loaders from "./loaders/Loaders";
import PuzzleOfTheDay from "./chess/PuzzleOfTheDay";
import Footer from "./footer/Footer";
import ConsoleLog from "./ConsoleLog";

const Container = styled.div`
  background-color: ${({theme}) => theme.palette.background};
  color: ${({theme}) => theme.palette.color};
`;

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <ConsoleLog />
      <Container>
        <Hero />
        <About />
        <Projects />
        <Loaders />
        {/*<PuzzleOfTheDay />*/}
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
