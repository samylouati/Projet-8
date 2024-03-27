import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom" 

import { Home } from './pages/home'

function App() {

  return (
   <div className='Projet8'>
    
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    
   </div>
  )
}

export default App