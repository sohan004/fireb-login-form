import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Log from './components/Log';
import About from './components/About';
import Register from './components/Register';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/log_in',
        element: <Log></Log>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
