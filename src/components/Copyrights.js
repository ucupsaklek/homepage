import React, { Component } from 'react'

class Copyrights extends Component {
  render () {
    return (
      <>
        <div className='copyrights'>
          <h5 className='d-none d-md-block'>&copy; 2018-2019 Cryptoeconomics Lab, Inc. All rights reserved.</h5>

          <ul className='social'>
            <li className='icon-github icon-small'>
              <a href='https://github.com/cryptoeconomicslab/plasma-rust-framework/' target='_blank'>&nbsp;</a>
            </li>

            <li className='icon-medium icon-small'>
              <a href='https://medium.com/cryptoeconomics-lab' target='_blank'>&nbsp;</a>
            </li>

            <li className='icon-telegram icon-small'>
              <a href='https://t.me/plasmachamber' target='_blank'>&nbsp;</a>
            </li>

            <li className='icon-twitter icon-small'>
              <a href='https://t.me/plasmachamber' target='_blank'>&nbsp;</a>
            </li>
          </ul>
        </div>
        <h5 className='company d-lg-none d-xs-block'>&copy; 2018-2019 Cryptoeconomics Lab, Inc. All rights reserved.</h5>
      </>
    )
  }
}

export default Copyrights
