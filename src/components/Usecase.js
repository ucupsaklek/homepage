import React, { Component } from 'react'
import {
  Col,
  Jumbotron,
  Media,
  Row
} from 'reactstrap'

class Usecase extends Component {
  render () {
    return (
      <div id='usecase' className='description'>
        <Jumbotron className='heading heading-guarantee'>
          <h2>Usable and Secure, Both Guaranteed</h2>
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
    )
  }
}

export default Usecase
