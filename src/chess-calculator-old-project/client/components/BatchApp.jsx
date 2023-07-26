import React from "react";
import {Provider} from "react-redux";
import store from "../redux/store";
import NavBar from "./navigation/NavBar";
import Batch from "./batch/Batch";

const BatchApp = () => {
  return (
    <Provider store={store}>
      <div>
        <NavBar/>
        <Batch/>
      </div>

    </Provider>
  )
};

export default BatchApp;