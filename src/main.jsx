import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './HomePage.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/Cv_react_tailwindcss/',
    element: <>
        <Navbar />
        <HomePage />
        <Footer />
      </>,
  },
  {
    path: '*',
    element: <>
      <Navbar />
      <NotFoundPage />
      <Footer />
    </>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> 
    </RouterProvider>
  </React.StrictMode>,
)
