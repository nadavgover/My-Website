import React, {useState, useEffect} from "react";
import styled from "styled-components";
import SectionTitle from "../../design-system/core/SectionTitle";
import SectionContainer from "../../design-system/core/SectionContainer";
import Collapse from "./Collapse";
import {about as aboutId} from "../../constants/ids";
import SelectLanguage from "./SelectLanguage";
import {languages} from "../../constants/languages";

const AboutContainer = styled.div`
  background-color: ${({theme}) => theme.palette.background};
  filter: brightness(65%);
`;

const abouts = [
  {
    value: "tldr",
    title: {
     [languages.ENGLISH]: "TLDR",
     [languages.JAVASCRIPT]: "TLDR",
     [languages.PYTHON]: "TLDR",
     [languages.CLOJURE]: "TLDR",
    },
    content: "Nadav Gover is a software engineer who wants to make the world a better place."
  },
  {
    value: "grow-up",
    title: {
      [languages.ENGLISH]: "Younger than 18 years old",
      [languages.JAVASCRIPT]: "if (age < 18)",
      [languages.PYTHON]: "if age < 18:",
      [languages.CLOJURE]: "(if (< age 18))",

    },
    content: "Nadav was born and raised in Ma'agan Michael, Israel." +
      "\nHe there learned to love the sea and he is a certified dive master."
  },
  {
    value: "army",
    title: {
      [languages.ENGLISH]: "Between 18 and 21 years old",
      [languages.JAVASCRIPT]: "if (age > 18 && age < 21)",
      [languages.PYTHON]: "if age > 18 and age < 21:",
      [languages.CLOJURE]: "(if (and (> age 18) (< age 21)))",

    },
    content: "Nadav was in the army." +
      "\nHe served a year and a half in the air force pilot course as a fighter pilot, " +
      "\nand another year and a half as a commander in the artillery forces."
  },
];

const About = () => {
  const [selectedAbouts, setSelectedAbouts] = useState([abouts[0].value]);
  const [selectedLanguage, setSelectedLanguage] = useState(languages.ENGLISH);

  const onClick = value => {
    setSelectedAbouts(prevList => prevList.includes(value) ? prevList.filter(item => item !== value) : [...prevList, value]);
  };

  // useEffect(() => {
  //   if (selectedList.length === 0 || selectedList[0] === abouts[0].value) {
  //     return;
  //   }
  //   const selectedEl = document.getElementById(selectedList[-1]);
  //   selectedEl.scrollIntoView();
  // }, [selectedList])

  return (
    <SectionContainer>
      <SectionTitle id={aboutId}>about</SectionTitle>
      <SelectLanguage selected={selectedLanguage} setSelected={setSelectedLanguage}/>
      <AboutContainer>
        {abouts.map(conf => (
          <Collapse value={conf.value}
                    key={conf.value}
                    isShown={selectedAbouts.includes(conf.value)}
                    onClick={onClick}
                    title={conf.title[selectedLanguage]}
                    content={conf.content}
                    selectedLanguage={selectedLanguage}/>
        ))}
      </AboutContainer>
    </SectionContainer>
  )
};

export default About;