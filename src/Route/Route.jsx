import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../pages/Main/Main";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
          path:"/registration",
          element:<Registration></Registration>
      }
      ]
    },
  ]);
  export default router;