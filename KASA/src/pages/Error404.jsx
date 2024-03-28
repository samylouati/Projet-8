import React from "react"
import { Header } from "../layouts/header/header"
import { Error } from "../components/404/404"
import { Footer } from "../layouts/footer/footer"



export function Error404() {
    return (
        <div>
            <Header />
            <Error />
            <Footer />
        </div>
    )
}