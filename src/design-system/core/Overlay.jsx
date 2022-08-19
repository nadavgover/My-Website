import React from "react";
import styled from "styled-components";
import {lightenDarkenColor} from "../../utils/general";
import ActionButtons from "./ActionButtons";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({theme}) => lightenDarkenColor(theme.palette.background, 20, 0.9)};
  z-index: 1;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  max-height: 80%;
  padding: ${({theme}) => theme.spacing(2)};
  background-color: ${({theme}) => theme.palette.background};
  overflow-y: auto;
  border-radius: ${({theme}) => theme.spacing(1)};
  
  @media only screen and (min-width: ${({theme}) => theme.breakpoints["xl"]}) {
    width: 65%;
  }
`;

const Actions = styled(ActionButtons)`
  position: sticky;
  top: 0;
  // top: -${({theme}) => theme.spacing()};
  // left: ${({theme}) => theme.spacing(2)};
  margin-bottom: ${({theme}) => theme.spacing(2)};
`;

const Overlay = ({className, children, onClose}) => {
  const onEscapeClicked = e => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <Container className={className} onClick={onClose} onKeyDown={onEscapeClicked}>
      <Content>
        <Actions onRedClick={onClose} onGreenClick={onClose} onYellowClick={onClose}/>
        {children}
      </Content>
    </Container>
  );
};

export default Overlay;