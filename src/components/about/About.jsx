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
      "\nHe there learned to love the sea and he is a certified dive master." +
      '\nTogether with his classmates he participated in "FIRST" robotics competition. ' +
      'He also learnt how to play the drums and the saxophone and he played a lot of Tennis, he even went to Tennis camps in the US.' + "" +
      "\nDuring middle and high school Nadav worked as a fishermen in the fish ponds, catching and sorting Gold and Koi fish." +
      "The stories say he used to come back home after a long day of work full of fish scales, and fall asleep on his mother's sofa without even showering (disgusting!)."
  },
  {
    value: "army",
    title: {
      [languages.ENGLISH]: "Between 18 and 21 years old",
      [languages.JAVASCRIPT]: "if (age >= 18 && age < 21)",
      [languages.PYTHON]: "if age >= 18 and age < 21:",
      [languages.CLOJURE]: "(if (and (>= age 18) (< age 21)))",

    },
    content: "Nadav was in the army." +
      "\nHe served a year and a half in the air force pilot course as a fighter pilot, " +
      "and another year and a half as a commander in the artillery forces."
  },
  {
    value: "post-army",
    title: {
      [languages.ENGLISH]: "Between 21 and 23 years old",
      [languages.JAVASCRIPT]: "if (age >= 21 && age < 23)",
      [languages.PYTHON]: "if age >= 21 and age < 23:",
      [languages.CLOJURE]: "(if (and (>= age 21) (< age 23)))",

    },
    content: "Nadav saw code for the first time of his life!" +
      "\nAfter the army Nadav was working in a precision metal cutting factory. He was sketching the metal parts and adjusting them to fit all the different cutting technologies in the factory. " +
      "He then worked on a big product that will improve customers experience, and got his hands dirty with code for the first time of his life. " +
      "He was working with a mentor, and mostly taught himself everything. He believes in doing stuff yourself in order to fully understand them."
  },
  {
    value: "university",
    title: {
      [languages.ENGLISH]: "Between 23 and 27 years old",
      [languages.JAVASCRIPT]: "if (age >= 23 && age < 27)",
      [languages.PYTHON]: "if age >= 23 and age < 27:",
      [languages.CLOJURE]: "(if (and (>= age 23) (< age 27)))",

    },
    content: "Nadav studied electrical engineering in Tel Aviv University." +
      "\nHe specialized in computers (hardware and software) and feedback and control systems." +
      "\nHis curiosity never stopped and he made plenty of side projects. He was there exposed to the world of machine learning and his B.Sc. final project was all about that." +
      "\nHe also got his first software engineer student position in AppsFlyer."
  },
  {
    value: "appsflyer",
    title: {
      [languages.ENGLISH]: "Older than 27 years old",
      [languages.JAVASCRIPT]: "if (age >= 27)",
      [languages.PYTHON]: "if age >= 27:",
      [languages.CLOJURE]: "(if (>= age 27))",

    },
    content: "Nadav is working as a full stack software engineer in AppsFlyer." +
      "\nHe designs and implements new high scale products and maintains existing ones, using all of the buzzwords you can think of and more!" +
      "\nNadav has a thing with frontend, he really likes it, he cares a lot for the user experience. He made some outstanding infrastructure changes to the frontend architecture, resulting with applications loading faster than ever before. " +
      "He independently conducted full stack cross-team features, making a big impact for the company's customers." +
      "\nNadav is motivated by a challenge and will never say no to one."
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