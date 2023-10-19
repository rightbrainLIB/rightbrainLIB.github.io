import App from "../App.jsx";
import { createBrowserRouter } from "react-router-dom";
import Test from "../pages/Test.jsx";
import TransitView from "../pages/TransitView.jsx";
import AccountTransfer from "../pages/AccountTransfer.jsx";
import TransitCompleteConfirm from "../pages/TransitCompleteConfirm.jsx";
import TransitCompletePage from "../pages/TransitCompletePage.jsx";
import TransferInput from "../pages/TransferInput.jsx";
import TransitChange from "../pages/TransitChange.jsx";

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
    path: "/transferInput",
    element: <TransferInput />,
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
  {
    path: "/transitChange",
    element: <TransitChange />,
  },
]);

export default router;
