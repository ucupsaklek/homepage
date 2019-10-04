import React, { Component } from 'react'
import {
  Col,
  Row,
  Jumbotron
} from 'reactstrap'

class Product extends Component {
  render () {
    return (
      <div id='product'>
        <Jumbotron className='heading heading-guarantee'>
          <h2>What is Plasma Chamber?</h2>
          <p className='lead'>General Purpose Layer2 Application Framework</p>
        </Jumbotron>

        <Row>
          <Col xs={6} md={3}>
            <img src='/static/images/svg/ic-secure.svg' alt='Secure' />
            <p>Secure</p>
          </Col>
          <Col xs={6} md={3}>
            <img src='/static/images/svg/ic-scalable.svg' alt='Scalable' />
            <p>Scalable</p>
          </Col>
          <Col xs={6} md={3}>
            <img src='/static/images/svg/ic-less-gas.svg' alt='Less Gas Cost' />
            <p>Less Gas Cost</p>
          </Col>
          <Col xs={6} md={3}>
            <img src='/static/images/svg/ic-finality.svg' alt='Operator-backend Instant Finality' />
            <p>
              Operator-backend
              <br />
              Instant Finality
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Product
