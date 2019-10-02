import React, { Component } from 'react'

import Head from 'next/head'
import Connect from '../src/components/Connect'
import General from '../src/components/General'
import Team from '../src/components/Team'
import Usecase from '../src/components/Usecase'
import ContactUsForm from '../src/components/ContactUsForm'
import Product from '../src/components/Product'
import Framework from '../src/components/Framework'
import Service from '../src/components/Service'
import Video from '../src/components/Video'

class Index extends Component {
  render () {
    return (
      <>
        <Head>
          <title>Plasma Chamber | Cryptoeconomics Lab</title>
        </Head>

        <div id='general-wrapper'>
          <General />
        </div>

        <div id='usecase-wrapper'>
          <Usecase />
        </div>

        <div id='product-wrapper'>
          <Product />
        </div>

        <div id='framework-wrapper'>
          <Framework />
        </div>

        <div id='service-wrapper'>
          <Service />
        </div>

        <div id='video-wrapper'>
          <Video />
        </div>

        <div>
          <Connect />
        </div>

        <div>
          <Team />
        </div>

        <div>
          <ContactUsForm />
        </div>
      </>
    )
  }
}

export default Index
