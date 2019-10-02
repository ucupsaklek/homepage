import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  Container,
  Col,
  Row,
  Jumbotron
} from 'reactstrap'

class Team extends Component {
  render () {
    return (
      <Container id='team'>
        <Jumbotron className='heading heading-team'>
          <h2>Meet Our Team</h2>
          <p className='lead'>Cryptoeconomics Lab is a team of distributed entrepreneurs, engineers, and blockchain experts.</p>
        </Jumbotron>

        <Row className='teams'>
          <Col md={4}>
            <Card>
              <CardImg top src='/static/images/desktop/img-taku@2x.png' alt='Taku Kataoka' />
              <CardBody>
                <CardTitle>Taku Kataoka</CardTitle>
                <CardSubtitle>CEO</CardSubtitle>
                <CardText>Prior to CEL, Taku founded a real estate tech startup in 2013, after that he founded several startups in southeastern Asia.</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <CardImg top src='/static/images/desktop/img-shogo@2x.png' alt='Shogo Ochiai' />
              <CardBody>
                <CardTitle>Shogo Ochiai</CardTitle>
                <CardSubtitle>COO</CardSubtitle>
                <CardText>Shogo was the former CTO of an Indonesian fashion e-commerce app, and is a co-researcher at the University of Tokyo.</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <CardImg top src='/static/images/desktop/img-syuhei@2x.png' alt='Syuhei Hiya' />
              <CardBody>
                <CardTitle>Syuhei Hiya</CardTitle>
                <CardSubtitle>Chief Scientist</CardSubtitle>
                <CardText>Syuhei has been the CEO of Firebase competitor PaaS. He was also a MITOU Super Creator in 2010.</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <CardImg top src='/static/images/desktop/img-yuriko@2x.png' alt='Yuriko Nishijima' />
              <CardBody>
                <CardTitle>Yuriko Nishijima</CardTitle>
                <CardSubtitle>Researcher & Developer</CardSubtitle>
                <CardText>Yuriko researches Plasma and focuses on the production of the blockchain technology.</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <CardImg top src='/static/images/desktop/img-yuriko@2x.png' alt='Takamichi Tsutsumi' />
              <CardBody>
                <CardTitle>Takamichi Tsutsumi</CardTitle>
                <CardSubtitle>Software Engineer</CardSubtitle>
                <CardText>Takamichi</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <CardImg top src='/static/images/desktop/img-yuriko@2x.png' alt='Daiki Sekiguchi' />
              <CardBody>
                <CardTitle>Daiki Sekiguchi</CardTitle>
                <CardSubtitle>BizDev & Engineeer</CardSubtitle>
                <CardText>Daiki</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Team
