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
  background-color: ${({theme}) => lightenDarkenColor(theme.palette.background, 20)};
  //width: 100vw;
  //height: 100vh;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  max-height: 80%;
  background-color: ${({theme}) => theme.palette.background};
  overflow-y: auto;
`;

const Actions = styled(ActionButtons)`
  position: absolute;
  top: ${({theme}) => theme.spacing(2)};
  left: ${({theme}) => theme.spacing(2)};
`;

const Overlay = ({className, children, onClose}) => {
  const onEscapeClicked = e => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <Container className={className} onClick={onClose} onKeyDown={onEscapeClicked}>
      <Actions onRedClick={onClose} onGreenClick={onClose} onYellowClick={onClose}/>
      <Content>
        {children}
      </Content>
    </Container>
  );
};

export default Overlay;