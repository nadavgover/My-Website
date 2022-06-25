import React from "react";
import styled from "styled-components";

import SectionContainer from "../../design-system/core/SectionContainer";
import SectionTitle from "../../design-system/core/SectionTitle";
import Typography from "../../design-system/core/Typography";
import Card from "../../design-system/core/Card";

const Projects = () => {
  return (
    <SectionContainer>
      <SectionTitle>Projects</SectionTitle>
      <Card>
        <div>
          This is a card
        </div>
      </Card>
    </SectionContainer>
  )
};

export default Projects;