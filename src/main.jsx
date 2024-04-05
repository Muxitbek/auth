import React from 'react';
import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

const App = lazy(() => import("./App"));
const Landing = lazy(() => import("./Pages/Landing/Landing"));
const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Login = lazy(() => import("./Pages/Login/Login"));
const Reg = lazy(() => import("./Pages/Reg/Reg"));
const Admin = lazy(() => import("./Pages/Admin/Admin"));
const Profile = lazy(() => import("./Pages/Profile/Profile"));
const Auth1 = lazy(() => import("./Servise/Auth1/Auth1"));
const Auth2 = lazy(() => import("./Servise/Auth2/Auth2"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [

      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/reg",
        element: <Reg />,
      },

      {
        path: "/admin",
        element: <Admin />,
      },

      {
        path: "/profile",
        element: <Profile />,
      },

      {
        path: "/admin",
        element: <Auth1 />,
        children: [
          {
            path: "/admin",
            element: <Admin />,
          }
        ]
      },

      {
        path: "/profile",
        element: <Auth2 />,
        children: [
          {
            path: "/profile",
            element: <Profile />,
          }
        ]
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<h1>...LOADING</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
