import React, { Component } from 'react'
import { Container, Row, Col, Jumbotron, Button, ButtonGroup, Media } from 'reactstrap'
import RoadmapList from '../src/components/RoadmapList'
import AccountList from '../src/components/AccountList'
import ContactUsForm from '../src/components/ContactUsForm'

export default (props) => (
  <React.Fragment>
    <div className="general">
      <Container>
        <Row>
          <Col xs="6">
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
          <Col xs="6">
            <div className="banner intro-img">
              <img src="/static/images/banner-01.jpg" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="introduction">
      <Container>
        <Row>
          <Col xs="6">
            <div className="banner intro-img">
              <img src="/static/images/banner-01.jpg" />
            </div>
          </Col>
          <Col xs="6">
            <Jumbotron>
              <h1>Introducing Plasma Chamber</h1>
              <p className="lead">A framework to build usable Dapps on Plasma without sacrificing security .</p>
              <div className="lead">
                <ButtonGroup>
                  <Button color="default">Learn More</Button>
                  <Button color="primary">Get Started</Button>
                </ButtonGroup>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="roadmap" id="#company">
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
      <Container>
        <ContactUsForm />
      </Container>
    </div>
  </React.Fragment>
)
