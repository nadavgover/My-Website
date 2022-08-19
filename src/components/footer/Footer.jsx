import React from "react";
import styled from "styled-components";

import SectionContainer from "../../design-system/core/SectionContainer";
import Typography from "../../design-system/core/Typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme}) => theme.spacing(1)};
  
  @media only screen and (min-width: ${({theme}) => theme.breakpoints["xl"]}) {
    flex-direction: row;
    gap: ${({theme}) => theme.spacing(3)};
  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme}) => theme.spacing(3)}
`;

const Link = styled.a``;

const Icon = styled.i`
  font-size: 30px;
  color: ${({theme}) => theme.palette.primary};
`;

const Footer = () => {
  return (
    <SectionContainer>
      <Container>
        <Typography variant="h2">Contact me:</Typography>
        <LinksContainer>
          <Link href="https://www.linkedin.com/in/nadav-gover/" target="_blank"><Icon className="fa fa-linkedin-square"/></Link>
          <Link href="https://www.github.com/nadavgover" target="_blank"><Icon className="fa fa-github"/></Link>
        </LinksContainer>
      </Container>
    </SectionContainer>
  );
};

export default Footer;