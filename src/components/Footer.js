import React from 'react'
import Link from 'next/link'

const Footer = () => (
  <div className='wrapper'>
    <div className='item'>
      <h5>GET IN TOUCH</h5>

      <div className='address'>
        <p>
          Town West Building 6F, <br />
          1-14-15, Nishishinjuku, <br />
          Shinjuku Ku, Tokyo, <br />
          Japan, 160-0023
        </p>
      </div>
    </div>

    <div className='item'>
      <h5>Page</h5>
      <ul className='products'>
        <li>
          <Link href='/#top'>
            <a>Top</a>
          </Link>
        </li>
        <li>
          <Link href='/#usecase'>
            <a>Use Case</a>
          </Link>
        </li>
        <li>
          <Link href='/#roadmap'>
            <a>Roadmap</a>
          </Link>
        </li>
      </ul>
    </div>

    <div className='item'>
      <h5>Product</h5>
      <ul className='products'>
        <li>
          <a href='https://github.com/cryptoeconomicslab/plasma-chamber' target='_blank'>
            Learn More
          </a>
        </li>
        <li>
          <a href='https://github.com/cryptoeconomicslab/plasma-chamber/blob/master/README.md#getting-started' target='_blank'>
            Get Started
          </a>
        </li>
      </ul>
    </div>

    <div className='item'>
      <h5>Social</h5>

      <ul className='socials'>
        <li>
          <a href='https://github.com/cryptoeconomicslab/plasma-chamber' target='_blank'>
            Github
          </a>
        </li>

        <li>
          <a href='https://medium.com/cryptoeconomics-lab' target='_blank'>
            Medium
          </a>
        </li>

        <li>
          <a href='https://t.me/plasmachamber' target='_blank'>
            Telegram
          </a>
        </li>
      </ul>
    </div>

    <div className='item'>
      <h5>Contact</h5>

      <ul className='links'>
        <li>
          <a href='/#contact'>Contact</a>
        </li>
      </ul>
    </div>
  </div>
)

/**
 * Default Props
 */
Footer.defaultProps = {}

export default Footer
