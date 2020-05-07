import React from 'react'
import cook from "./cook_01.jpg"
import cook1 from "./cook_02.jpg"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import cookstyles from "../sass/cook.module.scss"
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
const Images = graphql `
query {
    fixed:file(relativePath: { eq: "cook_01.jpg" }) {
      childImageSharp {
       fixed(width:285,height:214){
         ...GatsbyImageSharpFixed
        }
      }
    }
  fluid:file(relativePath:{eq:"cook_02.jpg"}){
    childImageSharp{
      fluid{
         ...GatsbyImageSharpFluid_tracedSVG
       }
      }
    }
  }


`
const Cook = () => {
    const data = useStaticQuery(Images);
    return(
       <section className={cookstyles.cookSection}>
           <div className="container">
                <div className="row">
                    <div className="col-md-3 offset-md-1">
                        <div className={cookstyles.firstImage}>
                            {/* <img src={cook}></img> */}
                            <Img fixed={data.fixed.childImageSharp.fixed} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={cookstyles.cookContent}>
                            <h4>We cook delecious</h4>
                            <div className={cookstyles.contactContent}>
                                <span>You can call us on:</span>
                                <h6>+ 1234 567 8910</h6>
                                    
                            </div>
                            <span>or</span>
                            <div className={cookstyles.primaryWhiteButton}>
                                <Link to="/">Order  Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className={cookstyles.secondImage}>
                            <Img fluid={data.fluid.childImageSharp.fluid}/>
                        </div>
                    </div>
               </div>
            
           </div>
           
       </section>
    )
}
export default Cook