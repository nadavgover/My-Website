import React from "react";
import styled from "styled-components";
import Typography from "../../design-system/core/Typography";
import CodeEditor from "../../design-system/core/CodeEditor";

const Container = styled.div`
  padding: ${({theme}) => theme.spacing(1)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  &:not(:first-child) {
    padding-top: 0;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  //align-items: center;
  gap: ${({theme}) => theme.spacing(1)};
  cursor: pointer;
`;

const CollapseSign = styled.div`
  border: 1px solid ${({theme}) => theme.palette.color};
  width: ${({theme}) => theme.spacing(1.5)};
  height: ${({theme}) => theme.spacing(1.5)};
  position: relative;
  margin-top: 8px;
    
  &::after {
    content: "";
    height: 50%;
    width: 0;
    border-left: 1px solid ${({theme}) => theme.palette.color};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${p => p.isShown ? 0 : 1};
    transition: opacity 0.2s linear;
  }
  
  &::before {
    content: "";
    height: 0;
    width: 50%;
    border-top: 1px solid ${({theme}) => theme.palette.color};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Title = styled(Typography)`
  font-family: Hack, monospace;
`;

const Content = styled(Typography)`
  font-family: Hack, monospace;
  max-height: ${p => p.isShown ? "20vh" : "0"};
  overflow: hidden;
  transition: max-height 0.2s linear;
  margin-top: ${({theme}) => theme.spacing(1)};
  white-space: pre-line;
`;


const Collapse = ({isShown, title, content, value, onClick, selectedLanguage}) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <Container id={value}>
      <HeaderContainer onClick={handleClick} value={value}>
        <CollapseSign isShown={isShown} />
        <Title variant="h2">
          <CodeEditor content={title} language={selectedLanguage}/>
        </Title>
      </HeaderContainer>
      <Content variant="h3" isShown={isShown}>{content}</Content>
    </Container>
  )
};

export default Collapse