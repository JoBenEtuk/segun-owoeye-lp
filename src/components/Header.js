import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = () => {
    const query = useStaticQuery(graphql`
      {
        allContentfulHomePage {
          nodes {
            logo {
              fluid {
                src
              }
            }
          }
        }
      }
    `)
    const data = query.allContentfulHomePage.nodes[0].logo.fluid.src

    const links = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'Services',
            url: '/#services'
        },
        {
            title: 'Team',
            url: '/#team'
        },
        {
            title: 'About',
            url: '/#about'
        },
        {
            title: 'Contact',
            url: '/#contact'
        },
    ]

    return (
        <header className="header">
            <div className="container flex-ac-jb">
                <div className="header__left">
                    <img
                        src={`https:${data}`}
                        alt="logo"
                    />
                </div>
                <nav className="header__right">
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}>
                                <AnchorLink to={link.url}>
                                    <span>{link.title}</span>
                                </AnchorLink>
                            </li>

                        ))}
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header
