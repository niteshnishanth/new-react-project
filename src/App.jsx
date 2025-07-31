import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
function App() {
  
  return (
   <div>
    
    <Navbar/>
    <Routes>
      <Route path="Homepage" element={<Homepage/>} />
      <Route path="Login" element={<Login/>} />
      <Route path="Contact" element={<Contact/>} />
      <Route path="About" element={<About/>} />
    </Routes>
   </div>
  )
}

export default App
