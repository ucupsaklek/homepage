import React from 'react'
import Link from 'next/link'

class Copyrights extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }
  }

  toggle = () => {
    this.setState({ open: !this.state.open })
  }

  onMouseOver = () => {
    this.setState({ open: true })
  }

  onMouseLeave = () => {
    this.setState({ open: false })
  }

  render () {
    return (
      <>
        <div className='copyrights'>
          <h5 className='d-none d-md-block'>&copy; 2018-2019 Cryptoeconomics Lab, Inc. All rights reserved.</h5>

          <ul className='social'>
            <li className='icon-github icon-small'>
              <Link href='https://github.com/cryptoeconomicslab/plasma-chamber'><a>&nbsp;</a></Link>
            </li>
            <li className='icon-medium icon-small'>
              <Link href='https://medium.com/cryptoeconomics-lab'><a>&nbsp;</a></Link>
            </li>
            <li className='icon-telegram icon-small'>
              <Link href='https://t.me/plasmachamber'><a>&nbsp;</a></Link>
            </li>
          </ul>
        </div>
        <h5 className='company d-lg-none d-xs-block'>&copy; 2018-2019 Cryptoeconomics Lab, Inc. All rights reserved.</h5>
      </>
    )
  }
}

export default Copyrights
