import React from 'react'
import { Media } from 'reactstrap'

const AccountList = (props) => (
  <div className="account-wrapper">
    <Media>
      <Media left href="#">
        <Media object src="/static/images/github.svg" alt="Github" />
      </Media>
      <Media body>
        <Media heading>
          Github
        </Media>
        Join our Github to see our latest codes.
      </Media>
    </Media>

    <Media>
      <Media left href="#">
        <Media object src="/static/images/medium.svg" alt="Medium" />
      </Media>
      <Media body>
        <Media heading>
          Medium
        </Media>
        Read our documentation and publication.
      </Media>
    </Media>

    <Media>
      <Media left href="#">
        <Media object src="/static/images/telegram.png" alt="Discord" />
      </Media>
      <Media body>
        <Media heading>
          Discord
        </Media>
        Get close with us, make some discussion in the community.
      </Media>
    </Media>
  </div>
)


export default AccountList;
