import Navbar from "./Navbar"
import Footer from "./footer"
import Triangulr from "triangulr"
import bg from "./bg"
import React, {useRef, useEffect} from "react"
import Background from "./backdrop"
export default function Layout({children}) {
        return (
                <div>
                        <Background />
                        <Navbar />
                        {children}
                        <Footer />
                </div>
        )
}