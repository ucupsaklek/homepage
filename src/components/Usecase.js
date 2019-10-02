import React, { Component } from 'react'
import {
  Jumbotron
} from 'reactstrap'
import Slider from 'react-slick'

class Usecase extends Component {
  render () {
    const slickSettings = {
      className: 'center',
      centerMode: true,
      infinite: false,
      initialSlide: 0,
      slidesToShow: 3,
      centerPadding: '128px',
      speed: 500
    }

    return (
      <div id='usecase'>
        <Jumbotron className='heading heading-guarantee'>
          <h2>Use Case</h2>
          <p className='lead'>Various applications can be built with Plasma Chamber</p>
        </Jumbotron>

        <Slider {...slickSettings}>
          <div>
            <img src='/static/images/desktop/ic-pos@2x.png' alt='Generic placeholder image' />
            <h3 className='description-title'>Payment</h3>
            <div className='description-body'>
              The most basic, yet fundamental/ widely used functionality on various applications.
            </div>
          </div>
          <div>
            <img src='/static/images/desktop/ic-pos@2x.png' alt='Generic placeholder image' />
            <h3 className='description-title'>DEX</h3>
            <div className='description-body'>
              Atomic Swap technology on the second layer are put in practice in an actually scaling & secure DEX!
              <br />
              Trade between ETH and a variety of ERC20s will be exchanged with less gas cost.
            </div>
          </div>
          <div>
            <img src='/static/images/desktop/ic-pos@2x.png' alt='Generic placeholder image' />
            <h3 className='description-title'>Electricity Trading</h3>
            <div className='description-body'>
              Cryptoeconomics Lab is developing a P2P electricity trading service with Chubu Electric Power Co., Inc.
              <br />
              Our smart contract issues a token in the equivalent amount of electricity that are generated at home and allows us to trade it trustlessly using Plasma.
            </div>
          </div>
          <div>
            <img src='/static/images/desktop/ic-pos@2x.png' alt='Generic placeholder image' />
            <h3 className='description-title'>GAME</h3>
            <div className='description-body'>
              Our research on the second layer generalization are most-effectively put into practice in gaming applications, such as a board game on state channels, or battling game on Plasma where unlimited number of player can join at their arbitrary timing.
              <br />
              Security is of course vital for the gaming app to protect users’ in-app tokens, their assets.
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}

export default Usecase
