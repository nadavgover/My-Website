import styled from "styled-components";

const SectionContainer = styled.div`
  padding: ${({theme}) => theme.spacing(4)} ${({theme}) => theme.spacing(2)};
  &:nth-child(2n) {
    background-color: ${({theme}) => theme.palette.background};
    filter: brightness(150%);
  }
  @media only screen and (min-width: ${({theme}) => theme.breakpoints["xl"]}) {
      padding: ${({theme}) => theme.spacing(2)} 25vw; 
  }
`;

export default SectionContainer;