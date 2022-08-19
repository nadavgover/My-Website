import React from "react";
import styled from "styled-components";
import SectionContainer from "../../design-system/core/SectionContainer";
import SectionTitle from "../../design-system/core/SectionTitle";

const PuzzleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PuzzleFrame = styled.iframe`
  width: 400px;
  height: 444px;
`;

const PuzzleOfTheDay = () => {
  return (
    <SectionContainer>
      <SectionTitle>chess tactics</SectionTitle>
      <PuzzleContainer>
        <PuzzleFrame src="https://lichess.org/training/frame?theme=grey&bg=dark" frameBorder="0"/>
      </PuzzleContainer>
    </SectionContainer>
  );
};

export default PuzzleOfTheDay;