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
          <Col md={12} lg={4}>
            <Card>
              <CardImg top src='/static/images/desktop/img-taku@2x.png' alt='Taku Kataoka' />
              <CardBody>
                <CardTitle>Taku Kataoka</CardTitle>
                <CardSubtitle>CEO</CardSubtitle>
                <CardText>Prior to CEL, Taku founded a real estate tech startup in 2013, after that he founded several startups in southeastern Asia.</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col md={12} lg={4}>
            <Card>
              <CardImg top src='/static/images/desktop/img-shogo@2x.png' alt='Shogo Ochiai' />
              <CardBody>
                <CardTitle>Shogo Ochiai</CardTitle>
                <CardSubtitle>Chief Economist</CardSubtitle>
                <CardText>Shogo is a market analyst and a developer. He is in charge of OVM adoption. Project reseacher of cryptoeconomics at U.Tokyo</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col md={12} lg={4}>
            <Card>
              <CardImg top src='/static/images/desktop/img-syuhei@2x.png' alt='Shuhei Hiya' />
              <CardBody>
                <CardTitle>Shuhei Hiya</CardTitle>
                <CardSubtitle>Chief Scientist</CardSubtitle>
                <CardText>Shuhei won MITOU Super Creator Award in 2010. He founded the company building Backend as a Service for IoT in 2012. He transfered the ownership of the service to othe IoT company. After working at some IoT startups, he joined Cryptoeconomcis Lab in 2018.</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col md={12} lg={4}>
            <Card>
              <CardImg top src='/static/images/desktop/img-yuriko@2x.png' alt='Yuriko Nishijima' />
              <CardBody>
                <CardTitle>Yuriko Nishijima</CardTitle>
                <CardSubtitle>Researcher & Developer</CardSubtitle>
                <CardText>Yuriko researches and develops a second layer application framework in the R&D team.</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col md={12} lg={4}>
            <Card>
              <CardImg top src='/static/images/desktop/img-takamichi.png' alt='Takamichi Tsutsumi' />
              <CardBody>
                <CardTitle>Takamichi Tsutsumi</CardTitle>
                <CardSubtitle>Software Engineer</CardSubtitle>
                <CardText>Software Engineeer</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col md={12} lg={4}>
            <Card>
              <CardImg top src='/static/images/desktop/img-daiki.png' alt='Daiki Sekiguchi' />
              <CardBody>
                <CardTitle>Daiki Sekiguchi</CardTitle>
                <CardSubtitle>BizDev & Engineeer</CardSubtitle>
                <CardText>Daiki used to be a freelance engineer who specializes blockchain application development. At CEL, He is in charge of creating use cases of the Layer2 solutions with clients.</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Team
