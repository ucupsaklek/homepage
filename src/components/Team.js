import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  Container,
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
    )
  }
}

export default Team
