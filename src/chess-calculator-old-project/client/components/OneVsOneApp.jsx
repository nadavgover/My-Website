import React from "react";
import {Provider} from "react-redux";
import store from "../redux/store";
import NavBar from "./navigation/NavBar";
import OneVsOne from "./oneVsOne/OneVsOne";

const OneVsOneApp = () => {
  return (
    <Provider store={store}>
      <div>
        <NavBar/>
        <OneVsOne/>
      </div>
    </Provider>
  )
};

export default OneVsOneApp;