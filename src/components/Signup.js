import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import signupstyles from "../sass/signup.module.scss"
const Signup = () => {
    return(   
       <section className={signupstyles.signUp}>    
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className={signupstyles.heading}>
                        <h2>Signup for our newsletters</h2>
                    </div>
                </div>
            </div>
        </div>
        </section>  
      )
}
export default Signup