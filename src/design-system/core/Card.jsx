import React from "react";
import styled from "styled-components";
import ActionButtons from "./ActionButtons";

const Container = styled.div`
  background-color: ${({theme}) => theme.palette.background};
  filter: brightness(150%);
  padding: ${({theme}) => theme.spacing(1.5)};
  //box-shadow: 0 0 1px ${({theme}) => theme.palette.color};
  border-radius: 4px;
  overflow: hidden;
`;

const Card = ({children, className, onClick}) => {
  return (
    <Container className={className} onClick={onClick}>
      <ActionButtons />
      {children}
    </Container>
  );
};

export default Card;