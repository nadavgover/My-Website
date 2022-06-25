import React, {useEffect} from "react";
import styled, {keyframes} from "styled-components";
import Typography from "../../design-system/core/Typography";
import heroImg from "../../assets/images/hero.svg";
import {ReactSVG} from "react-svg";
import {about as aboutId} from "../../constants/ids";

import ScrollDown from "./ScrollDown";


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  // background-color: ${({theme}) => theme.palette.background};
  //color: ${({theme}) => theme.palette.color};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing(5)};
  justify-content: center;
  align-items: center;
  padding: ${({theme}) => theme.spacing(2)};
  position: relative;
  
  @media only screen and (min-width: ${({theme}) => theme.breakpoints["xl"]}) {
    flex-direction: row;
    gap: ${({theme}) => theme.spacing(10)};
    //height: 90vh;
  }
`

const IntroTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing(0.5)};
  @media only screen and (min-width: ${({theme}) => theme.breakpoints["xl"]}) {
    //display: flex;
    //flex-direction: column;
    gap: ${({theme}) => theme.spacing(1.5)};
  }
`;

const IntroTitle = styled(Typography)`
  //font-size: 1.5em;
  line-height: unset;
  //& > span:first-child {
    //font-weight: 600;
    //color: ${({theme}) => theme.palette.primary};
    //text-shadow: 2px 0 ${({theme}) => theme.palette.secondary};
  }
`;

const IntroSubTitle = styled(Typography)`
  font-size: 1.5em;
  line-height: unset;
`;

const textAnimation = keyframes`
  to {
    left: 0;
    top: 0;
    opacity: 1;
  }
`;

const textAnimationDuration = 3
const Letter = styled.span`
  position: relative;
  opacity: 0.1;
  left: ${({left}) => left};
  top: ${({top}) => top};
  animation-name: ${textAnimation};
  animation-duration: ${textAnimationDuration}s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  text-transform: uppercase;
  font-weight: 300;
  
  &:first-child {
    font-size: 1.5em;
    //color: ${({theme}) => theme.palette.primary};
  }
`;

const expressionAnimation = keyframes`
  0% {
    opacity: 0;
  }
  49.9% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

const imageAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Image = styled(ReactSVG)`
  color: ${({theme}) => theme.palette.primary};
  opacity: 0;
  animation-name: ${imageAnimation};
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: ${textAnimationDuration}s;
  height: 30%;
  
  & [data-fill="color"] {
    fill: ${({theme}) => theme.palette.color};
  }
  & [data-fill="background"] {
    fill: ${({theme}) => theme.palette.background};
  }
  & [data-fill="currentColor"] {
    fill: currentColor;
  }
  
  & #Expression {
    & > * {
      animation-name: ${expressionAnimation};
      animation-duration: 5s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    & > *:first-child {
      animation-direction: reverse;
    }
  }
  `;

const getRandomPosition = () => {
  const left = window.innerWidth * Math.random();
  const top = window.innerHeight * Math.random();
  return {
    left: Math.random() < 0.5
      ? `${left * -1}px`
      : `${left}px`,
    top: Math.random() < 0.5
      ? `${top * -1}px`
      : `${top}px`
  }
}

const Hero = () => {
  const titleLetters = "Nadav Gover".split("");
  const subTitleLetters = "Software Engineer".split("");

  // useEffect(() => {
  //   setTimeout(() => {
  //     const el = document.getElementById(aboutId);
  //     el.scrollIntoView();
  //   }, (textAnimationDuration + 2) * 1000);
  // }, [])

  return (
    <Container>
      <IntroTextContainer>
        <IntroTitle variant="hero1">
          {titleLetters.map((letter, i) => <Letter key={i} {...getRandomPosition()}>{letter}</Letter>)}
        </IntroTitle>
        <IntroSubTitle variant="hero1">
          {subTitleLetters.map((letter, i) => <Letter key={i} {...getRandomPosition()}>{letter}</Letter>)}
        </IntroSubTitle>
      </IntroTextContainer>
      <Image src={heroImg}/>
      {/*<ScrollDown variant="h2">Scroll down</ScrollDown>*/}
      <ScrollDown />
    </Container>
  )
};

export default Hero;