import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

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
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    `)
    const data = query.allContentfulHomePage.nodes[0].aboutUs;

    return (
        <section className="about" id="about">
            <div className="container">
                <article>
                    <img src={`https:${data.Image.fluid.src}`} alt="" width={350} height={419} />
                    <section className="about__main">
                        <div className="about__main__text">
                            <h3>{data.heading}</h3>
                            <h5>{data.biography.biography.length > 193 ? data.biography.biography.substr(0, 193) + "..." : data.biography.biography}</h5>
                            <p>{data.disclaimer.disclaimer.length > 200 ? data.disclaimer.disclaimer.substr(0, 200) + "..." : data.disclaimer.disclaimer}</p>
                        </div>

                        <footer className="flex-ac-jb">
                            <div className="social-links">
                                <h5>Follow us on:</h5>
                                <div className="social-links__item">
                                    <a href={data.twitterUrl} rel="noreferrer noopenner" target="_blank">
                                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0)">
                                                <path d="M15.3332 1.99999C14.6948 2.45031 13.9879 2.79473 13.2398 3.01999C12.8383 2.55833 12.3047 2.23112 11.7112 2.08261C11.1177 1.9341 10.4928 1.97145 9.92122 2.18963C9.34961 2.4078 8.8588 2.79626 8.51516 3.30247C8.17152 3.80868 7.99164 4.40821 7.99984 5.01999V5.68666C6.82826 5.71704 5.66735 5.4572 4.62051 4.93029C3.57367 4.40338 2.67338 3.62575 1.99984 2.66666C1.99984 2.66666 -0.666829 8.66666 5.33317 11.3333C3.96019 12.2653 2.32461 12.7326 0.666504 12.6667C6.6665 16 13.9998 12.6667 13.9998 4.99999C13.9992 4.81429 13.9814 4.62905 13.9465 4.44666C14.6269 3.77565 15.1071 2.92847 15.3332 1.99999V1.99999Z" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>

                                    <a href={data.instagramUrl} rel="noreferrer noopenner" target="_blank">
                                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.3335 1.33334H4.66683C2.82588 1.33334 1.3335 2.82573 1.3335 4.66668V11.3333C1.3335 13.1743 2.82588 14.6667 4.66683 14.6667H11.3335C13.1744 14.6667 14.6668 13.1743 14.6668 11.3333V4.66668C14.6668 2.82573 13.1744 1.33334 11.3335 1.33334Z" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.6668 7.57999C10.7491 8.13482 10.6543 8.70146 10.396 9.19933C10.1376 9.6972 9.7289 10.1009 9.22788 10.3531C8.72687 10.6053 8.1591 10.6931 7.60532 10.6039C7.05155 10.5148 6.53997 10.2534 6.14336 9.85676C5.74674 9.46015 5.48529 8.94857 5.39618 8.3948C5.30707 7.84102 5.39484 7.27325 5.64701 6.77224C5.89919 6.27122 6.30292 5.86248 6.80079 5.60415C7.29865 5.34582 7.8653 5.25105 8.42013 5.33332C8.98608 5.41724 9.51003 5.68096 9.91459 6.08553C10.3192 6.49009 10.5829 7.01404 10.6668 7.57999Z" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M11.6665 4.33334H11.6732" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>

                                    <a href={data.facebookUrl} rel="noreferrer noopenner" target="_blank">
                                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9998 1.33334H9.99984C9.11578 1.33334 8.26794 1.68453 7.64281 2.30965C7.01769 2.93478 6.6665 3.78262 6.6665 4.66668V6.66668H4.6665V9.33334H6.6665V14.6667H9.33317V9.33334H11.3332L11.9998 6.66668H9.33317V4.66668C9.33317 4.48987 9.40341 4.3203 9.52843 4.19527C9.65346 4.07025 9.82303 4.00001 9.99984 4.00001H11.9998V1.33334Z" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>

                                    <a href={data.linkedInUrl} rel="noreferrer noopenner" target="_blank">
                                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.00016 6H1.3335V14H4.00016V6Z" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.6665 5.33334C11.7274 5.33334 12.7448 5.75477 13.4949 6.50492C14.2451 7.25506 14.6665 8.27248 14.6665 9.33334V14H11.9998V9.33334C11.9998 8.97972 11.8594 8.64058 11.6093 8.39053C11.3593 8.14049 11.0201 8.00001 10.6665 8.00001C10.3129 8.00001 9.97374 8.14049 9.7237 8.39053C9.47365 8.64058 9.33317 8.97972 9.33317 9.33334V14H6.6665V9.33334C6.6665 8.27248 7.08793 7.25506 7.83808 6.50492C8.58822 5.75477 9.60564 5.33334 10.6665 5.33334V5.33334Z" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2.66683 4.00001C3.40321 4.00001 4.00016 3.40306 4.00016 2.66668C4.00016 1.9303 3.40321 1.33334 2.66683 1.33334C1.93045 1.33334 1.3335 1.9303 1.3335 2.66668C1.3335 3.40306 1.93045 4.00001 2.66683 4.00001Z" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <button>
                                Read More
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 13L7 7L1 1" stroke="#5b4700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </footer>
                    </section>
                </article>
            </div>
        </section>
    )
}

export default About
