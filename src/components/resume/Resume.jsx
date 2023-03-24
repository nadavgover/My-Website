import React from "react";
import styled from "styled-components";

import resumeFile from "../../assets/files/resume.pdf";

const PDF = styled.object`
  width: 100vw;
  height: 100vh;
`;

const Resume = () => {
  return (
    <PDF
      type="application/pdf"
      data={resumeFile}
    />
  );
};

export default Resume