import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql, navigate } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "../hooks"

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
            {isTablet && <motion.header
                className="header"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ type: "tween", delay: 0.1 }}>
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
                                <motion.li
                                    key={index}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}>
                                    <a href={link.url}
                                        className={active[index] ? "active" : ""}
                                        onClick={() => handleActive(index)}>
                                        <span>{link.title}</span>
                                    </a>
                                </motion.li>

                            ))}
                        </ul>
                    </nav>

                </div>
            </motion.header>}

            {!isTablet && <motion.header
                className="header mobile"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ type: "tween", delay: 0.1 }}>
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
                    <AnimatePresence>
                        {open &&
                            <motion.nav
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{ type: "tween" }}>
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
                                            <motion.li
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: `${index / 4}`, type: "spring" }}
                                                role="presentation"
                                                key={index}
                                                onClick={() => { setOpen(false) }}>
                                                <a href={link.url} className={active[index] ? "active" : ""} onClick={() => handleActive(index)}>
                                                    <span>{link.title}</span>
                                                </a>
                                            </motion.li>

                                        ))}
                                    </ul>
                                </div>
                            </motion.nav>}
                    </AnimatePresence>
                </div>
            </motion.header>}
        </>
    )
}

export default Header
