import React, { Component } from 'react'
import Link from 'next/link'
import {
  Container,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      menuOpen: props.menuOpen,
      optionOpen: false
    }
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  toggleOption= () => {
    this.setState({ optionOpen: !this.state.optionOpen })
  }

  render () {
    return (
      <>
        <div className='header'>
          <header className={(this.props.sticky || this.state.menuOpen ? 'sticky' : '')} style={this.props.style}>
            <Navbar
              expand={'lg'}
              light
            >
              <Container>
                <NavbarBrand href='/'>
                  <div className='logo'>
                    <img src='/static/images/logo.svg' alt='Cryptoeconomics Lab' />
                  </div>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleMenu} className={this.state.menuOpen ? 'opened' : ''} />
                <Collapse isOpen={this.state.menuOpen} navbar>
                  <Nav navbar>
                    <NavItem>
                      <Link href='/#top'>
                        <a>Home</a>
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link href='/#usecase-wrapper'>
                        <a>Use Case</a>
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link href='/#product-wrapper'>
                        <a>Our Service</a>
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link href='/#team-wrapper'>
                        <a>Team</a>
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link href='/#contact-wrapper'>
                        <a>Contact</a>
                      </Link>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Container>
            </Navbar>
          </header>
        </div>
      </>
    )
  }
}

/**
 * Default Props
 */
Header.defaultProps = {
  sticky: false,
  menuOpen: false
}

export default Header
