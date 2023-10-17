import App from '../App.jsx'
import {createBrowserRouter} from "react-router-dom";
import Test from "../pages/Test.jsx";
import AccountTransfer from "../pages/AccountTransfer.jsx";

const router = createBrowserRouter([
  {
    path: "/kb",
    element: <App />
  },
  {
    path: "/kb/test",
    element: <Test />
  },
  {
    path: "/kb/accountTransfer",
    element: <AccountTransfer />
  }
]);

export default router;