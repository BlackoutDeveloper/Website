import Navbar from "./Navbar"
import Footer from "./footer"
import Triangulr from "triangulr"
import React, {useRef, useEffect} from "react"
export default function Layout({children}) {
        return (
                <div>
                        <Navbar />
                        {children}
                        <Footer />
                </div>
        )
}