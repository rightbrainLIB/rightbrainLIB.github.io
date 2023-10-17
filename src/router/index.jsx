import App from '../App.jsx'
import {createBrowserRouter} from "react-router-dom";
import Test from "../pages/Test.jsx";
import TransitView from "../pages/TransitView.jsx";

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
    path: "/kb/transit",
    element: <TransitView />
  }
]);

export default router;