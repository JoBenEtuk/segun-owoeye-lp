import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Hero = () => {
    const query = useStaticQuery(graphql`
    {
      allContentfulHomePage {
        nodes {
          introduction {
            backgroundImage {
              fluid {
                src
              }
            }
            description {
              description
            }
            title
          }
        }
      }
    }
  `)
    const data = query.allContentfulHomePage.nodes[0].introduction
    console.log(data)
    return (
        <div className="home-hero">
            <div className="container">
                <img
                    src={`https:${data.backgroundImage.fluid.src}`}
                    alt="background image"
                />
                <h1>{data.title}</h1>
                <h3>{data.description.description}</h3>
                <button>Schedule Appointment</button>
            </div>
        </div>
    )
}

export default Hero
