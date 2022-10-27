import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import DarkTheme from './Components/DarkTheme/DarkTheme';
import Faq from './Components/Faq/Faq';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import Signup from './Components/Signup/Signup';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
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
          path: '/blogs',
          element: <Blog></Blog>
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        }

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
