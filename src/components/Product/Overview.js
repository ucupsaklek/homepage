import React from 'react'
import { Jumbotron, Button, ButtonGroup, Media } from 'reactstrap'
import { Link } from 'react-router-dom'

export default (props) => (
  <>
    <div className='product-bg product-bg-image' />
    <div className='overview'>
      <Jumbotron>
        <h1>Plasma Chamber</h1>
        <p className='lead'>A framework to build usable Dapps on Plasma without sacrificing security</p>

        <div className='action'>
          <ButtonGroup>
            <Button color='primary'>
              <Link to='https://plasma-chamber-demo1-m.cryptoeconomicslab.com/'>TRY DEMO</Link>
            </Button>
            <Button color='default'>
              <Link to='/features'>EXPLORE FEATURE</Link>
            </Button>
          </ButtonGroup>
        </div>
      </Jumbotron>

      <div className='benefit'>
        <Media>
          <Media left>
            <Media object src='/static/images/desktop/ic-scalable.png' alt='Scalable' />
          </Media>
          <Media body>
            <Media heading>
              Scalable
            </Media>
            Transaction compression technology on Plasma makes your application scalable.
          </Media>
        </Media>

        <Media>
          <Media left>
            <Media object src='/static/images/desktop/ic-usable.png' alt='Usable' />
          </Media>
          <Media body>
            <Media heading>
              Usable
            </Media>
            Reduced gas cost and quick finality are promised.
          </Media>
        </Media>

        <Media>
          <Media left>
            <Media object src='/static/images/desktop/ic-secure.png' alt='Secure & Decentralized' />
          </Media>
          <Media body>
            <Media heading>
              Secure & Decentralized
            </Media>
            Inheritating Ethereum’s PoW consensus algorithm, Plasma Chamber guarantees a secure and decentralized network.
          </Media>
        </Media>
      </div>
    </div>
  </>
)
