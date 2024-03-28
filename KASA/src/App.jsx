import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom" 

import { Home } from './pages/home'
import { About } from './pages/about'
import { Error404 } from './pages/Error404'


function App() {

  return (
   <div className='Projet8'>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error404 />}/>
      </Routes>
    
   </div>
  )
}

export default App