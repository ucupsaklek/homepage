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
          <Col md={3}>
            <img src='/static/images/svg/ic-finality.svg' />
            <p>Secure</p>
          </Col>
          <Col md={3}>
            <img src='/static/images/svg/ic-finality.svg' />
            <p>Scalable</p>
          </Col>
          <Col md={3}>
            <img src='/static/images/svg/ic-finality.svg' />
            <p>Less Gas Cost</p>
          </Col>
          <Col md={3}>
            <img src='/static/images/svg/ic-finality.svg' />
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
