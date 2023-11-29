import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../pages/Main/Main";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import AddBook from "../pages/AddBook/AddBook";
import ManageMyBooks from "../pages/ManageMYBooks/ManageMyBooks";
import BookDetails from "../pages/Home/BookDetails";
import PrivateRoute from "./PrivateRoute";
  
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
      },
      {
        path:"/addbook",
        element:<PrivateRoute><AddBook></AddBook></PrivateRoute>
    },
    {
      path:"/mybooks",
      element:<ManageMyBooks></ManageMyBooks>
  },{
    path:'/details/:id',
    element:<BookDetails></BookDetails>,
    loader: ({ params }) => fetch(`https://meet-tech-lab-server.vercel.app/details/${params.id}`)
  }
      ]
    },
  ]);
  export default router;