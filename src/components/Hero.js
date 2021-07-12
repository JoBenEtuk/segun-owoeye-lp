import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Hero = () => {
    const query = useStaticQuery(graphql`
      {
        allContentful01Introduction {
          nodes {
            title
            description {
              description
            }
            backgroundImage {
              fluid {
                src
              }
            }
          }
        }
      }
    `)
    const data = query.allContentful01Introduction.nodes[0]
    console.log(data)
    return (
        <div className="home-hero">
            <div className="container">
                <img
                    src={`https:${data.backgroundImage.fluid.src}`}
                    alt=""
                />
                <h1>{data.title}</h1>
                <h3>{data.description.description}</h3>
                <button>Schedule Appointment</button>
            </div>
        </div>
    )
}

export default Hero
