import React, { Component } from 'react'
import {
  Container,
  Col,
  Media,
  Row
} from 'reactstrap'

class Connect extends Component {
  render () {
    return (
      <>
        <Container id='connect'>
          <h2>We’d love hear from you</h2>
          <Row>
            <Col md={4}>
              <Media href='https://t.me/cryptoeocnomicslab' target='_blank'>
                <Media left>
                  <Media object src='/static/images/desktop/telegram@3x.png' alt='Telegram' />
                </Media>
                <Media body>
                  <Media heading>
                    Telegram
                  </Media>
                  Get close with us, make some discussion in the community.
                </Media>
              </Media>
            </Col>
            <Col md={4}>
              <Media href='https://github.com/cryptoeconomicslab/plasma-rust-framework/' target='_blank'>
                <Media left>
                  <Media object src='/static/images/desktop/github_2.png' alt='Github' />
                </Media>
                <Media body>
                  <Media heading>
                    Github
                  </Media>
                  Join our Github to see our latest codes.
                </Media>
              </Media>
            </Col>
            <Col md={4}>
              <Media href='https://medium.com/cryptoeconomics-lab' target='_blank'>
                <Media left>
                  <Media object src='/static/images/desktop/medium_2.png' alt='Medium' />
                </Media>
                <Media body>
                  <Media heading>
                    Medium
                  </Media>
                  Read our documentation and publication.
                </Media>
              </Media>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Connect
