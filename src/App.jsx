import AboutMe from "./AboutMe.jsx"
import Hr from "./Hr.jsx"
import CourseContainer from "./Courses/CoursesContainer.jsx"
import { Outlet } from "react-router-dom"

function App() {
  return (
      <>
        <AboutMe />
        <Hr />

        <Outlet />
      </>
  )
}

export default App
