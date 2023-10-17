import App from '../App.jsx'
import {createBrowserRouter} from "react-router-dom";
import Test from "../pages/Test.jsx";

const router = createBrowserRouter([
  {
    path: "/kb",
    element: <App />
  },
  {
    path: "/test",
    element: <Test />
  }
]);

export default router;