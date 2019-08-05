import React from 'react'
import { ListGroup, ListGroupItem, Media } from 'reactstrap'

export default (props) => (
  <>
    <div className='use-case'>
      <div className='head'>
        <h1>Our mission is achive programmable money revolution via the most feasible L2 solution.</h1>

        <p>With the support of public blockchain, programming of value is now available. Developers will design many type of application which organize trust and value in a good manner. More seamless internet will be there with Ethereum and Plasma!</p>
      </div>

      <Media>
        <Media left>
          <Media object src='/static/images/banner.jpg' alt='Generic placeholder image' />
        </Media>
        <Media body>
          <Media heading>
            USE CASE 01
          </Media>
          <div className='case-illus'>
            <div className='item'>Case A</div>
            <div className='divider' />
            <div className='item'>Case B</div>
          </div>
          <ListGroup>
            <ListGroupItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ListGroupItem>
            <ListGroupItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ListGroupItem>
            <ListGroupItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ListGroupItem>
          </ListGroup>
        </Media>
      </Media>

      <Media>
        <Media body>
          <Media heading>
            USE CASE 01
          </Media>
          <div className='case-illus'>
            <div className='item'>Case A</div>
            <div className='divider' />
            <div className='item'>Case B</div>
          </div>
          <ListGroup>
            <ListGroupItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ListGroupItem>
            <ListGroupItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ListGroupItem>
            <ListGroupItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ListGroupItem>
          </ListGroup>
        </Media>
        <Media right>
          <Media object src='/static/images/banner.jpg' alt='Generic placeholder image' />
        </Media>
      </Media>

      <Media>
        <Media left>
          <Media object src='/static/images/banner.jpg' alt='Generic placeholder image' />
        </Media>
        <Media body>
          <Media heading>
            E-Commerce/Online C2C Merketplace
          </Media>
          <div className='case-illus'>
            <div className='item'>Case A</div>
            <div className='divider' />
            <div className='item'>Case B</div>
          </div>
          <ListGroup>
            <ListGroupItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ListGroupItem>
            <ListGroupItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ListGroupItem>
            <ListGroupItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ListGroupItem>
          </ListGroup>
        </Media>
      </Media>
    </div>
  </>
)
