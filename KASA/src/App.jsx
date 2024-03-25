import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  { Header } from './components/header/header'
import { Footer } from './components/footer/footer'
import { Banner } from './layouts/banner/banner'

function App() {

  return (
    <>
      <Header />
        <main>
          <Banner />
        </main>   
      <Footer />
    </>
  )
}

export default App