import { createBrowserRouter } from "react-router-dom";

import App from "../components/App";
import Resume from "../components/resume/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/resume",
    element: <Resume />
  }
]);

export default router;