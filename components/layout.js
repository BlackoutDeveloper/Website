import Navbar from "./Navbar"
import Footer from "./footer"
import Triangulr from "triangulr"
import bg from "./bg"
import React, {useRef, useEffect} from "react"
export default function Layout({children}) {
        return (
                <div>
                        <bg />
                        <Navbar />
                        {children}
                        <Footer />
                </div>
        )
}