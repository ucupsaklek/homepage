import React, { Component } from 'react'
import Head from 'next/head'
import { Container,  Row, Col,Jumbotron, Media, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap'
import ContactUsForm from '../src/components/ContactUsForm'

class Company extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <React.Fragment>
        <Head>
          <title>Plasma Chamber | Company</title>
          <meta property='og:title' content={'Plasma Chamber | Company'} />
        </Head>

        <Container>
          <div className="divider"></div>
        </Container>

        <div className="company">
          <div className="company-bg"></div>
          <Container>
            <Jumbotron className="title">
              <h1>Implement the decentralized society with social acceptability and social scalability</h1>
              <p className="lead">It's easy to launch unscalable, anti-social software without liability. But our mission is to build scalable, social-good software with cryptoeconomic techniques.</p>
            </Jumbotron>

            <div className="about about-us">
              <div className="body">
                <h1>
                  Cypherpunk + Liability = Us
                </h1>
                <p>
                  Mass adoption of public blockchain is a hard problem. As we look into each one's life, current society is well coordinated to deal with various issues. Just claiming to disrupt the market with decentralized tech is easy, but real mass adoption will come from ethical thoughts of qualified hackers. This is our way.
                </p>
              </div>
              <div className="image">
                <Media object src="/static/images/banner.jpg" alt="Generic placeholder image" />
              </div>
            </div>

            <Jumbotron className="heading heading-guarantee">
              <h1>Usable and Secure, Both Guaranteed </h1>
              <p className="lead">Build your scalable, secure DApps with Plasma Chamber: a DApps development framework with Plasma enbedded in.</p>
            </Jumbotron>

            <Row className="guarantee">
              <Col xs={12} md={6} className="guarantee-items">
                <Media>
                  <Media left>
                    <Media object src="/static/images/banner.jpg" alt="Generic placeholder image" />
                  </Media>
                  <Media body>
                    <Media heading>
                      Point of Sale Software/Money Transfer Application
                    </Media>
                    Whether you're looking to bill customers on a recurring basis or simply accept payments, do it all with a fully secured platform that can support fast and in-person payments with Plasma.
                  </Media>
                </Media>

                <Media>
                  <Media left>
                    <Media object src="/static/images/banner.jpg" alt="Generic placeholder image" />
                  </Media>
                  <Media body>
                    <Media heading>
                      E-Commerce/Online C2C Merketplace
                    </Media>
                    Building your own decentralized merketplace as an escrow without a lisence is now available on Plasma Chamber.
                  </Media>
                </Media>


                <Media>
                  <Media left>
                    <Media object src="/static/images/banner.jpg" alt="Generic placeholder image" />
                  </Media>
                  <Media body>
                    <Media heading>
                      Off-chain Order Book DEX
                    </Media>
                    Build DEX, connect it to order books, and 100+ different tokens are swappable on Plasma Chamber
                  </Media>
                </Media>
              </Col>
              <Col xs={12} md={6} className="guarantee-image">
                <Media object src="/static/images/banner.jpg" alt="Generic placeholder image" />
              </Col>
            </Row>

            <Jumbotron className="heading heading-team">
              <h1>Meet Our Team</h1>
              <p className="lead">Cryptoeconomics Lab is a team of distributed entrepreneurs, engineers, and blockchain experts. Our mission is to enable the sharing economy on the decentralized web.</p>
            </Jumbotron>

            <div className="teams">
              <Card>
                <CardImg top width="100%" src="/static/images/banner.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Taku Kataoka</CardTitle>
                  <CardSubtitle>CEO</CardSubtitle>
                  <CardText>Prior to CEL, Taku Kataoka founded a real estate tech startup, later merged by Livesense. He still runs a Japanese restaurant in Jakarta.</CardText>
                </CardBody>
              </Card>

              <Card>
                <CardImg top width="100%" src="/static/images/banner.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Shogo Ochiai</CardTitle>
                  <CardSubtitle>CTP</CardSubtitle>
                  <CardText>Shogo was the former CTO of an Indonesian fashion e-commerce app, and is a researcher of Economics at the University of Tokyo.</CardText>
                </CardBody>
              </Card>

              <Card>
                <CardImg top width="100%" src="/static/images/banner.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Syuhei Hiya</CardTitle>
                  <CardSubtitle>Developer & Researcher</CardSubtitle>
                  <CardText>Syuhei has been the CEO of Firebase competitor PaaS, and a tech guru at the same time. He was also a MITOU Super Creator in 2010, for creating the visual programming language FLOWer.</CardText>
                </CardBody>
              </Card>

              <Card>
                <CardImg top width="100%" src="/static/images/banner.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Yuriko Nishijima</CardTitle>
                  <CardSubtitle>Developer & Researcher</CardSubtitle>
                  <CardText>Yuriko researches Plasma and focuses on the production of the blockchain technology, while contributing with explanatory articles on CEL’s Medium publication.</CardText>
                </CardBody>
              </Card>
            </div>
          </Container>

          <div className="contact" id="#contact">
            <div className="message-bg"></div>
            <Container>
              <Row>
                <Col xs={12} md={12} lg={5}>
                  <ContactUsForm />
                </Col>
                <Col xs={12} md={12} lg={7}>
                  <div className="banner illus illus-message">
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Company
