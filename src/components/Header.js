import React, { useState, useEffect } from 'react'
import { useMediaQuery } from "../hooks"
import { useStaticQuery, graphql, navigate } from "gatsby"

const Header = () => {
    const isTablet = useMediaQuery("(min-width: 913px)")
    const [open, setOpen] = useState(false)
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
        navigate('/')
    }, [])

    return (
        <>
            {isTablet && <header className="header">
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
            </header>}

            {!isTablet && <header className="header mobile">
                <div className="container">
                    <div className="header__top flex-ac-jb">
                        <img
                            src={`https:${data}`}
                            alt="logo"
                        />
                        <svg onClick={() => { setOpen(true) }} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>

                    {open &&
                        <nav>
                            <div className="container">
                                <svg onClick={() => { setOpen(false) }} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <ul>
                                    {links.map((link, index) => (
                                        <li key={index} onClick={() => { setOpen(false) }}>
                                            <a href={link.url} className={active[index] ? "active" : ""} onClick={() => handleActive(index)}>
                                                <span>{link.title}</span>
                                            </a>
                                        </li>

                                    ))}
                                </ul>
                            </div>
                        </nav>}

                </div>
            </header>}
        </>
    )
}

export default Header
