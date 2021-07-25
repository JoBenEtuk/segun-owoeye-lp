import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

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

  return (
    <section className="service" id="services">
      <div className="service__body">
        <div className="container">
          <h3>{data.serviceTItle}</h3>
          <div className="service__list">
            <ul>
              {data.serviceItems.map((item, index) => (
                <li key={index}>
                  <img src={`https:${item.icon.file.url}`} alt="icon" />
                  <h4>{item.title}</h4>
                  <p>{item.description.description}</p>
                </li>
              ))}
            </ul>
            <footer>{data.serviceFoot}</footer>
            <div className="flex-ac-jc">
              <button className="btn-main">Schedule Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
