import React from "react"
import JSONData from "../constants/blogs.json"
import blogsStyles from "../sass/blogs.module.scss"
import {Link} from "gatsby"
const Blogs = () => {
  return (
    <section className={blogsStyles.blog}>
      <h2>OUR BLOG POST</h2>
     <div className="container">
        <div className="row">
            {JSONData.content.map((data, index) => {
              return <div className="col-md-6">
                   <div className={blogsStyles.blogsItem}>
                    <img src={data.image}></img>
                      <div className={blogsStyles.date}>26 Oct 2020</div>
                    <div className={blogsStyles.rightContent}>
                    <article key={index}>
                    <h4>{data.title}</h4>  
                      <h4>{data.heading}</h4>
                      <p>{data.text}</p>
                      <Link to="/">Continue Reading</Link>
                    </article> 
                  </div>
                  </div>
              </div>
            })}
          
        </div>
      </div>
       
    </section>
  )
}

export default Blogs
