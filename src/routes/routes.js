import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Checkout from "../Components/checkoutDetails/Checkout";
import Course from "../Components/Course/Course";
import CourseDetails from "../Components/Course/CourseDetails";
import Errorpage from "../Components/errorpage/Errorpage";
import Faq from "../Components/Faq/Faq";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Main from "../Components/Main/Main";
import Signup from "../Components/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        loader: () => fetch(`https://server-site-delta.vercel.app`),
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
        path: 'courses',
        loader: () => fetch('https://server-site-delta.vercel.app/courses'),
        element: <Course></Course>
      },
      {
        path: 'course/:id',
        loader: ({ params }) => fetch(`https://server-site-delta.vercel.app/course/${params.id}`),
        element: <CourseDetails></CourseDetails>
      },
      {
        path: 'checkout/:id',
        loader: ({ params }) => fetch(`https://server-site-delta.vercel.app/checkout/${params.id}`),
        element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
      },

      {
        path: '/faq',
        element: <Faq></Faq>
      },
      {
        path: 'blogs',
        element: <Blog></Blog>
      }
    ]
  }
])