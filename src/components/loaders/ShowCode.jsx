import React from "react";
import styled from "styled-components";
import Typography from "../../design-system/core/Typography";

const ShowCodeComp = styled.div`
    display: block;
    content: "Show code";
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 2px 4px;
    border: 1px solid transparent;
    border-radius: inherit;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0;
    cursor: pointer;
    color: ${({theme}) => theme.palette.background};
    background-color: ${({theme}) => theme.palette.primary};
    
`;

const ShowCode = ({onClick}) => {
  return (
    <ShowCodeComp onClick={onClick}>
      <Typography variant="body1">
        Show code
      </Typography>
    </ShowCodeComp>
  );
};

export default ShowCode;