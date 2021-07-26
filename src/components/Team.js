import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const query = useStaticQuery(graphql`
      {
        allContentfulHomePage {
          nodes {
            teamTitle
            teamMembers {
              name
              tagline {
                tagline
              }
              twitterUrl
              linkedInUrl
              avatarImage {
                fluid(toFormat: WEBP) {
                  src
                }
              }
              position
              contentful_id   
            }
          }
        }
      }
    `)
    const data = query.allContentfulHomePage.nodes[0].teamMembers

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 24L38 24" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 10L38 24L24 38" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        prevArrow: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38 24H10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 38L10 24L24 10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="home-team" id="team">
            <div className="container">
                <header>
                    <h3>{query.allContentfulHomePage.nodes[0].teamTitle}</h3>
                </header>
                <Slider {...settings}>
                    {data.map(member => (
                        <article key={member.contentful_id}>
                            <img src={member.avatarImage.fluid.src} alt="team member" width={285} height={313} />
                            <div className="text">
                                <h4>{member.name}</h4>
                                <p>{member.position}</p>
                            </div>
                        </article>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Hero
