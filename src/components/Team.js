import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Hero = () => {
//   const query = useStaticQuery(graphql`
//     {
//       allContentfulHomePage {
//         nodes {
//           introduction {
//             backgroundImage {
//               fluid {
//                 src
//               }
//             }
//             description {
//               description
//             }
//             title
//           }
//         }
//       }
//     }
//   `)
//   const data = query.allContentfulHomePage.nodes[0].introduction

  return (
    <section className="home-team" id="team">
      <div className="container">
          <h3>Meet our formidable team</h3>
      </div>
    </section>
  )
}

export default Hero
