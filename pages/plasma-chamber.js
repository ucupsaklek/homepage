import React, { Component } from 'react'
import { MemoryRouter, Route, Switch, Link } from "react-router-dom"
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap'
import Overview from 'components/Product/Overview'
import Features from 'components/Product/Features'
import UseCase from 'components/Product/UseCase'
import Document from 'components/Product/Document'

class Product extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false,
      active: '/'
    }
  }

  isActive = (path) => {
    return this.state.active == path
  }

  componentDidUpdate = () => {
    console.log(this);
  }

  render () {
    return (
      <React.Fragment>
        <Head>
          <title>Plasma Chamber | Product</title>
          <meta property='og:title' content={'Plasma Chamber | Product'} />
        </Head>

        <Container>
          <div className="divider"></div>
        </Container>
        <div className="product">
          <div className="product-bg"></div>
          <MemoryRouter>
            <Navbar
              expand={true}
            >
              <Container>
                <NavbarBrand to='/'>
                  <div className="title">
                    Plasma Chamber
                  </div>
                </NavbarBrand>
                <Nav navbar>
                  <NavItem active>
                    <Link to='/'>Overview</Link>
                  </NavItem>
                  <NavItem>
                    <Link to='/features'>Features</Link>
                  </NavItem>
                  <NavItem>
                    <Link to='/usecase'>Use Case</Link>
                  </NavItem>
                  <NavItem>
                    <Link to='/docs'>Docs</Link>
                  </NavItem>
                </Nav>
              </Container>
            </Navbar>
            <Container className="content">
              <Switch>
                <Route exact path="/" component={Overview} />
                <Route path="/features" component={Features} />
                <Route path="/usecase" component={UseCase} />
                <Route path="/docs" component={Document} />
              </Switch>
            </Container>
          </MemoryRouter>
        </div>
      </React.Fragment>
    )
  }
}

export default Product
