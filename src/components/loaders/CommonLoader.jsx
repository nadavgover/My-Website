import React, {Fragment} from "react";
import styled, {css, keyframes} from "styled-components";
import PropTypes from "prop-types";

const bricksAnimation = keyframes`
  0% {
    transform: translate(-150%, 50%);
  }
  8.333%, 25% {
    transform: translate(-150%, -150%);
  }
  33.333%, 50% {
    transform: translate(50%, -150%);
  }
  58.333%, 75% {
    transform: translate(50%, 50%);
  }
  83.333%, 100% {
    transform: translate(-150%, 50%);
  }
`;

const carouselAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1.2);
    z-index: 1;
  }
  33.333% {
    transform: translate(-200%, -50%) scale(0.8);
    z-index: -1;
  }
  66.666% {
    transform: translate(150%, -50%) scale(0.8);
    z-index: -1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.2);
    z-index: 1;
  }
`;

const fallingAnimation = keyframes`
  0%, 50% {
    opacity: 1;
    transform: translateY(0);
  }
  25% {
    opacity: 0;
    transform: translateY(150%);
  }
  25.001% {
    opacity: 0;
    transform: translateY(-150%);
  }
`;

const Dot = styled.span`
  height: ${({theme}) => theme.spacing(1.25)};
  width: ${({theme}) => theme.spacing(1.25)};
  display: inline-block;
  margin: 0 ${({theme}) => theme.spacing(0.25)};
  border-radius: 50%;
  animation-iteration-count: infinite;
  
  ${({variant}) => variant === "bricks" && css`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-150%, 50%);
    animation-name: ${bricksAnimation};
    animation-duration: 2250ms;
    animation-timing-function: linear;  
  `}
  
  ${({variant}) => variant === "carousel" && css`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    transform: translate(-50%, -50%) scale(1.2);
    animation-name: ${carouselAnimation};
    animation-duration: 1.8s;
    animation-timing-function: linear;
    z-index: 1;  
  `}
  
  ${({variant}) => variant === "falling" && css`
    opacity: 1;
    transform: translateY(0);
    animation-name: ${fallingAnimation};
    animation-duration: 1.2s;
    animation-timing-function: linear;
  `}
  
  &:first-child {
    background-color: ${({theme}) => theme.palette.third};
  }
  
  &:nth-child(2) {
    background-color: ${({theme}) => theme.palette.primary};
    
    ${({variant}) => variant === "bricks" && css`
      animation-delay: 750ms;
    `}
    
    ${({variant}) => variant === "carousel" && css`
      animation-delay: 600ms;
    `}
    
    ${({variant}) => variant === "falling" && css`
      animation-delay: 150ms;
    `}
  }
  
  &:nth-child(3) {
    background-color: ${({theme}) => theme.palette.green};
    
    ${({variant}) => variant === "bricks" && css`
      animation-delay: 1500ms;
    `}
    
    ${({variant}) => variant === "carousel" && css`
      animation-delay: 1200ms;
    `}
    
    ${({variant}) => variant === "falling" && css`
      animation-delay: 300ms;
    `}
  }
`

const CommonLoader = ({variant}) => {
  return (
    <Fragment>
      <Dot variant={variant}/>
      <Dot variant={variant}/>
      <Dot variant={variant}/>
    </Fragment>
  );
};

CommonLoader.propTypes = {
  variant: PropTypes.oneOf(["bricks", "carousel", "falling"]).isRequired
}

export default CommonLoader;