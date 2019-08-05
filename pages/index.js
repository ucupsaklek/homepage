import React from 'react'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  Col,
  Container,
  Jumbotron,
  Media,
  Row
} from 'reactstrap'
import Head from 'next/head'
import RoadmapList from '../src/components/RoadmapList'
import AccountList from '../src/components/AccountList'
import ContactUsForm from '../src/components/ContactUsForm'
import SubscribeNews from '../src/components/SubscribeNews'

export default () => (
  <>
    <Head>
      <title>Plasma Chamber | Cryptoeconomics Lab</title>
    </Head>

    <div id='top' className='general'>
      <div className='head-bg' />
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <Jumbotron>
              <div className='intro'>
                <div className='desc'>
                  <span>Introducing <b>Plasma Chamber</b></span>
                </div>
              </div>

              <h1>General Purpose Plasma</h1>
              <p className='lead'>Plasma Chamber is a DApps development framework that guarantees security, scalability, and usability utilizing Plasma technology.</p>
              <div className='lead'>
                <ButtonGroup>
                  <Button color='default'>
                    <a href='https://github.com/cryptoeconomicslab/plasma-chamber' target='_blank'>
                      Learn More
                    </a>
                  </Button>
                  <Button color='primary'>
                    <a href='https://github.com/cryptoeconomicslab/plasma-chamber/blob/master/README.md#getting-started' className='color-white' target='_blank'>
                      Get Started
                    </a>
                  </Button>
                </ButtonGroup>
              </div>
            </Jumbotron>
          </Col>
          <Col xs={12} md={7}>
            <div className='banner illus-header' />
          </Col>
        </Row>
      </Container>
    </div>

    <SubscribeNews />

    <div id='usecase' className='description'>
      <Jumbotron className='heading heading-guarantee'>
        <h1>Usable and Secure, Both Guaranteed</h1>
        <p className='lead'>Build your scalable, secure DApps with Plasma Chamber: a DApps development framework with Plasma enbedded in.</p>
      </Jumbotron>

      <Row className='guarantee'>
        <Col xs={12} md={4} className='guarantee-items'>
          <Media>
            <Media body>
              <Media object src='/static/images/desktop/ic-pos@2x.png' alt='Generic placeholder image' />
              <Media heading>
                Payment / Money<br />
                Transfer Application
              </Media>
            </Media>
          </Media>
        </Col>

        <Col xs={12} md={4} className='guarantee-items'>
          <Media>
            <Media body>
              <Media object src='/static/images/desktop/ic-marketplace@2x.png' alt='Generic placeholder image' />
              <Media heading>
                E-Commerce / Online<br />
                C2C Merketplace
              </Media>
            </Media>
          </Media>
        </Col>

        <Col xs={12} md={4} className='guarantee-items'>
          <Media>
            <Media body>
              <Media object src='/static/images/desktop/ic-orderbook@2x.png' alt='Generic placeholder image' />
              <Media heading>
                Off-chain Order Book DEX
              </Media>
            </Media>
          </Media>
        </Col>
      </Row>
    </div>

    <div id='roadmap' className='roadmap'>
      <div className='roadmap-bg' />
      <Container>
        <div className='title'>
          <h1>Roadmap</h1>
          <p>Implementation to the real world mass adoption of public Blockchain </p>
        </div>
        <RoadmapList />
      </Container>
    </div>

    <div id='connect' className='connect'>
      <Container>
        <h1>We’d love hear from you</h1>
        <AccountList />
      </Container>
    </div>

    <Container id='team'>
      <Jumbotron className='heading heading-team'>
        <h1>Meet Our Team</h1>
        <p className='lead'>Cryptoeconomics Lab is a team of distributed entrepreneurs, engineers, and blockchain experts.</p>
      </Jumbotron>

      <div className='teams'>
        <Card>
          <CardImg top width='100%' src='/static/images/desktop/img-taku@2x.png' alt='Card image cap' />
          <CardBody>
            <CardTitle>Taku Kataoka</CardTitle>
            <CardSubtitle>CEO</CardSubtitle>
            <CardText>Prior to CEL, Taku founded a real estate tech startup in 2013, after that he founded several startups in southeastern Asia.</CardText>
          </CardBody>
        </Card>

        <Card>
          <CardImg top width='100%' src='/static/images/desktop/img-shogo@2x.png' alt='Card image cap' />
          <CardBody>
            <CardTitle>Shogo Ochiai</CardTitle>
            <CardSubtitle>CTO</CardSubtitle>
            <CardText>Shogo was the former CTO of an Indonesian fashion e-commerce app, and is a co-researcher at the University of Tokyo.</CardText>
          </CardBody>
        </Card>

        <Card>
          <CardImg top width='100%' src='/static/images/desktop/img-syuhei@2x.png' alt='Card image cap' />
          <CardBody>
            <CardTitle>Syuhei Hiya</CardTitle>
            <CardSubtitle>Developer & Researcher</CardSubtitle>
            <CardText>Syuhei has been the CEO of Firebase competitor PaaS. He was also a MITOU Super Creator in 2010.</CardText>
          </CardBody>
        </Card>

        <Card>
          <CardImg top width='100%' src='/static/images/desktop/img-yuriko@2x.png' alt='Card image cap' />
          <CardBody>
            <CardTitle>Yuriko Nishijima</CardTitle>
            <CardSubtitle>Developer & Researcher</CardSubtitle>
            <CardText>Yuriko researches Plasma and focuses on the production of the blockchain technology.</CardText>
          </CardBody>
        </Card>
      </div>
    </Container>

    <div className='contact' id='contact'>
      <div className='message-bg' />
      <Container>
        <Row>
          <Col xs={12} md={12} lg={5}>
            <ContactUsForm />
          </Col>
          <Col xs={12} md={12} lg={7}>
            <div className='banner illus illus-message' />
          </Col>
        </Row>
      </Container>
    </div>
  </>
)
