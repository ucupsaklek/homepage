import React, { Component } from 'react'
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Jumbotron,
  Row
} from 'reactstrap'

class General extends Component {
  render () {
    return (
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
    )
  }
}

export default General
