import AboutMe from "./AboutMe.jsx"
import Hr from "./Hr.jsx"
import CourseContainer from "./Courses/CoursesContainer.jsx"
import { Outlet } from "react-router-dom"

function App() {
  return (
      <div className="min-h-screen flex flex-col mb-0">
        <AboutMe />
        <Hr />

        <Outlet />
      </div>
  )
}

export default App;
