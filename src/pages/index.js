import * as React from "react"
import Header from '../components/Header'
import Details from '../components/Details'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Footer from '../components/Footer'
import About from '../components/About'

const IndexPage = () => {
  return (
    <main>
      <Details />
      <Header />
      <Hero />
      <Service />
      <About />
      <Footer />
    </main>
  )
}

export default IndexPage
