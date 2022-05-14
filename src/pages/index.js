import * as React from "react"
import About from "./components/About/About"
import WeDo from "./components/aboutPageComponents/WhatWeDo/WeDo"
import Believe from "./components/BileveSection/Believe"
import ForCustomers from "./components/forCustomers/ForCustomers"
import Fundamentally from "./components/Fundamentally/Fundamentally"
import Layout from "./components/layout/Layout"
import Truck from "./components/TruckSection/Truck"

const IndexPage = () => {
  return (
    <Layout>
      <WeDo />  
      <Fundamentally /> 
      <ForCustomers />
      <About />
    </Layout>
  )
}

export default IndexPage
