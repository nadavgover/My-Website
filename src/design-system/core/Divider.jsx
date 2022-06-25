import React from "react";
import styled from "styled-components";

const StyledDivider = styled.hr`
  width: 95%;
`;

const Divider = ({className}) => {
  return (
    <StyledDivider className={className} />
  )
};

export default Divider;