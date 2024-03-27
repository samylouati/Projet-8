import React from "react"
import { Header } from "../components/header/header"
import { Banner } from "../layouts/banner/banner"
import { Gallery } from "../layouts/gallery/gallery"
import { Footer } from "../components/footer/footer"

export function Home() {
    return (
        <div className="Home">
            <Header />
            <Banner />
            <Gallery />
            <Footer />
        </div>
    )
}