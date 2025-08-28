import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
import Navbar from './Components/Navbar'
import Page3 from './Components/Page3'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        
            <Route path="/Page1" element={<Page1 />} />
            <Route path="/Page2" element={<Page2 />} />
          
        {isLoggedIn && <Route path="/Page3" element={<Page3 />} />}
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  )
}
export default App