import React from 'react'
import Link from 'next/link'

const Footer = (props) => (
  <div className='wrapper'>
    <div className='item'>
      <h5>GET IN TOUCH</h5>

      <div className='address'>
        <p>
          Town West Building 6F, <br/>
          1-14-15, Nishishinjuku, <br/>
          Shinjuku Ku, Tokyo, <br/>
          Japan, 160-0023
        </p>
      </div>
    </div>

    <div className='item'>
      <h5>Product</h5>
      <ul className='products'>
        <li>
          <Link href='/product'>
            <a>Plasma Chamber</a>
          </Link>
        </li>
        {/* <li>
          <Link href='/overview'>
            <a>Overview</a>
          </Link>
        </li> */}
        <li>
          <Link href='https://github.com/cryptoeconomicslab/plasma-chamber/wiki'>
            <a>Documents</a>
          </Link>
        </li>
      </ul>
    </div>

    <div className='item'>
      <h5>Company</h5>

      <ul className='links'>
        <li>
          <a href='/'>Mission</a>
        </li>

        <li>
          <a href='/#vision'>Vision</a>
        </li>

        <li>
          <a href='/#team'>Team</a>
        </li>
      </ul>
    </div>

    <div className='item'>
      <h5>Social</h5>

      <ul className='socials'>
        <li>
          <Link href='https://github.com/cryptoeconomicslab/plasma-chamber'>
            <a>Github</a>
          </Link>
        </li>

        <li>
          <Link href='https://medium.com/cryptoeconomics-lab'>
            <a>Medium</a>
          </Link>
        </li>

        <li>
          <Link href='https://t.me/plasmaqanda'>
            <a>Telegram</a>
          </Link>
        </li>
      </ul>
    </div>

    <div className='item'>
      <h5>Contact</h5>

      <ul className='links'>
        <li>
          <a href='/contact'>Contact</a>
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
