import React from "react"
import sectionstyles from "../sass/section.module.scss"
import { Link } from "gatsby"

const Section = () => {
    return(
       <section className={sectionstyles.banner} >
           <div className="row">
                <div className="col-12">
                    <h4>Here you can find delecious foods</h4>
                    <h2>Asian Restaurant</h2>
                    <p>Quisque nec nibh id lacus fringilla eleifend sed sit amet sem. Donec lectus odio, mollis a nisl non, tempor interdum nisl.</p>
                    <div className={sectionstyles.primaryButton}>
                        <Link to="/" className={sectionstyles.primaryLink}>Order Right Now</Link>
                    </div>
                </div>
           </div>
       </section>
    )
}
export default Section