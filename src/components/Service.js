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
      <div className="service__header">
        <ul>
          <li>
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 6V12L16 14" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
                            Working Hours
                        </span>
            <p>{data.workHours}</p>
          </li>

          <li>
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 6L12 13L2 6" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
                            E-mail
                        </span>
            <p>{data.aboutUs.email}</p>
          </li>
          <li>
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0499 5C16.0267 5.19057 16.9243 5.66826 17.628 6.37194C18.3317 7.07561 18.8094 7.97326 18.9999 8.95M15.0499 1C17.0792 1.22544 18.9715 2.13417 20.4162 3.57701C21.8608 5.01984 22.7719 6.91101 22.9999 8.94M21.9999 16.92V19.92C22.0011 20.1985 21.944 20.4742 21.8324 20.7293C21.7209 20.9845 21.5572 21.2136 21.352 21.4019C21.1468 21.5901 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9451 19.8199 21.92C16.7428 21.5856 13.7869 20.5341 11.1899 18.85C8.77376 17.3147 6.72527 15.2662 5.18993 12.85C3.49991 10.2412 2.44818 7.27099 2.11993 4.18C2.09494 3.90347 2.12781 3.62476 2.21643 3.36162C2.30506 3.09849 2.4475 2.85669 2.6347 2.65162C2.82189 2.44655 3.04974 2.28271 3.30372 2.17052C3.55771 2.05833 3.83227 2.00026 4.10993 2H7.10993C7.59524 1.99522 8.06572 2.16708 8.43369 2.48353C8.80166 2.79999 9.04201 3.23945 9.10993 3.72C9.23656 4.68007 9.47138 5.62273 9.80993 6.53C9.94448 6.88792 9.9736 7.27691 9.89384 7.65088C9.81408 8.02485 9.6288 8.36811 9.35993 8.64L8.08993 9.91C9.51349 12.4135 11.5864 14.4864 14.0899 15.91L15.3599 14.64C15.6318 14.3711 15.9751 14.1858 16.3491 14.1061C16.723 14.0263 17.112 14.0555 17.4699 14.19C18.3772 14.5286 19.3199 14.7634 20.2799 14.89C20.7657 14.9585 21.2093 15.2032 21.5265 15.5775C21.8436 15.9518 22.0121 16.4296 21.9999 16.92Z" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
                            Phone
                        </span>
            <p>{data.aboutUs.phoneNumber}</p>
          </li>
        </ul>
      </div>

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
