import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  { Header } from './components/header/header'
import { Footer } from './components/footer/footer'
import { Banner } from './layouts/banner/banner'
import { Gallery } from './layouts/gallery/gallery'

function App() {

  return (
    <>
      <Header />
        <main>
          <Banner />
          <Gallery />

        </main>   
      <Footer />
    </>
  )
}

export default App