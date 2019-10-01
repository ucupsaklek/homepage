import React, { Component } from 'react'
import { Container, Media } from 'reactstrap'

class Connect extends Component {
  render () {
    return (
      <div id='connect' className='connect'>
        <Container>
          <h2>We’d love hear from you</h2>
          <div className='account-wrapper'>
            <Media href='https://t.me/plasmachamber' target='_blank'>
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

            <Media href='https://github.com/cryptoeconomicslab/plasma-chamber' target='_blank'>
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
          </div>
        </Container>
      </div>
    )
  }
}

export default Connect
