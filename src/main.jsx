import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Navbar from './Parts/Navbar.jsx'
import Footer from './Parts/Footer.jsx'
import NotFoundPage from "./Parts/NotFoundPage.jsx"

// Parts
import CourseContainer from './Courses/CoursesContainer.jsx'
import ProjectsContainer from './Projects/ProjectsContainer.jsx';
import EducationsContainer from './Education/EducationsContainer.jsx'

import './index.css'
import Particles from 'particlesjs'

import { basePath } from './Config.jsx'

// Load particles for background
window.onload = () => {
  Particles.init({
    selector: '.background',
    color: "#222222",
    connectParticles: "true",
    maxParticles: "100",
    responsive: [
      {
        breakpoint: 1024,
        options: {
          maxParticles: 50,
        }
      },
      {
        breakpoint: 768,
        options: {
          maxParticles: 25,
        }
      }, {
        breakpoint: 425,
        options: {
          maxParticles: 20,
        }
      }, {
        breakpoint: 320,
        options: {
          maxParticles: 0
        }
      }
    ]
  });
}

const router = createBrowserRouter([
  {
    path: basePath,
    element: <App/>,
    children: [
      {
        path: basePath,
        element: <>
          <CourseContainer />
        </>,
      }, {
        path: basePath + 'projects',
        element: <>
          <ProjectsContainer />
        </>,
      },  {
        path: basePath + 'education',
        element: <>
          <EducationsContainer />
        </>,
      } 
    ],
  }, {
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
