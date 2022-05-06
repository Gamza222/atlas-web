import * as React from "react"
import About from "./components/About/About"
import Believe from "./components/BileveSection/Believe"
import Fundamentally from "./components/Fundamentally/Fundamentally"
import Layout from "./components/layout/Layout"
import Truck from "./components/TruckSection/Truck"

const IndexPage = () => {
  return (
    <Layout>
      <Believe />
      <Truck />
      <Fundamentally /> 
      <About />
    </Layout>
  )
}

export default IndexPage
