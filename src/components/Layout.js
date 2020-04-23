import React from "react"
import Navbar from "./Navbar"
import Footer from "../components/Footer"

// import "bootstrap/dist/css/bootstrap.min.css"
// import "../sass/navbar.scss"

const Layout = ({children}) => {
    return(
       <>
       <Navbar/>
       {children}
    
       <Footer/>
       </>
    )
}
export default Layout