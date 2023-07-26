import {combineReducers} from "redux";
import oneVsOneReducer from "./oneVsOne/oneVsOne.reducer";
import batchReducer from "./batch/batch.reducer";

const rootReducer = combineReducers({
    oneVsOne: oneVsOneReducer,
    batch: batchReducer
})

export default rootReducer