import React from 'react'
import table from "./book_left_image.jpg"
import cook1 from "./cook_02.jpg"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import tablestyles from "../sass/table.module.scss"
const Cook = () => {
    return(   
        <section className={tablestyles.bookTable}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className={tablestyles.heading}>
                            <h2>Book Your Table Now</h2>
                        </div>
                    </div>
                    <div className="col-md-4 offset-md-2 col-sm-12">
                        <div className="left-image">
                            <img src={table}></img>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="right-info">
                            <h4>Reservation</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
}
export default Cook