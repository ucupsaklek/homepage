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
                      <Link href='/#use-case'>
                        <a>Use Case</a>
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link href='/#our-framework'>
                        <a>Our Framework</a>
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link href='/#our-service'>
                        <a>Our Service</a>
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link href='/#faq'>
                        <a>FAQ</a>
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link href='/#connect'>
                        <a>Connect</a>
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link href='/#team'>
                        <a>Team</a>
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link href='/#contact'>
                        <a>Contact</a>
                      </Link>
                    </NavItem>
                  </Nav>
                </Collapse>
                {/* <Dropdown nav className="options d-sm-none d-none d-lg-block"
                  isOpen={this.state.optionOpen}
                  toggle={this.toggleOption}
                >
                  <DropdownToggle nav caret className="lang-select">
                    English
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>English</DropdownItem>
                    <DropdownItem>Japan</DropdownItem>
                  </DropdownMenu>
                </Dropdown> */}
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
