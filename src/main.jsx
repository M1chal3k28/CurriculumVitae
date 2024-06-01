import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './HomePage.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

import './index.css'
import Particles from 'particlesjs'

window.onload = () => {
  Particles.init({
    selector: '.background',
    color: "#222222",
    connectParticles: "true",
    maxParticles: "60",
    responsive: [
      {
        breakpoint: 
  768
  ,
        options: {
          maxParticles: 
  200,
  
  
  
          connectParticles: 
  false
        }
      }, {
        breakpoint: 
  425
  ,
        options: {
          maxParticles: 
  100
  ,
          connectParticles: 
  true
        }
      }, {
        breakpoint: 
  320
  ,
        options: {
          maxParticles: 
  0
   
  // disables particles.js
        }
      }
    ]
  });
}


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
