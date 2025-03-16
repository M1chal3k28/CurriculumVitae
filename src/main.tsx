import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Navbar from './Parts/Navbar';
import Footer from './Parts/Footer';
import NotFoundPage from "./Parts/NotFoundPage";

// Parts
import CourseContainer from './Courses/CoursesContainer';
import ProjectsContainer from './Projects/ProjectsContainer';
import EducationsContainer from './Education/EducationsContainer';

import './index.css';
import Particles from 'particlesjs';

import { basePath, projectsPath, educationPath, skillsPath } from './Config'

// Load particles for background
window.onload = () => {
  Particles.init({
    selector: '.background',
    color: "#222222",
    connectParticles: "true",
    maxParticles: "100",
    sizeVariations: 2,
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
        path: projectsPath,
        element: <>
          <ProjectsContainer />
        </>,
      },  {
        path: educationPath,
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

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <RouterProvider router={router}> 
    </RouterProvider>
  </React.StrictMode>,
)
