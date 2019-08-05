import React, { PureComponent } from 'react'
import { Container } from 'reactstrap'
import { StickyContainer, Sticky } from 'react-sticky'
import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Copyrights from 'components/Copyrights'
import ReactGA from 'react-ga'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/main.scss'

export default class Layout extends PureComponent {
  componentDidMount () {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-138240546-1')
      ReactGA.pageview(document.location.pathname)
    }
  }

  render () {
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
          <meta charSet='utf-8' />
          <meta name='description' content='Plasma Chamber by Cryptoeconomics Lab. Plasma Chamber is a DApps development framework that guarantees security, scalability, and usability utilizing Plasma technology.' />
          <meta property='og:url' content='https://www.cryptoeconomicslab.com' />
          <meta property='og:title' content='Plasma Chamber | Cryptoeconomics Lab' />
          <meta property='og:type' content='website' />
          <meta property='og:description' content='Plasma Chamber by Cryptoeconomics Lab. Plasma Chamber is a DApps development framework that guarantees security, scalability, and usability utilizing Plasma technology.' />
          <meta property='og:image' content='https://www.cryptoeconomicslab.com/static/images/plasma-chamber-logo-vertical.png
' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@cryptoeconlab' />
          <meta property='og:site_name' content='Plasma Chamber | Cryptoeconomics Lab' />

          <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' />
          <link rel='icon' type='image/x-icon' href='/static/images/favicon.ico' />
        </Head>

        <StickyContainer>
          <Sticky topOffset={72}>
            {({
              style,
              isSticky
            }) => (
              <Header sticky={isSticky} style={style} />
            )}
          </Sticky>

          <section className='content'>
            { this.props.children }
          </section>
        </StickyContainer>

        <footer className='footer'>
          <Container>
            <Footer />
            <hr />
            <Copyrights />
          </Container>
        </footer>
      </div>
    )
  }
}
