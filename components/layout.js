import Navbar from "./Navbar"
import Footer from "./footer"
import Background from "./backdrop"
export default function Layout({children}) {
        return (
                <>
                        <div>
                                <Background />
                        </div>
                        <div>
                                <Navbar />
                                {children}
                                <Footer />
                        </div>
                </>
        )
}