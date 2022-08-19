import React from "react";
import styled from "styled-components";
import Typography from "./Typography";

const Title = styled(Typography)`
  //margin-top: ${({theme}) => theme.spacing(4)};
  //margin-left: ${({theme}) => theme.spacing(2)};
  margin-bottom: ${({theme}) => theme.spacing(3)};
  text-transform: capitalize;
  color: ${({theme}) => theme.palette.primary};;
  font-weight: 100;
  //@media only screen and (min-width: ${({theme}) => theme.breakpoints["xl"]}) {
  //    margin-top: ${({theme}) => theme.spacing(0)};
  //    margin-left: ${({theme}) => theme.spacing(15)};    
  //}
`;

const SectionTitle = ({children, className, ...rest}) => {
  return (
    <Title variant="hero1" className={className} {...rest}>
      {children}
    </Title>
  )
};

export default SectionTitle;