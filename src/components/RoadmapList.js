import React, { Component } from 'react'
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class RoadmapList extends Component {
  constructor (props) {
    super(props)

    this.settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    }
  }

  render() {
    return (
      <div className='list-wrapper'>
        <Slider {...this.settings}>
          <Card>
            <CardBody>
              <CardTitle>April 2018</CardTitle>
              <img width="100%" src="/static/images/thumb-item-01.jpg" alt="Card image cap" />
              <h5>Formation of the team / Started R&D</h5>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>May 2018</CardTitle>
              <img width="100%" src="/static/images/thumb-item-01.jpg" alt="Card image cap" />
              <h5>Translated Plasma Whitepaper into Japnese</h5>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>April 2019</CardTitle>
              <img width="100%" src="/static/images/thumb-item-01.jpg" alt="Card image cap" />
              <h5>First Demo Launched on Testnet</h5>
              <CardText>
                Launch fist stablecoin transfer app demo on testnet
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>May 2019 </CardTitle>
              <img width="100%" src="/static/images/thumb-item-01.jpg" alt="Card image cap" />
              <h5>Add Checkpoint Feature</h5>
              <CardText>
                Expected to add Checkpoint feature to the stablecoin transfer application demo
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>June  2019 </CardTitle>
              <img width="100%" src="/static/images/thumb-item-01.jpg" alt="Card image cap" />
              <h5>Add Defragmentation Feature</h5>
              <CardText>
                Expected to add Coin Defragmentation feature to the stablecoin transfer application demo
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>July 2019</CardTitle>
              <img width="100%" src="/static/images/thumb-item-01.jpg" alt="Card image cap" />
              <h5>Escrow App Demo Launched on Testnet</h5>
              <CardText>
                Expected to Implement escrow application demo with Custom Transaction feature
              </CardText>
            </CardBody>
          </Card>
        </Slider>
      </div>
    );
  }
}

/**
 * Default Props
 */
RoadmapList.defaultProps = {}

export default RoadmapList
