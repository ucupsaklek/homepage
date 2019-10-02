import React, { Component } from 'react'
import {
  Container,
  Col,
  Jumbotron,
  Row
} from 'reactstrap'

class Donors extends Component {
  render () {
    return (
      <>
        <Container id='donors'>
          <Jumbotron className='heading heading-team'>
            <h2>Plasma Chamber’s Donors</h2>
            <p className='lead'>We are more than grateful to receive all the supports from these incredible donors!</p>
          </Jumbotron>

          <Row>
            <Col md={4}>
              <div className='donors-icon-wrapper'>
                <img src='/static/images/desktop/ef-grant.png' alt='Ethereum Foundation Grants' />
              </div>
            </Col>

            <Col md={4}>
              <div className='donors-icon-wrapper'>
                <img src='/static/images/desktop/tf-grant.png' alt='Tezos Foundation Grants' />
              </div>
            </Col>

            <Col md={4}>
              <div className='donors-icon-wrapper'>
                <img src='/static/images/desktop/gitcoin-grant.png' alt='Gitcoin Grants' />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Donors
