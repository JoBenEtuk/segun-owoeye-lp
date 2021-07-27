import React, { useRef } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import { useOnScreen } from "../hooks"

const Service = () => {
  const query = useStaticQuery(graphql`
      {
      allContentfulHomePage {
        nodes {
          serviceTItle
          serviceItems {
            title
            description {
              description
            }
            icon {
              file {
                url
              }
            }
          }
          serviceFoot
        }
      }
    }
  `)

  const data = query.allContentfulHomePage.nodes[0]

  //  FRAMER ANIMATIONS
  const ref = useRef()
  const inView = useOnScreen(ref);

  return (
    <motion.section
      className="service"
      id="services"
      ref={ref}
      initial={{ opacity: 0, x: "90vw" }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : "90vw" }}
      transition={{ duration: 1 }}>
      <div className="service__body">
        <div className="container">
          <h3>{data.serviceTItle}</h3>
          <div className="service__list">
            <ul>
              {data.serviceItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  <img src={`https:${item.icon.file.url}`} alt="icon" />
                  <h4>{item.title}</h4>
                  <p>{item.description.description}</p>
                </motion.li>
              ))}
            </ul>
            <footer>{data.serviceFoot}</footer>
            <div className="flex-ac-jc">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn-main">Schedule Appointment</motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Service
