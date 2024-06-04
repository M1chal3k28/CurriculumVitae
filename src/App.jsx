import AboutMe from "./AboutMe.jsx"
import Hr from "./Hr.jsx"
import { Outlet } from "react-router-dom"
import Footer from "./Footer.jsx"
import Navbar from "./Navbar.jsx"

function App() {
  return (
      <div className='min-h-screen relative'>
        <div className='pb-[88px]'>
          <Navbar />
          <AboutMe />
          <Hr />
          <Outlet />
        </div>

        <Footer />
      </div>
  )
}

export default App;
