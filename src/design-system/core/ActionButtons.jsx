import React from "react";
import styled from "styled-components";

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
  cursor: pointer;
  
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

const ActionButtons = ({className, onGreenClick, onYellowClick, onRedClick}) => {
  return (
    <ActionsContainer className={className}>
      <Action onClick={onGreenClick}/>
      <Action onClick={onYellowClick}/>
      <Action onClick={onRedClick}/>
    </ActionsContainer>
  );
};

export default ActionButtons;