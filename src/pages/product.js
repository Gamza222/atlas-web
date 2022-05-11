import React from 'react'
import Layout from './components/layout/Layout'
import Benefit from './components/productPageComponents/Benefit/Benefit'
import Product from './components/productPageComponents/OurProduct/Product'
import WeCanDo from './components/productPageComponents/WhatWeCanDo/WeCanDo'

export default function about() {
  return (
    <Layout>
        <main>
            <Product />            
            <WeCanDo />
            <Benefit /> 
        </main>
    </Layout>
  )
}