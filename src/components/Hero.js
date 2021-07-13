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

  return (
    <section className="home-hero" style={{ backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.5) 100%, rgba(10, 10, 10, 0.5)100%), url(https:${data.backgroundImage.fluid.src})` }}>
      <div className="container">
        <h1>{data.title}</h1>
        <h3>{data.description.description}</h3>
        <button className="btn-main">Schedule Appointment</button>
      </div>
    </section>
  )
}

export default Hero
