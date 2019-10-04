import React, { Component } from 'react'
import {
  Col,
  Row
} from 'reactstrap'

class Service extends Component {
  render () {
    return (
      <>
        <Row>
          <Col md={6} className='parallel-section-desc-wrapper'>
            <h2 className='parallel-section-desc-title'>Our Service</h2>
            <div className='parallel-section-desc-body'>
              Do you need more support in operating your L2 application?
              <br />
              Here are what we can be helpful for you!
            </div>
            <div className='parallel-section-desc-btn-wrapper'>
              <button className='btn btn-primary'>
                <a href='#contact-wrapper' className='color-white'>Contact us!</a>
              </button>
            </div>
          </Col>

          <Col md={6}>
            <Row className='parallel-section-icons-wrapper'>
              <Col md={6}>
                <img src='/static/images/svg/fe-agreegator.svg' className='parallel-section-icon' alt='Aggregator Service' />
                <p className='parallel-section-icon-title'>Aggregator Service</p>
                <p className='parallel-section-icon-description'>Use a secure network and trust-less transaction aggregator service</p>
              </Col>

              <Col md={6}>
                <img src='/static/images/svg/fe-monitoring.svg' className='parallel-section-icon' alt='Monitoring Service' />
                <p className='parallel-section-icon-title'>Monitoring Service</p>
                <p className='parallel-section-icon-description'>Get monitoring and operational data</p>
              </Col>

              <Col md={6} className='mt-60'>
                <img src='/static/images/svg/fe-consulting.svg' className='parallel-section-icon' alt='Consulting Service' />
                <p className='parallel-section-icon-title'>Consulting Service</p>
                <p className='parallel-section-icon-description'>Build your Dapps’ frontend with our SDK</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    )
  }
}

export default Service
