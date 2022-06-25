import React from "react";
import styled from "styled-components";

import Typography from "../../design-system/core/Typography";
import {languages} from "../../constants/languages";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({theme}) => theme.spacing(3)};
`;

const SectionLabel = styled(Typography)`
  margin-bottom: ${({theme}) => theme.spacing(1)};

`;

const RadiosContainer = styled.div`
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //flex-wrap: wrap;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, auto);
  @media only screen and (min-width: ${({theme}) => theme.breakpoints["xl"]}) {
    grid-template-columns: repeat(4, auto); 
  }
  
`;

const RadioContainer = styled.div`
  cursor: pointer;
`;

const RadioLabel = styled(Typography)`
  display: inline;
  margin-right: ${({theme}) => theme.spacing(3)};
  margin-left: ${({theme}) => theme.spacing(0.5)};
`;

const Radio = styled.input`
  margin: 0;
  accent-color: ${({theme}) => theme.palette.primary};
  cursor: pointer;
`;

const radios = [
  {
    value: languages.ENGLISH,
    label: "English"
  },
  {
    value: languages.JAVASCRIPT,
    label: "JavaScript"
  },
  {
    value: languages.PYTHON,
    label: "Python"
  },
  {
    value: languages.CLOJURE,
    label: "Clojure"
  }
];

const RadioComp = ({value, label, selected, setSelected}) => {
  const handleChange = _ => setSelected(value);
  return (
    <RadioContainer onClick={handleChange}>
      <Radio type="radio" value={value} checked={selected === value} onChange={handleChange} />
      <RadioLabel variant="h3">{label}</RadioLabel>
    </RadioContainer>
  )
}

const SelectLanguage = ({selected, setSelected}) => {
  return (
    <Container>
      <SectionLabel variant="h2">Select your language:</SectionLabel>
      <RadiosContainer>
        {radios.map(({value, label}) => {
          return <RadioComp key={value} value={value} label={label} selected={selected} setSelected={setSelected}/>
        })}
      </RadiosContainer>
    </Container>
  )
};

export default SelectLanguage;