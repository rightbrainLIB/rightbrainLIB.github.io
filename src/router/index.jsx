import App from "../App.jsx";
import { createBrowserRouter } from "react-router-dom";
import Test from "../pages/Test.jsx";
import TransitView from "../pages/TransitView.jsx";
import AccountTransfer from "../pages/AccountTransfer.jsx";
import TransitCompleteConfirm from "../pages/TransitCompleteConfirm.jsx";
import TransitCompletePage from "../pages/TransitCompletePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/transit",
    element: <TransitView />,
  },
  {
    path: "/accountTransfer",
    element: <AccountTransfer />,
  },
  {
    path: "/transitCompleteConfirm",
    element: <TransitCompleteConfirm />,
  },
  {
    path: "/transitCompletePage",
    element: <TransitCompletePage />,
  },
]);

export default router;
