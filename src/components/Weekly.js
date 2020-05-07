import React from "react"
import JSONData from "../constants/news.json"
import weeklystyle from "../sass/weekly.module.scss"
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
const Images = graphql `
query {
  fluid:file(relativePath:{eq:"breakfast_item.jpg"}){
    childImageSharp{
      fluid{
         ...GatsbyImageSharpFluid_tracedSVG
       }
      }
    }
  }


`
const Weekly = () => {
   const data1 = useStaticQuery(Images);
  return (
    <section className={weeklystyle.featuredFood}>
      <h2 className={weeklystyle.h2}>WEEKLY FEATURED FOOD</h2>
     <div className="container">
       <div className="row">
          <div className={weeklystyle.inner}>
              {JSONData.content.map((data, index) => {
                return <div className="col-md-4"> 
                    <div className={weeklystyle.content}>
                    <article key={index}>
                   <h3>{data.title}</h3>
                  <img src={data.image}></img>
                  {/* <Img fluid={data.fluid.childImageSharp.fluid}/> */}
                  <div className={weeklystyle.content}>
                    <h4>{data.heading}</h4>
                    <p >{data.text}</p>   
                  </div>
            
            </article>
          </div>
        </div>
              })}
            </div>
        </div>
      </div>
       
    </section>
  )
}

export default Weekly
