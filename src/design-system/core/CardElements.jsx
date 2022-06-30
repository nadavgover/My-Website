import React from "react";
import styled from "styled-components";
import Typography from "./Typography";

const Title = styled(Typography)`
  font-weight: bold;
  margin-bottom: ${({theme}) => theme.spacing(2)};
  text-transform: capitalize;
`;

const Subtitle = styled(Typography)`
  font-weight: bold;
  margin-bottom: ${({theme}) => theme.spacing(1.5)};
  text-transform: capitalize;
`;

const SubSubtitle = styled(Typography)`
  font-weight: bold;
  margin-bottom: ${({theme}) => theme.spacing(1)};
  text-transform: capitalize;
`;

const Paragraph = styled(Typography)`
  margin-bottom: ${({theme}) => theme.spacing(2)};
`;

const Link = styled.a`
  color: ${({theme}) => theme.palette.primary};
`;

const Code = styled.code`
  display: block;
`;

const Image = styled.img`
  width: 80%;
  max-height: 400px;
  object-fit: contain;
  display: block;
  margin: ${({theme}) => theme.spacing(1)} auto;
`;

export const CardTitle = ({children}) => (<Title variant="h1">{children}</Title>);

export const CardSubtitle = ({children}) => (<Subtitle variant="h2">{children}</Subtitle>);

export const CardSubSubtitle = ({children}) => (<SubSubtitle variant="h3">{children}</SubSubtitle>);

export const CardParagraph = ({children}) => (<Paragraph variant="body1">{children}</Paragraph>);

export const CardLink = ({children, ...rest}) => (<Link {...rest}>{children}</Link>);

export const CardCode = ({children}) => (<Code>{children}</Code>);

export const CardImage = ({...rest}) => (<Image {...rest}/>)
