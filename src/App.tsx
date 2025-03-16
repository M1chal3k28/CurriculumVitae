import AboutMe from "./Parts/AboutMe"
import Hr from "./Parts/Hr.js"
import { Outlet } from "react-router-dom"
import Footer from "./Parts/Footer"
import Navbar from "./Parts/Navbar"

const App = () => {
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
