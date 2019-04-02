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
      menuOpen: false,
      openConnect: false,
      openOption: false,
    }
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen})
  }

  toggleConnect = () => {
    this.setState({ openConnect: !this.state.openConnect})
  }

  onMouseOverConnect = () => {
    this.setState({ openConnect: true})
  }

  onMouseLeaveConnect = () => {
    this.setState({ openConnect: false})
  }

  toggleOption = () => {
    this.setState({ openOption: !this.state.openOption})
  }

  onMouseOverOption = () => {
    this.setState({ openOption: true})
  }

  onMouseLeaveOption = () => {
    this.setState({ openOption: false})
  }

  render () {
    return (
      <header className={"header " + (this.props.sticky || this.state.menuOpen ? 'sticky' : '')} style={this.props.style}>
        <Navbar
          expand={'lg'}
          light
        >
          <Container>
              <NavbarBrand href='/'>
                <div className="logo">
                  <img src="/static/images/logo@3x.png" alt="cryptoeconomicslab"/>
                </div>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggleMenu} className={this.state.menuOpen ? 'opened' : ''}/>
              <Collapse isOpen={this.state.menuOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <Link href='/plasma-chamber'>
                    <a>Plasma Chamber</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='#url'>
                    <a>Company</a>
                  </Link>
                </NavItem>

                <Dropdown nav inNavbar
                  isOpen={this.state.openConnect}
                  toggle={this.toggleConnect}
                >
                  <DropdownToggle nav
                    onMouseOver={this.onMouseOverConnect}
                  >
                    Connect
                  </DropdownToggle>
                  <DropdownMenu left={0} onMouseLeave={this.onMouseLeaveConnect}>
                    <DropdownItem>
                      Telegraph
                    </DropdownItem>
                    <DropdownItem>
                      Github
                    </DropdownItem>
                    <DropdownItem>
                      Medium
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <NavItem>
                  <Link href='/contact'>
                    <a>Contact</a>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
            <Dropdown nav className="options d-sm-none d-none d-lg-block"
              onMouseOver={this.onMouseOverOption}
              isOpen={this.state.openOption}
              onMouseLeave={this.onMouseLeaveOption}
              toggle={this.toggleOption}
            >
              <DropdownToggle nav >
                English
              </DropdownToggle>
              <DropdownMenu onMouseLeave={this.onMouseLeaveOption}>
                <DropdownItem>English</DropdownItem>
                <DropdownItem>Japan</DropdownItem>
              </DropdownMenu>
            </Dropdown>
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
}


export default Header
