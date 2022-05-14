import React from 'react'
import AboutUs from './components/aboutPageComponents/AboutUsSection/AboutUs'
import Story from './components/aboutPageComponents/ourStory/Story'
import Team from './components/aboutPageComponents/OurTeam/Team'
import WeDo from './components/aboutPageComponents/WhatWeDo/WeDo'
import Layout from './components/layout/Layout'
import Truck from './components/TruckSection/Truck'

export default function about() {
  return (
    <Layout>
        <main>
            <AboutUs />
            <Story />
            <Truck />
            <Team />   
        </main>
    </Layout>
  )
}
