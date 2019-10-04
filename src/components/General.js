import React, { Component } from 'react'
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Jumbotron,
  Row
} from 'reactstrap'
import Header from './Header'
import { Sticky } from 'react-sticky'

class General extends Component {
  render () {
    return (
      <>
        <div className='head-bg'>
          <Sticky>
            {({
              style,
              isSticky
            }) => (
              <Header sticky={isSticky} style={style} />
            )}
          </Sticky>
          <div id='top' className='general'>
            <Container>
              <Row>
                <Col xs={12} md={5}>
                  <Jumbotron>
                    <div className='intro'>
                      <div className='desc'>
                        <span>Introducing <b>Plasma Chamber</b></span>
                      </div>
                    </div>

                    <h1>Build Your Secure & Usable Dapps Without Any Hassle</h1>
                    <p className='lead'>Plasma Chamber is a DApps development framework that guarantees to make the app secure, scalable, and usable with the Layer 2 technology.</p>
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
            <div className='scroll-down-wrapper'>
              <img src='/static/images/desktop/scroll-down.svg' />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default General
