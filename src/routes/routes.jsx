import React, {Suspense} from "react";

import {createBrowserRouter} from "react-router-dom";

import App from "../components/App";
import Resume from "../components/resume/Resume";
import {routes} from "../chess-calculator-old-project/client/constants/routes";

const OneVsOneApp = React.lazy(() => import("../chess-calculator-old-project/client/components/OneVsOneApp"));
const BatchApp = React.lazy(() => import("../chess-calculator-old-project/client/components/BatchApp"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/resume",
    element: <Resume/>
  },
  {
    path: routes.CHESS,
    element: (
      <Suspense fallback={null}>
        <BatchApp/>
      </Suspense>
    )
  },
  {
    path: routes.ONE_VS_ONE,
    element: (
      <Suspense fallback={null}>
        <OneVsOneApp/>
      </Suspense>
    )
  },
  {
    path: routes.BATCH,
    element: (
      <Suspense fallback={null}>
        <BatchApp/>
      </Suspense>
    )
  }
]);

export default router;