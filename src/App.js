
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import DarkTheme from './Components/DarkTheme/DarkTheme';
import Faq from './Components/Faq/Faq';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import Signup from './Components/Signup/Signup';

// import { useState } from 'react';
// import { useEffect } from 'react';

function App() {



  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          loader: () => fetch(`https://server-recap-2z9ho7uib-masraful.vercel.app/catagory`),
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <Signup></Signup>
        },
        {
          path: '/theme',

          element: <DarkTheme></DarkTheme>
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        },

      ]

    }
  ])
  return (

    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
