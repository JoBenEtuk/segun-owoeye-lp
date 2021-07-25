import * as React from "react"
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Details from '../components/Details'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Footer from '../components/Footer'
import About from '../components/About'

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Segun Owoeye landing page" />
        <meta name="keywords" content="Legal, Law" />
        <meta name="author" content="Etuk Josiah Benjamin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Segun Owoeye LP</title>
      </Helmet>
      <Details />
      <Header />
      <Hero />
      <About />
      <Service />
      <Footer />
    </main>
  )
}

export default IndexPage
