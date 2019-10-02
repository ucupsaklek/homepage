import React, { Component } from 'react'
import {
  Col,
  Row
} from 'reactstrap'

class Framework extends Component {
  render () {
    return (
      <>
        <Row>
          <Col md={6}>
            <Row className='framework-icons-wrapper'>
              <Col md={6}>
                <img src='/static/images/svg/ic-finality.svg' className='framework-icon' />
                <p className='framework-icon-title'>Secure</p>
                <p className='framework-icon-description'>Build your Dapps’ frontend with our SDK</p>
              </Col>
              <Col md={6}>
                <img src='/static/images/svg/ic-finality.svg' className='framework-icon' />
                <p className='framework-icon-title'>OVM Multi-platform Client</p>
                <p className='framework-icon-description'>Our Client Supports various platforms: Web, Android, and iOS</p>
              </Col>
              <Col md={6} className='mt-60'>
                <img src='/static/images/svg/ic-finality.svg' className='framework-icon' />
                <p className='framework-icon-title'>Development Language</p>
                <p className='framework-icon-description'>Develop your general application with the language</p>
              </Col>
            </Row>
          </Col>
          <Col md={6} className='framework-desc-wrapper'>
            <h2 className='framework-desc-title'>Our Framework</h2>
            <div className='framework-desc-body'>Build your Application Seamlessly with our Blockchain Layer 2 Technology</div>
            <div className='framework-desc-btn-wrapper'>
              <button className='btn btn-primary'>
                <a href='https://github.com/cryptoeconomicslab/plasma-rust-framework/' target='_blank' className='color-white'>Github</a>
              </button>
            </div>
          </Col>
        </Row>
      </>
    )
  }
}

export default Framework
