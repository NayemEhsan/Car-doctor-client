import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "./About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children :[
        {
            path : '/',
            element:<About></About> 
        }
      ]
    },
  ]);
  export default router