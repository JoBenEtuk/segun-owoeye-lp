import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from "gatsby"

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
            url: '/#home'
        },
        {
            title: 'About',
            url: '/#about'
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
            title: 'Contact',
            url: '/#contact'
        },
    ]

    const [active, setActive] = useState(new Array(links.length).fill(false));
    const handleActive = (position) => {
        const updatedActive = active.map((item, index) =>
            index === position ? true : false
        );
        setActive(updatedActive);
    }

    useEffect(() => {
        setActive([true, false, false, false, false]);
    }, [])

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
                                <a href={link.url} className={active[index] ? "active" : ""} onClick={() => handleActive(index)}>
                                    <span>{link.title}</span>
                                </a>
                            </li>

                        ))}
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header
