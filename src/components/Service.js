import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Service = () => {
  const query = useStaticQuery(graphql`
      {
      allContentfulHomePage {
        nodes {
          workHours
          serviceTItle
          aboutUs {
            email
            phoneNumber
          }
          serviceItems {
            title
            description {
              description
            }
            icon {
              fluid {
                src
              }
            }
          }
          serviceFoot
          teamTitle
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
                  <img src={`https:${item.icon.fluid.src}`} alt="icon" />
                  <h4>{item.title}</h4>
                  <p>{item.description.description}</p>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#5B4700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </li>
              ))}
            </ul>
            <footer>{data.serviceFoot}</footer>
            <div className="flex-ac-jc">
              <button className="btn-main">Schedule Appointment</button>
            </div>
            <h1>{data.teamTitle}</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
