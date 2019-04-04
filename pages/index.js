import React, { Component } from 'react'
import { Container, Row, Col, Jumbotron, Button, ButtonGroup, Media } from 'reactstrap'
import Link from 'next/link'
import RoadmapList from '../src/components/RoadmapList'
import AccountList from '../src/components/AccountList'
import ContactUsForm from '../src/components/ContactUsForm'

export default (props) => (
  <React.Fragment>
    <div className="general">
      <div className="head-bg"></div>
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <Jumbotron>
              <div className="intro">
                <div className="title">
                  <span>New</span>
                </div>
                <div className="desc">
                  <span>Introducing <b>Plasma Chamber</b></span>
                </div>
              </div>

              <h1>General Purpose Plasma</h1>
              <p className="lead">Plasma Cash based #plapps framework with many fancy gadgets.</p>
              <p className="lead">
               <Button color="primary">Let's Talk With Us</Button>
              </p>
            </Jumbotron>
          </Col>
          <Col xs={12} md={7}>
            <div className="banner illus-header">
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="introduction">
      <div className="plasma-bg"></div>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="banner illus-plasma">
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Jumbotron>
              <h1>Introducing Plasma Chamber</h1>
              <p className="lead">A framework to build usable Dapps on Plasma without sacrificing security .</p>
              <div className="lead">
                <ButtonGroup>
                  <Button color="default">
                    <Link href="/plasma-chamber">
                      <a>Learn More</a>
                    </Link>
                  </Button>
                  <Button color="primary">Get Started</Button>
                </ButtonGroup>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="roadmap" id="#company">
      <div className="roadmap-bg"></div>
      <Container>
        <div className="title">
          <h1>Roadmap</h1>
          <p>Implementation to the real world mass adoption of public Blockchain </p>
        </div>
        <RoadmapList />
      </Container>
    </div>

    <div className="connect" id="#connect">
      <Container>
        <h1>We’d love hear from you</h1>
        <AccountList />
      </Container>
    </div>

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
  </React.Fragment>
)
