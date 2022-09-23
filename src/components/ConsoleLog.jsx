import React, {useEffect} from "react";
import {useTheme} from "styled-components";

const ConsoleLog = () => {
  const theme = useTheme();

  const onClean = () => {
    return "Thanks for cleaning your window. Keep using your imagination and create amazing things!"
  }

  useEffect(() => {
    console.log("%cWelcome to Nadav's website\n\n%cDid you %cclean %cyour %cwindow %ctoday?",
      `color: ${theme.palette.primary}; font-size:${theme.spacing(3)}`,
      `color: ${theme.palette.color}`,
      `color: ${theme.palette.primary}`,
      `color: ${theme.palette.color}`,
      `color: ${theme.palette.primary}`,
      `color: ${theme.palette.color}`,
    );
    window.clean = onClean;
  }, []);

  return null;
};

export default ConsoleLog