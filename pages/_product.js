import React, { Component } from 'react'
import { Container, Row, Col, Jumbotron, Button, ButtonGroup, Media } from 'reactstrap'
import Link from 'next/link'
import Head from 'next/head'
import RoadmapList from '../src/components/RoadmapList'
import AccountList from '../src/components/AccountList'
import ContactUsForm from '../src/components/ContactUsForm'

export default (props) => (
  <React.Fragment>
    <Head>
      <title>Plasma Chamber</title>
      <meta property='og:title' content={'Plasma Chamber'} />
    </Head>

    <div className='general'>
      <div className='head-bg' />
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <Jumbotron>
              <div className='intro'>
                <div className='title'>
                  <span>New</span>
                </div>
                <div className='desc'>
                  <span>Introducing <b>Plasma Chamber</b></span>
                </div>
              </div>

              <h1>General Purpose Plasma</h1>
              <p className='lead'>Plasma Cash based #plapps framework with many fancy gadgets.</p>
              <p className='lead'>
                <a href='https://t.me/plasmaqanda'>
                  <Button color='primary'>Let's Talk With Us</Button>
                </a>
              </p>
            </Jumbotron>
          </Col>
          <Col xs={12} md={7}>
            <div className='banner illus-header' />
          </Col>
        </Row>
      </Container>
    </div>

    <div className='introduction'>
      <div className='plasma-bg' />
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className='banner illus-plasma' />
          </Col>
          <Col xs={12} md={6}>
            <Jumbotron>
              <h1>Introducing Plasma Chamber</h1>
              <p className='lead'>A framework to build usable Dapps on Plasma without sacrificing security.</p>
              <div className='lead'>
                <ButtonGroup>
                  <Button color='default'>
                    <a href='https://github.com/cryptoeconomicslab/plasma-chamber/wiki'>
                      Learn More
                    </a>
                  </Button>
                  <Button color='primary'>
                    <a href='https://github.com/cryptoeconomicslab/plasma-chamber' className='color-white'>
                      Get Started
                    </a>
                  </Button>
                </ButtonGroup>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>

    <div className='roadmap' id='#company'>
      <div className='roadmap-bg' />
      <Container>
        <div className='title'>
          <h1>Roadmap</h1>
          <p>Implementation to the real world mass adoption of public Blockchain </p>
        </div>
        <RoadmapList />
      </Container>
    </div>

    <div className='connect' id='#connect'>
      <Container>
        <h1>We’d love hear from you</h1>
        <AccountList />
      </Container>
    </div>

    <div className='contact' id='#contact'>
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
  </React.Fragment>
)
