import React, { Component } from 'react'
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Jumbotron,
  Row
} from 'reactstrap'
import { Link } from 'react-scroll'

class General extends Component {
  render () {
    return (
      <>
        <div className='head-bg'>
          <div id='top' className='general'>
            <Container>
              <Row>
                <Col md={12} lg={5}>
                  <Jumbotron>
                    <div className='intro'>
                      <div className='desc'>
                        <span>Introducing <b>Plasma Chamber</b></span>
                      </div>
                    </div>

                    <h1>Build Your Secure & Usable Dapps Without Any Hassle</h1>
                    <p className='lead'>Plasma Chamber is a DApps development framework that guarantees to make the app secure, scalable, and usable with the Layer 2 technology.</p>
                    <div className='lead lead-btn-wrapper'>
                      <ButtonGroup>
                        <Button color='primary'>
                          <Link smooth offset={-32} to='contact-wrapper'>
                            Contact us!
                          </Link>
                        </Button>
                      </ButtonGroup>
                    </div>
                  </Jumbotron>
                </Col>

                <Col md={12} lg={7}>
                  <div className='banner illus-header' />
                </Col>
              </Row>
            </Container>
            <div className='scroll-down-wrapper d-none d-lg-block'>
              <Link smooth offset={-32} to='usecase-wrapper'>
                <img src='/static/images/svg/scroll-down.svg' />
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default General
