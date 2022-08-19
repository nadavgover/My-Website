import React, {useState, useEffect} from "react";
import styled from "styled-components";

import SectionContainer from "../../design-system/core/SectionContainer";
import SectionTitle from "../../design-system/core/SectionTitle";
import Typography from "../../design-system/core/Typography";
import Card from "../../design-system/core/Card";
import Overlay from "../../design-system/core/Overlay";
import bfsImage from "../../assets/images/bfs.jpeg";
import dpImage from "../../assets/images/dynamicProgramming.jpeg";
import ffImage from "../../assets/images/fordFelkerson.png";
import cryptographyImage from "../../assets/images/cryptography.jpeg";
import emClustersImage from "../../assets/images/emClusters.png";
import mnistImage from "../../assets/images/mnist.jpeg";

import Wikipedia from "./Wikipedia";
import PassoverMap from "./PassoverMap";
import Splitwise from "./Splitwise";
import Cryptography from "./Cryptography";
import EMClusters from "./EMClusters";
import DigitRecognition from "./DigitRecognition";

const CardsContainer = styled.div`
  display: grid;
  gap: ${({theme}) => theme.spacing(1)};
  grid-template-columns: 1fr;
  
  @media only screen and (min-width: ${({theme}) => theme.breakpoints["xl"]}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media only screen and (min-width: ${({theme}) => theme.breakpoints["xxl"]}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled(Card)`
  cursor: pointer;
  filter: brightness(150%);
`;

const ProjectContent = styled.div`
  position: relative;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectTitle = styled(Typography)`
  position: absolute;
  left: ${({theme}) => theme.spacing(0.5)};
  bottom: ${({theme}) => theme.spacing(1)};
  padding: 2px 4px;
  background-color: ${({theme}) => theme.palette.primary};
  filter: brightness(75%);
  color: ${({theme}) => theme.palette.background};
  text-transform: capitalize;
  border-radius: ${({theme}) => theme.spacing(0.25)};
  
  @media only screen and (min-width: ${({theme}) => theme.breakpoints["xl"]}) {
    transform: translateX(-150%);
    transition: transform 0.3s ease-in-out;
    
    ${ProjectContent}:hover & {
      transform: translateX(0);
    }
  }
`;

const cardsConfig = [
  {
    image: bfsImage,
    title: "wikipedia game",
    detail: <Wikipedia />
  },
  {
    image: dpImage,
    title: "seat map",
    detail: <PassoverMap />
  },
  {
    image: ffImage,
    title: "splitwise",
    detail: <Splitwise />
  },
  {
    image: cryptographyImage,
    title: "cryptography",
    detail: <Cryptography />
  },
  {
    image: emClustersImage,
    title: "unsupervised learning",
    detail: <EMClusters />
  },
  {
    image: mnistImage,
    title: "digit recognition",
    detail: <DigitRecognition />
  }
]

const Projects = () => {
  const [openedProjectDetail, setOpenedProjectDetail] = useState("");

  const onProjectClick = projectDetail => {
    setOpenedProjectDetail(projectDetail);
    window.history.pushState(null, null, window.location.pathname);
  };

  const onClose = () => {
    setOpenedProjectDetail("");
  };

  useEffect(() => {
    const handlePopState = () => {
      if (!!openedProjectDetail) {
        onClose();
      } else {
        window.history.back();
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [openedProjectDetail])

  return (
    <SectionContainer>
      <SectionTitle>Projects</SectionTitle>
      <CardsContainer>
        {cardsConfig.map(card => {
          return (
            <ProjectCard key={card.title} onClick={() => onProjectClick(card.detail)}>
              <ProjectContent>
                <ProjectImage src={card.image} />
                <ProjectTitle variant="h2">{card.title}</ProjectTitle>
              </ProjectContent>
            </ProjectCard>
          )
        })}
      </CardsContainer>
      {!!openedProjectDetail && (
        <Overlay onClose={onClose}>
          {openedProjectDetail}
        </Overlay>
      )}
    </SectionContainer>
  );
};

export default Projects;