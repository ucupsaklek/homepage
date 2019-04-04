import React from 'react'
import Link from 'next/link'

const Footer = (props) => (
  <div className='wrapper'>
    <div className='item'>
      <h5>GET IN TOUCH</h5>

      <div className='address'>
        <p>
          Fukuoka Growth Next <br/>
          Daimyo, 2-6-11, Chuo Ward <br/>
          Fukuoka City, Fukuoka City, Japan
        </p>
      </div>
    </div>

    <div className='item'>
      <h5>Product</h5>

      <ul className='products'>
        <li>
          <Link href='/plasma-chamber'>
            <a>Plasma Chamber</a>
          </Link>
        </li>
      </ul>
    </div>

    <div className='item'>
      <h5>Company</h5>

      <ul className='links'>
        <li>
          <a href='#'>Vision</a>
        </li>

        <li>
          <a href='#'>Team</a>
        </li>
      </ul>
    </div>

    <div className='item'>
      <h5>Social</h5>

      <ul className='socials'>
        <li>
          <a href='#'>Github</a>
        </li>

        <li>
          <a href='#'>Medium</a>
        </li>

        <li>
          <a href='#'>Telegram</a>
        </li>
      </ul>
    </div>

    <div className='item'>
      <h5>Contact</h5>
    </div>
  </div>
)

/**
 * Default Props
 */
Footer.defaultProps = {}

export default Footer
