import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './HomePage.jsx'
import NotFoundPage from './NotFoundPage.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/Cv_react_tailwindcss/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
