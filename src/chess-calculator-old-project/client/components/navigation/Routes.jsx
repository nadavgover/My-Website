import React from 'react'
import {Route} from "react-router-dom";
import {routes} from "../../constants/routes";
import OneVsOne from "../oneVsOne/OneVsOne";
import Batch from "../batch/Batch";

const Routes = () => {
    return (
        <>
            <Route path={routes.BATCH}>
                <Batch />
            </Route>
            <Route path={routes.ONE_VS_ONE}>
                <OneVsOne />
            </Route>
        </>
    )
}

export default Routes