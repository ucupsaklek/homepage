import React, { Component } from 'react'
import {
  Jumbotron
} from 'reactstrap'
import Slider from 'react-slick'

class Usecase extends Component {
  constructor (props) {
    super(props)

    this.slickNext = this.slickNext.bind(this)
    this.slickPrev = this.slickPrev.bind(this)
  }

  slickNext () {
    this.refs.slider.slickNext()
  }

  slickPrev () {
    this.refs.slider.slickPrev()
  }

  render () {
    const slickSettings = {
      centerMode: true,
      infinite: false,
      initialSlide: 0,
      slidesToShow: 3,
      swipeToSlide: true,
      speed: 500,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }

    return (
      <>
        <div id='usecase'>
          <Jumbotron className='heading heading-guarantee'>
            <h2>Use Case</h2>
            <p className='lead'>Various applications can be built with Plasma Chamber</p>
          </Jumbotron>

          <Slider ref='slider' {...slickSettings}>
            <div key={1}>
              <img src='/static/images/desktop/ic-pos@2x.png' alt='Payment' />
              <div className='description-wrapper'>
                <h3 className='description-title'>Payment</h3>
                <div className='description-body'>
                  The most basic, yet fundamental/ widely used functionality on various applications.
                </div>
              </div>
            </div>

            <div key={2}>
              <img src='/static/images/desktop/ic-pos@2x.png' alt='DEX' />
              <div className='description-wrapper'>
                <h3 className='description-title'>DEX</h3>
                <div className='description-body'>
                  Atomic Swap technology on the second layer are put in practice in an actually scaling & secure DEX!
                  <br />
                  Trade between ETH and a variety of ERC20s will be exchanged with less gas cost.
                </div>
              </div>
            </div>

            <div key={3}>
              <img src='/static/images/desktop/ic-pos@2x.png' alt='Electricity Trading' />
              <div className='description-wrapper'>
                <h3 className='description-title'>Electricity Trading</h3>
                <div className='description-body'>
                  Cryptoeconomics Lab is developing a P2P electricity trading service with Chubu Electric Power Co., Inc.
                  <br />
                  Our smart contract issues a token in the equivalent amount of electricity that are generated at home and allows us to trade it trustlessly using Plasma.
                </div>
              </div>
            </div>

            <div key={4}>
              <img src='/static/images/desktop/ic-pos@2x.png' alt='GAME' />
              <div className='description-wrapper'>
                <h3 className='description-title'>GAME</h3>
                <div className='description-body'>
                  Our research on the second layer generalization are most-effectively put into practice in gaming applications, such as a board game on state channels, or battling game on Plasma where unlimited number of player can join at their arbitrary timing.
                  <br />
                  Security is of course vital for the gaming app to protect users’ in-app tokens, their assets.
                </div>
              </div>
            </div>
          </Slider>

          <div className='slick-btn-wrapper'>
            <button className='btn btn-primary slick-prev-btn' onClick={this.slickPrev}>Prev</button>
            <button className='btn btn-primary slick-next-btn' onClick={this.slickNext}>Next</button>
          </div>
        </div>
      </>
    )
  }
}

export default Usecase
