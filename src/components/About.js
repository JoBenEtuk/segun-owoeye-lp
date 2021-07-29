import React, { useRef } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import { useOnScreen } from "../hooks"

const About = () => {
    const query = useStaticQuery(graphql`
      {
        allContentfulHomePage {
          nodes {
            aboutUs {
              linkedInUrl
              instagramUrl
              facebookUrl
              twitterUrl
              heading
              disclaimer {
                disclaimer
              }
              biography {
                biography
              }
              Image {
                fluid(toFormat: WEBP) {
                  src
                }
              }
            }
          }
        }
      }
    `)
    const data = query.allContentfulHomePage.nodes[0].aboutUs;

    //  FRAMER ANIMATIONS
    const ref = useRef()
    const inView = useOnScreen(ref);

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, x: "-90vw" }}
            animate={{ opacity: inView ? 1 : 0, x: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            className="about"
            id="about">
            <div className="container">
                <article>
                    <img src={`https:${data.Image.fluid.src}`} alt="" width={350} height={419} />
                    <section className="about__main">
                        <div className="about__main__text">
                            <h4>{data.heading}</h4>
                            <h5>{data.biography.biography.length > 193 ? data.biography.biography.substr(0, 193) + "..." : data.biography.biography}</h5>
                            <p>{data.disclaimer.disclaimer.length > 200 ? data.disclaimer.disclaimer.substr(0, 200) + "..." : data.disclaimer.disclaimer}</p>
                        </div>

                        <footer className="flex-ac-jb">
                            <div className="social-links">
                                <a aria-label="twitter" href={data.twitterUrl} rel="noreferrer noopenner" target="_blank">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23 2.99998C22.0424 3.67546 20.9821 4.19209 19.86 4.52999C19.2577 3.8375 18.4573 3.34668 17.567 3.12391C16.6767 2.90115 15.7395 2.95718 14.8821 3.28444C14.0247 3.6117 13.2884 4.19439 12.773 4.9537C12.2575 5.71302 11.9877 6.61232 12 7.52998V8.52998C10.2426 8.57555 8.50127 8.1858 6.93101 7.39543C5.36074 6.60506 4.01032 5.43862 3 3.99998C3 3.99998 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.49998C20.9991 7.22144 20.9723 6.94358 20.92 6.66999C21.9406 5.66348 22.6608 4.3927 23 2.99998V2.99998Z" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>

                                <a aria-label="Instagram" href={data.instagramUrl} rel="noreferrer noopenner" target="_blank">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.0002 11.37C16.1236 12.2022 15.9815 13.0522 15.594 13.799C15.2065 14.5458 14.5933 15.1514 13.8418 15.5297C13.0903 15.9079 12.2386 16.0396 11.408 15.9059C10.5773 15.7723 9.80996 15.3801 9.21503 14.7852C8.62011 14.1902 8.22793 13.4229 8.09426 12.5922C7.9606 11.7615 8.09226 10.9099 8.47052 10.1584C8.84878 9.40685 9.45438 8.79374 10.2012 8.40624C10.948 8.01874 11.7979 7.87658 12.6302 8C13.4791 8.12588 14.265 8.52146 14.8719 9.1283C15.4787 9.73515 15.8743 10.5211 16.0002 11.37Z" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17.5 6.5H17.51" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>

                                <a aria-label="facebook" href={data.facebookUrl} rel="noreferrer noopenner" target="_blank">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>

                                <a aria-label="linkedin" href={data.linkedInUrl} rel="noreferrer noopenner" target="_blank">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9H2V21H6V9Z" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}>
                                Read More
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 13L7 7L1 1" stroke="#5b4700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.button>
                        </footer>
                    </section>
                </article>
            </div>
        </motion.section>
    )
}

export default About
