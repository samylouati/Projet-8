import React from "react"
import { Banner } from "../components/banner/banner"
import { Gallery } from "../layouts/gallery/gallery"
import ImgHome from '../assets/Images/Bannière.png' //pour l'image de la banniere 

export function Home() {
    return (
        <div>
            <Banner image={ImgHome}/>
            <Gallery />
        </div>
    )
}