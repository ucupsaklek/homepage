import React, { Component } from 'react'
import Head from 'next/head'
import { MemoryRouter, Route, Switch, Link } from 'react-router-dom'
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap'

import Overview from 'components/Product/Overview'
import Features from 'components/Product/Features'
import UseCase from 'components/Product/UseCase'

class Product extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false,
      active: 'overview'
    }
  }

  isActive = (path) => {
    return this.state.active === path
  }

  componentDidUpdate = () => {
    // console.log(this);
  }

  render () {
    return (
      <>
        <Head>
          <title>Plasma Chamber | Product</title>
          <meta property='og:title' content={'Plasma Chamber | Product'} />
        </Head>

        <Container>
          <div className='divider' />
        </Container>

        <div className='product'>
          <div className='product-bg' />
          <Container>
            <MemoryRouter>
              <Navbar
                expand={'lg'}
              >
                <Container>
                  <NavbarBrand to='/product'>
                    <div className='title'>
                      Plasma Chamber
                    </div>
                  </NavbarBrand>
                  <Nav navbar>
                    {/* <NavItem active={this.state.active == 'overview'}> */}
                    <NavItem>
                      <Link to='/overview'>Overview</Link>
                    </NavItem>
                    <NavItem>
                      <Link to='/features'>Features</Link>
                    </NavItem>
                    {/* <NavItem>
                      <Link to='/usecase'>Use Case</Link>
                    </NavItem> */}
                    <NavItem>
                      <a href='https://github.com/cryptoeconomicslab/plasma-chamber/wiki'>Docs</a>
                    </NavItem>
                  </Nav>
                </Container>
              </Navbar>
              <Container className='content'>
                <Switch>
                  <Route exact path='/overview' component={Overview} />
                  <Route path='/features' component={Features} />
                  <Route path='/usecase' component={UseCase} />
                </Switch>
              </Container>
            </MemoryRouter>
          </Container>
        </div>
      </>
    )
  }
}

export default Product
