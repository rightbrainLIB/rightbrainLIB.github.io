import App from '../App.jsx'
import {createBrowserRouter} from "react-router-dom";
import Test from "../pages/Test.jsx";
import TransitView from "../pages/TransitView.jsx";
import AccountTransfer from "../pages/AccountTransfer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/test",
    element: <Test />
  },
  {
    path: "/transit",
    element: <TransitView />
  },
  {
    path: "/accountTransfer",
    element: <AccountTransfer />
  },
]);

export default router;