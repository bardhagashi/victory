import React from 'react'
import { FaFacebookF} from "react-icons/fa"
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRss } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import footerstyles from "../sass/footer.module.scss"
import { Link } from "gatsby"
const Footer = () => {
    return (
       <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <p>Copyright © 2020 Victory Template</p>
                </div>
                <div className="col-md-4">
                    <ul className={footerstyles.socialIcons}>
                        <li><Link to="/"><FaFacebookF/></Link></li>
                        <li><Link to="/"><FaTwitter /></Link></li> 
                        <li><Link to="/"><FaLinkedinIn/></Link></li>
                        <li><Link to="/"><FaRss/></Link></li>
                        <li><Link to="/"><FaDribbble/></Link></li>   
                    </ul>
                </div>
                <div className="col-md-4">
                    <p>Design: TemplateMo</p>
                </div>
            </div>
        </div>
        </footer>  
    )
}
export default Footer