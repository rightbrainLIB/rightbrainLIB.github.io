import App from "../App.jsx";
import { createBrowserRouter } from "react-router-dom";
import Test from "../pages/Test.jsx";
import TransitView from "../pages/TransitView.jsx";
import AccountTransfer from "../pages/AccountTransfer.jsx";
import AccountTransfer2 from "../pages/AccountTransfer2.jsx";
import TransitCompleteConfirm from "../pages/TransitCompleteConfirm.jsx";
import TransitCompletePage from "../pages/TransitCompletePage.jsx";
import TransferInput from "../pages/TransferInput.jsx";
import TransitChange from "../pages/TransitChange.jsx";
import PasswordView from "../pages/PasswordView.jsx";
import SelectTaskView from "../pages/SelectTaskView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SelectTaskView />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/password",
    element: <PasswordView />,
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
    path: "/accountTransfer2",
    element: <AccountTransfer2 />,
  },
  {
    path: "/transitChange",
    element: <TransitChange />,
  },
]);

export default router;
