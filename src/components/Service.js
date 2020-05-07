import React from 'react'
import service from "./cook_breakfast.png"
import service1 from "./cook_lunch.png"
import service2 from "./cook_dinner.png"
import service3 from "./cook_dessert.png"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import servicestyles from "../sass/service.module.scss"

const Service = () => {
    return(  
        <section className={servicestyles.services}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                      <div className={servicestyles.serviceItem}>
                          <Link to="/">
                            <img src={service}></img>
                            <h4>Breakfast</h4>
                          </Link>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                      <div  className={servicestyles.serviceItem1}>
                          <Link  to="/">
                            <img src={service1}></img>
                            <h4>Lunch</h4>
                          </Link>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                      <div  className={servicestyles.serviceItem}>
                          <Link  to="/">
                            <img src={service2}></img>
                            <h4>Dinner</h4>
                          </Link>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                      <div  className={servicestyles.serviceItem}>
                          <Link  to="/">
                            <img src={service3}></img>
                            <h4>Desserts</h4>
                          </Link>
                      </div>
                    </div>
                </div>
            </div>
        </section>
      )
}
export default Service