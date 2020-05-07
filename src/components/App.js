import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby"
import appstyles from "../sass/app.module.scss"
const App = () => {
    return(    
       <section className={appstyles.getApp}>
           <div className="container">
               <div className="row">
                   <div className="col-12">
                        <div className={appstyles.heading}>
                            <h2>Get application for your phone</h2>
                        </div>
                   </div>
                  <div className="col-12">
                    <div  className={appstyles.primaryWhiteButton}>
                        <Link to="/">Download now</Link> 
                    </div>
                  </div>
                   
               </div>
           </div>
       </section>
     )
}
export default App