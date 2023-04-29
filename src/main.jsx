import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'


import ErrorPage from './pages/error.jsx'
import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import RootLayout from './pages/root.jsx'
import Register from "./pages/register";
import ForgotPassword from "./pages/forgot-password";
import Dashboard from './pages/admin/dashboard'
import AdminLayout from './pages/admin-layout'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: 'forgot-password', element: <ForgotPassword /> },
        ]
    },
    {
      path: '/admin',
      element: <AdminLayout />,
      errorElement: <ErrorPage />,
      children: [
          { index: true, element: <Dashboard /> },
          // { path: 'apiaries', element: <Apiaries /> },
          // { path: 'beehives', element: <BeeHives /> },
      ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
