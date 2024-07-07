import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar.jsx';
import About from './components/About.jsx/About.jsx';
import Conatct from './components/Contact.jsx/Conatct.jsx';
import Help from './components/Help/Help.jsx';
import Users from './components/Users/Users.jsx';
import Posts from './components/Posts/Posts.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';

    const router=createBrowserRouter([
      {
      path: "/",
      element:<Navbar></Navbar>,

      children:[
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/users",
          loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
          element:<Users></Users>
        },
        {
          path:"/user/:id",
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
          element:<UserDetails></UserDetails>
        },
        
        {
          path:"/contact",
          element:<Conatct></Conatct>
        },
        {
          path:"/help",
          element:<Help></Help>
        },
        {
          path:"/posts",
          loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
          element:<Posts></Posts>
        },
        {
          path:"/post/:id",
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
          element:<PostDetails></PostDetails>
        }
      ]
    },
    ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <RouterProvider router={router}></RouterProvider>
  
  </React.StrictMode>,
)
