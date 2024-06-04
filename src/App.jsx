import AboutMe from "./Parts/AboutMe.jsx"
import Hr from "./Parts/Hr.jsx"
import { Outlet } from "react-router-dom"
import Footer from "./Parts/Footer.jsx"
import Navbar from "./Parts/Navbar.jsx"

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
