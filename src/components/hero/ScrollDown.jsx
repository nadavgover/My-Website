import React, {useState, useEffect} from "react";
import styled, {keyframes} from "styled-components";

import Typography from "../../design-system/core/Typography";

const Container = styled.div.attrs(props => ({
  style: {
    opacity: props.opacity,
  },
}))`
  display: flex;
  gap: ${({theme}) => theme.spacing(2)};
  position: absolute;
  bottom: ${({theme}) => theme.spacing(1)};
  color: ${({theme}) => theme.palette.primary};
  transition: opacity 50ms linear;
`

const moveUpAndDown = keyframes`
  0% {
    transform: translateY(-10%);
  }
  50% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(-10%);
  }
  
`;

const Item = styled(Typography)`
  &:not(:nth-child(2)) {
    animation-name: ${moveUpAndDown};
    animation-timing-function: linear;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
`;

const ScrollDown = () => {
  const [scrollPosition, setScrollPosition] = useState(100000);

  const onScroll = () => {
    setScrollPosition(window.scrollY)
  };

  useEffect(() => {
    setTimeout(() => {
      setScrollPosition(window.scrollY);
      window.addEventListener("scroll", onScroll);
    }, 3500)
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, [])

  const opacity = 1 - Math.min(scrollPosition / 350, 1);

  return (
    <Container opacity={opacity}>
      <Item variant="h2">&darr;</Item>
      <Item variant="h2">Scroll Down</Item>
      <Item variant="h2">&darr;</Item>
    </Container>
  )
};

export default ScrollDown;