import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from './component/main/Roots';
import HomePage from './pages/HomePage';
import ContactPae from './pages/ContactPae';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots />,
    children:[
      {
        index:true,
        element:<HomePage />,
      },
      {
        path:"/contact",
        element:<ContactPae />
      },
    ]
  },
]);
const App = () => {
  return (
  <RouterProvider router={router} />
  )
}

export default App