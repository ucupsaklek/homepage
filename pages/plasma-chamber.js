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

export default (props) => (
  <div className="product">
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
            <NavItem>
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
)
