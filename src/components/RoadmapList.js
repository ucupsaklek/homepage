import React, { Component } from 'react'
import { isBrowser } from 'react-device-detect'
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from 'reactstrap'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class RoadmapList extends Component {
  constructor (props) {
    super(props)

    this.settings = {
      dots: false,
      infinite: false,
      arrows: true,
      speed: 500,
      slidesToShow: isBrowser ? 5 : 2,
      slidesToScroll: 1,
      adaptiveHeight: true
    }
  }

  render () {
    return (
      <div className='list-wrapper'>
        <Slider {...this.settings}>
          <Card>
            <CardBody>
              <CardTitle>April 2019</CardTitle>
              <img width='100%' src='/static/images/desktop/ic-launch.png' alt='First Demo Launched on Testnet' />
              <h5>First Demo Launched on Testnet</h5>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>May 2019 </CardTitle>
              <img width='100%' src='/static/images/desktop/ic-add-checkpoint.png' alt='Add Checkpoint Feature' />
              <h5>Add Checkpoint Feature</h5>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>June 2019 </CardTitle>
              <img width='100%' src='/static/images/desktop/ic.png' alt='Add Defragmentation Feature' />
              <h5>Add Defragmentation Feature</h5>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>July 2019</CardTitle>
              <img width='100%' src='/static/images/desktop/ic_2.png' alt='Escrow App Demo Launched on Testnet' />
              <h5>Escrow App Demo Launched on Testnet</h5>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>August 2019</CardTitle>
              <img width='100%' src='/static/images/desktop/ic-gas-less.png' alt='Add Gas-less Exit feature by GasStation Network' />
              <h5>Add Gas-less Exit feature by GasStation Network</h5>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>September 2019</CardTitle>
              <img width='100%' src='/static/images/desktop/group-11.png' alt='Launch Plapps Development Framework on Testnet' />
              <h5>Launch Plapps Development Framework on Testnet</h5>
            </CardBody>
          </Card>
        </Slider>
      </div>
    )
  }
}

/**
 * Default Props
 */
RoadmapList.defaultProps = {}

export default RoadmapList
