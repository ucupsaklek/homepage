import React from 'react'
import { Media } from 'reactstrap'

const AccountList = (props) => (
  <div className="account-wrapper">
    <Media href="https://github.com/cryptoeconomicslab/plasma-chamber">
      <Media left>
        <Media object src="/static/images/desktop/github_2.png" alt="Github" />
      </Media>
      <Media body>
        <Media heading>
          Github
        </Media>
        Join our Github to see our latest codes.
      </Media>
    </Media>

    <Media href="https://medium.com/cryptoeconomics-lab">
      <Media left>
        <Media object src="/static/images/desktop/medium_2.png" alt="Medium" />
      </Media>
      <Media body>
        <Media heading>
          Medium
        </Media>
        Read our documentation and publication.
      </Media>
    </Media>

    <Media href="https://t.me/plasmaqanda">
      <Media left>
        <Media object src="/static/images/desktop/telegram@3x.png" alt="Telegram" />
      </Media>
      <Media body>
        <Media heading>
          Telegram
        </Media>
        Get close with us, make some discussion in the community.
      </Media>
    </Media>
  </div>
)


export default AccountList;
