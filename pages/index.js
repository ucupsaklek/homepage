import React, { Component } from 'react'

import Head from 'next/head'
import Connect from '../src/components/Connect'
import General from '../src/components/General'
import Team from '../src/components/Team'
import Usecase from '../src/components/Usecase'
import ContactUsForm from '../src/components/ContactUsForm'

class Index extends Component {
  render () {
    return (
      <>
        <Head>
          <title>Plasma Chamber | Cryptoeconomics Lab</title>
        </Head>

        <div>
          <General />
        </div>

        <div>
          <Usecase />
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
