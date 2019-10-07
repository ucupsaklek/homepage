import React, { Component } from 'react'
import {
  Container,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap'
import {
  animateScroll as scroll,
  Link
} from 'react-scroll'

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

  scrollToTop = () => {
    scroll.scrollToTop()
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
                      <Link smooth to='general-wrapper'>
                        Home
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link smooth offset={-32} to='usecase-wrapper'>
                        Use Case
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link smooth offset={-64} to='product-wrapper'>
                        Our Service
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link smooth offset={-32} to='team-wrapper'>
                        Team
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link smooth offset={-32} to='contact-wrapper'>
                        Contact
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
