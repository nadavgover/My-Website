import React from "react";
import styled from "styled-components";

import {languages} from "../../constants/languages";

const keywords = ["if", "const", "return", "let", "var", "and", "or"]
const specialChars = ["(", ")", "{", "}", "[", "]", ";", "<", ">", "&", "|"]

const KeyWord = styled.span`
  color: ${({theme}) => theme.palette.primary};
`;

const RegularWord = styled.span``;

const SpecialChar = styled.span`
  color: ${({theme}) => theme.palette.secondary};
`;

const NumberChar = styled.span`
  color: ${({theme}) => theme.palette.third};
`;

const getColoredContent = content => {
  const coloredContent = [];
  let lastWord = "";
  [...content].map((char, i) => {
    if (specialChars.includes(char)) {
      if (!!lastWord) {
        coloredContent.push(<RegularWord key={i-1}>{lastWord}</RegularWord>);
        lastWord = "";
      }
      coloredContent.push(<SpecialChar key={i}>{char}</SpecialChar>)
    }
    else if (!isNaN(char) && char !== " ") {
      coloredContent.push(<NumberChar key={i}>{char}</NumberChar>)
    }
    else if (char === " " || i === content.length - 1) {
      if (keywords.includes(lastWord)) {
        coloredContent.push(<KeyWord key={i}>{`${lastWord + char}`}</KeyWord>)
      } else {
        coloredContent.push(<RegularWord key={i}>{`${lastWord + char}`}</RegularWord>)
      }
      lastWord = ""
    }
    else {
      lastWord = lastWord + char;
    }
  });

  return coloredContent;
};

const CodeEditor = ({content, language}) => {
  const coloredContent = getColoredContent(content);
  return (
    language === languages.ENGLISH
      ? <span>{content}</span>
      : coloredContent.map(el => el)
  )
};

export default CodeEditor;