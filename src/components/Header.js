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
                file {
                url
                }
            }
            aboutUs {
                logoIcon {
                    file {
                        url
                    }
                }
            }
          }
        }
      }
    `)

    const logotext = query.allContentfulHomePage.nodes[0].logo.file.url
    const logo = query.allContentfulHomePage.nodes[0].aboutUs.logoIcon.file.url

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

    const svg = {
        width: "2rem",
        cursor: "pointer"
    };

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
                            src={`https:${logo}`}
                            alt="logo"
                            width={37}
                            height={32}
                        />
                        <img
                            src={`https:${logotext}`}
                            alt="logo"
                            width={152}
                            height={16}
                        />
                    </div>
                    <nav className="header__right">
                        <ul>
                            {links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url}
                                        className={active[index] ? "active" : ""}
                                        onClick={() => handleActive(index)}>
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
                        <div>
                            <img
                                src={`https:${logo}`}
                                alt="logo"
                                width={37}
                                height={32}
                            />
                            <img
                                src={`https:${logotext}`}
                                alt="logo"
                                width={152}
                                height={16}
                            />
                        </div>
                        <svg
                            style={svg}
                            role="presentation"
                            onClick={() => { setOpen(true) }}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>

                    {open &&
                        <nav>
                            <div className="container">
                                <svg
                                    style={svg}
                                    role="presentation"
                                    onClick={() => { setOpen(false) }}
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <ul>
                                    {links.map((link, index) => (
                                        <li role="presentation" key={index} onClick={() => { setOpen(false) }}>
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
