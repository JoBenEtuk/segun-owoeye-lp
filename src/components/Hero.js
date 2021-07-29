import React, { useRef } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import { useOnScreen } from "../hooks"

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

  //  FRAMER ANIMATIONS
  const ref = useRef()
  const inView = useOnScreen(ref);

  return (
    <section className="home-hero" id="home">
      <motion.div
        className="container"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ type: "tween", delay: 0.2, duration: 0.8 }}>
        <div className="flex-ac-jb">
          <div className="home-hero-left">
            <h1>{data.title}</h1>
            <h3>{data.description.description}</h3>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn-main">Schedule Appointment</motion.button>
          </div>
          <div className="home-hero-right">
            <img src={data.backgroundImage.fluid.src} alt="" width={751} height={546} />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
