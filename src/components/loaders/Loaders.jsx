import React from "react";
import styled from "styled-components";
import SectionContainer from "../../design-system/core/SectionContainer";
import SectionTitle from "../../design-system/core/SectionTitle";
import Card from "../../design-system/core/Card";
import ShowCode from "./ShowCode";

import CommonLoader from "./CommonLoader";

const LoadersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({theme}) => theme.spacing(1)};
  
  @media only screen and (min-width: ${({theme}) => theme.breakpoints["xl"]}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const LoaderCard = styled(Card)`
  position: relative;
  height: 200px;
  filter: brightness(65%);
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const loaders = [
  <CommonLoader variant="bricks"/>,
  <CommonLoader variant="carousel"/>,
  <CommonLoader variant="falling"/>
]

const Loaders = () => {
  return (
    <SectionContainer>
      <SectionTitle>loaders fun</SectionTitle>
      <LoadersContainer>
        {loaders.map((loader, i) => {
          return (
            <LoaderCard key={i}>
              <LoaderContainer>
                {loader}
              </LoaderContainer>
              <ShowCode onClick={() => alert("Developer mode activated, under construction")}/>
            </LoaderCard>
          )
        })}
      </LoadersContainer>
    </SectionContainer>
  );
};

export default Loaders;