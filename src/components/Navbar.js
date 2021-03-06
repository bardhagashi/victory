import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "../sass/navbar.module.scss"
// import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
const Navbar = () => {
    const [isOpen,setNav] = (useState(false))
    const toggleNav = () => {
        setNav(isOpen => !isOpen)
    }
    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
               <div className={styles.navHeader}>
                   <Link to="#" className={styles.navbarBrand}>Victory</Link>
                   <button type="button" className={styles.logoBtn} onClick={toggleNav}>
                       <FaAlignRight className={styles.logoIcon}/>
                   </button>
               </div>
              </div> 
               <ul
                className={
                    isOpen
                    ? `${styles.navLinks} ${styles.showNav}`
                    : `${styles.navLinks}`
                }
                >
                 {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })}
                </ul>
           
        </nav>
    )
}
export default Navbar