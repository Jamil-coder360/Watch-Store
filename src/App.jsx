import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from './component/main/Roots';
import HomePage from './pages/HomePage';
import ContactPae from './pages/ContactPage';
import NotfoundPage from './pages/NotfoundPage';
import LoginPage from './pages/LoginPage';
import SingUpPage from './pages/SingUpPage';


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
        path:"contact",
        element:<ContactPae />
      },
      {
        path:"login",
        element:<LoginPage />
      },
      {
        path:"singup",
        element:<SingUpPage />
      },
      {
        path:"*",
        element:<NotfoundPage />
      }
    ]
  },
]);
const App = () => {
  return (
  <RouterProvider router={router} />
  )
}

export default App