import React from 'react'
import Link from 'next/link'
import {
  Container,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      menuOpen: props.menuOpen,
      productOpen: false,
      connectOpen: false,
      optionOpen: false
    }
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  toggleProduct = () => {
    this.setState({ productOpen: !this.state.productOpen })
  }

  toggleConnect = () => {
    this.setState({ connectOpen: !this.state.connectOpen })
  }

  toggleOption= () => {
    this.setState({ optionOpen: !this.state.optionOpen })
  }

  render () {
    return (
      <header className={'header ' + (this.props.sticky || this.state.menuOpen ? 'sticky' : '')} style={this.props.style}>
        <Navbar
          expand={'lg'}
          light
        >
          <Container>
            <NavbarBrand href='/'>
              <div className='logo'>
                <img src='/static/images/logo@3x.png' alt='cryptoeconomicslab' />
              </div>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleMenu} className={this.state.menuOpen ? 'opened' : ''} />
            <Collapse isOpen={this.state.menuOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <Link href='/#top'>
                    <a>TOP</a>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link href='/#usecase'>
                    <a>Use case</a>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link href='/#roadmap'>
                    <a>Roadmap</a>
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

                {/* <Dropdown nav inNavbar
                  isOpen={this.state.connectOpen}
                  toggle={this.toggleConnect}
                >
                  <DropdownToggle nav caret>
                    Connect
                  </DropdownToggle>
                  <DropdownMenu left={0}>
                    <DropdownItem onClick={this.toggleMenu}>
                      <Link href='https://github.com/cryptoeconomicslab/plasma-chamber'>
                        <a>Github</a>
                      </Link>
                    </DropdownItem>
                    <DropdownItem onClick={this.toggleMenu}>
                      <Link href='https://medium.com/cryptoeconomics-lab'>
                        <a>Medium</a>
                      </Link>
                    </DropdownItem>
                    <DropdownItem onClick={this.toggleMenu}>
                      <Link href='https://t.me/plasmachamber'>
                        <a>Telegram</a>
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown> */}

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
