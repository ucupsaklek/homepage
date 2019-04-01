import React, { PureComponent, Component } from 'react'
import { Container } from 'reactstrap'
import { StickyContainer, Sticky } from 'react-sticky'
import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Copyrights from 'components/Copyrights'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/main.scss'

export default class Layout extends PureComponent {
  render () {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=1440, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' />
        </Head>

        <StickyContainer>
          <Sticky topOffset={72}>
            {({
              style,
              isSticky,
            }) => (
              <Header sticky={isSticky} style={style}/>
            )}
          </Sticky>

          <section className='content'>
            { this.props.children }
          </section>
        </StickyContainer>


        <footer className='footer'>
          <Container>
            <Footer />
            <hr/>
            <Copyrights />
          </Container>
        </footer>
      </div>
    )
  }
}
