import React from "react"
import { Header } from "../layouts/header/header"
import { Banner } from "../components/banner/banner"
import { Gallery } from "../layouts/gallery/gallery"
import { Footer } from "../layouts/footer/footer"
import ImgHome from '../assets/Images/Bannière.png' //pour l'image de la banniere 

export function Home() {
    return (
        <div className="Home">
            <Header />
            <Banner image={ImgHome}/>
            <Gallery />
            <Footer />
        </div>
    )
}