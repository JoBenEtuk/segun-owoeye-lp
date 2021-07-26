import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Hero = () => {
  const query = useStaticQuery(graphql`
    {
      allContentfulHomePage {
        nodes {
          introduction {
            backgroundImage {
              fluid(toFormat: WEBP) {
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
    <section className="home-hero" id="home">
      <div className="container">
        <div className="flex-ac-jb">
          <div className="home-hero-left">
            <h1>{data.title}</h1>
            <h3>{data.description.description}</h3>
            <button className="btn-main">Schedule Appointment</button>
          </div>
          <div className="home-hero-right">
            <img src={data.backgroundImage.fluid.src} alt="" width={751} height={546} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
