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
          <Col xs={12} md={6} className='parallel-section-desc-wrapper d-block d-lg-none'>
            <h2 className='parallel-section-desc-title'>Our Framework</h2>
            <div className='parallel-section-desc-body'>Build your Application Seamlessly with our Blockchain Layer 2 Technology</div>
            <div className='parallel-section-desc-btn-wrapper'>
              <button className='btn btn-primary'>
                <a href='https://github.com/cryptoeconomicslab/plasma-rust-framework/' target='_blank' className='color-white'>Github</a>
              </button>
            </div>
          </Col>

          <Col md={6}>
            <Row className='parallel-section-icons-wrapper'>
              <Col xs={12} md={6}>
                <img src='/static/images/svg/fe-frontend-sdk.svg' className='parallel-section-icon' alt='Secure' />
                <p className='parallel-section-icon-title'>Frontend SDK</p>
                <p className='parallel-section-icon-description'>Build your Dapps’ frontend with our SDK</p>
              </Col>

              <Col xs={12} md={6}>
                <img src='/static/images/svg/fe-ovm-client.svg' className='parallel-section-icon' alt='OVM Multi-platform Client' />
                <p className='parallel-section-icon-title'>OVM Multi-platform Client</p>
                <p className='parallel-section-icon-description'>Our Client Supports various platforms: Web, Android, and iOS</p>
              </Col>

              <Col xs={12} md={6}>
                <img src='/static/images/svg/fe-development-language.svg' className='parallel-section-icon' alt='Development Language' />
                <p className='parallel-section-icon-title'>Development Language</p>
                <p className='parallel-section-icon-description'>Develop your general application with the language</p>
              </Col>
            </Row>
          </Col>

          <Col md={6} className='parallel-section-desc-wrapper d-none d-lg-block'>
            <h2 className='parallel-section-desc-title'>Our Framework</h2>
            <div className='parallel-section-desc-body'>Build your Application Seamlessly with our Blockchain Layer 2 Technology</div>
            <div className='parallel-section-desc-btn-wrapper'>
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
