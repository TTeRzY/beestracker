import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'


import ErrorPage from './pages/error-page.jsx'
import HomePage from './pages/home-page.jsx'
import LoginPage from './pages/login-page.jsx'
import RootLayout from './pages/root.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { name: 'login', path: 'login', element: <LoginPage /> }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
