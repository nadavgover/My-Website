import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${({theme}) => theme.palette.background};
  filter: brightness(150%);
  padding: ${({theme}) => theme.spacing(2)};
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing(0.75)};
  width: 100%;
  justify-content: flex-start;
  margin-bottom: ${({theme}) => theme.spacing(3.5)};
`;

const Action = styled.div`
  width: ${({theme}) => theme.spacing(1.25)};
  height: ${({theme}) => theme.spacing(1.25)};
  border-radius: 50%;
  
  &:first-child {
    background-color: ${({theme}) => theme.palette.third};
  }
  
  &:nth-child(2) {
    background-color: ${({theme}) => theme.palette.primary};
  }
  
  &:nth-child(3) {
    background-color: ${({theme}) => theme.palette.green};
  }
`;

const Card = ({children, className}) => {
  return (
    <Container className={className}>
      <ActionsContainer>
        <Action />
        <Action />
        <Action />
      </ActionsContainer>
      {children}
    </Container>
  );
};

export default Card;