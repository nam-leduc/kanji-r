import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./error-page";
import Meaning from "./routes/meaning";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [{ index: true, element: <Meaning /> }],
      },
    ],
  },
]);

export default router;
